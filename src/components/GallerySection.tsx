"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface GallerySlide {
  src: string;
  alt: string;
}

const GALLERY_IMAGES: GallerySlide[] = [
  {
    src: "/images/deck/gallery-large.jpg",
    alt: "Thought Daughter deck at a small street café table",
  },
  {
    src: "/images/deck/gallery-small.jpg",
    alt: "Thought Daughter cards scattered across a café table",
  },
  {
    src: "/images/deck/feature-1.jpg",
    alt: "Thought Daughter cards and drinks on an outdoor café table",
  },
  {
    src: "/images/deck/feature-2.jpg",
    alt: "A person holding Thought Daughter cards with a drink",
  },
  {
    src: "/images/WhatsApp Image 2026-09-22 at 18.01.56.jpeg",
    alt: "Thought Daughter cards placed beside a drink on a metal stool",
  },
  {
    src: "/images/WhatsApp Image 2026-09-22 at 18.01.57.jpeg",
    alt: "Thought Daughter cards laying on soft bed sheets",
  },
  {
    src: "/images/WhatsApp Image 2026-09-22 at 18.03.11.jpeg",
    alt: "Thought Daughter newspaper and prints on a vintage stand",
  },
];

// Duplicate list 3 times so the middle set can loop endlessly in both directions
const EXTENDED_IMAGES = [...GALLERY_IMAGES, ...GALLERY_IMAGES, ...GALLERY_IMAGES];

export default function GallerySection() {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Position and interaction refs
  const scrollPosRef = useRef(0);
  const cycleWidthRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const isPointerDownRef = useRef(false);
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to measure exact cycle width from DOM
  const updateCycleWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    const items = trackRef.current.children;
    if (items.length >= GALLERY_IMAGES.length * 2) {
      const first = items[0] as HTMLElement;
      const nextCycleFirst = items[GALLERY_IMAGES.length] as HTMLElement;
      const measured = nextCycleFirst.offsetLeft - first.offsetLeft;
      if (measured > 0) {
        cycleWidthRef.current = measured;
        return measured;
      }
    }
    return cycleWidthRef.current;
  }, []);

  // Initialize position in middle copy and listen for window resizing
  useEffect(() => {
    const initWidth = updateCycleWidth();
    if (initWidth > 0 && scrollPosRef.current === 0) {
      scrollPosRef.current = initWidth;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${scrollPosRef.current}px, 0, 0)`;
      }
    }

    const handleResize = () => {
      updateCycleWidth();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateCycleWidth]);

  // Keep scroll position within the seamless cycle range [cycleWidth, 2 * cycleWidth)
  const normalizeScrollPos = useCallback(() => {
    const cycle = cycleWidthRef.current || updateCycleWidth();
    if (cycle <= 0) return;

    while (scrollPosRef.current >= cycle * 2) {
      scrollPosRef.current -= cycle;
    }
    while (scrollPosRef.current < cycle) {
      scrollPosRef.current += cycle;
    }
  }, [updateCycleWidth]);

  // Smooth continuous slow scroll animation
  useEffect(() => {
    let lastTimestamp: number | null = null;
    const speed = 0.75; // Pixels per frame (~45px/s)

    const step = (timestamp: number) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && !isDragging && trackRef.current) {
        scrollPosRef.current += speed * (delta / 16.67);
        normalizeScrollPos();
        trackRef.current.style.transform = `translate3d(-${scrollPosRef.current}px, 0, 0)`;
      }

      animFrameIdRef.current = requestAnimationFrame(step);
    };

    animFrameIdRef.current = requestAnimationFrame(step);
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isPaused, isDragging, normalizeScrollPos]);

  // Pointer & Touch handlers
  const handlePointerDown = (clientX: number) => {
    updateCycleWidth();
    isPointerDownRef.current = true;
    dragStartXRef.current = clientX;
    dragStartScrollRef.current = scrollPosRef.current;

    // Long press on phone/touch: pause slow scrolling
    longPressTimerRef.current = setTimeout(() => {
      setIsPaused(true);
    }, 240);
  };

  const handlePointerMove = (clientX: number) => {
    if (!isPointerDownRef.current) return;
    const deltaX = clientX - dragStartXRef.current;

    if (Math.abs(deltaX) > 6) {
      setIsDragging(true);
      setIsPaused(true);

      if (trackRef.current) {
        scrollPosRef.current = dragStartScrollRef.current - deltaX;
        normalizeScrollPos();
        trackRef.current.style.transform = `translate3d(-${scrollPosRef.current}px, 0, 0)`;
      }
    }
  };

  const handlePointerUp = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }

    isPointerDownRef.current = false;
    setIsDragging(false);
    normalizeScrollPos();

    // Resume smooth scroll after release
    setTimeout(() => {
      setIsPaused(false);
    }, 900);
  };

  // Step button navigation for desktop/mobile
  const scrollByAmount = useCallback((offset: number) => {
    setIsPaused(true);
    updateCycleWidth();

    if (trackRef.current) {
      scrollPosRef.current += offset;

      // Animate smoothly to new target
      trackRef.current.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      trackRef.current.style.transform = `translate3d(-${scrollPosRef.current}px, 0, 0)`;

      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          normalizeScrollPos();
          trackRef.current.style.transform = `translate3d(-${scrollPosRef.current}px, 0, 0)`;
        }
        setIsPaused(false);
      }, 520);
    }
  }, [updateCycleWidth, normalizeScrollPos]);

  // Trackpad / wheel horizontal support
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 15) {
      setIsPaused(true);
      updateCycleWidth();
      scrollPosRef.current += e.deltaX * 1.2;
      normalizeScrollPos();
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translate3d(-${scrollPosRef.current}px, 0, 0)`;
      }
      setTimeout(() => {
        setIsPaused(false);
      }, 600);
    }
  };

  return (
    <section
      className="gallery gallery-carousel-section"
      aria-label="Where the cards come to life"
    >
      <div className="gallery-header-row">
        <div className="gallery-top">
          <p className="eyebrow">In the wild</p>
          <h2>
            Where the cards
            <br />
            come to <em>life.</em>
          </h2>
        </div>

        {/* Desktop & Mobile Navigation Controls */}
        <div className="gallery-controls" aria-label="Carousel navigation">
          <button
            type="button"
            className="gallery-nav-btn prev"
            onClick={() => scrollByAmount(-380)}
            aria-label="Scroll left"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="gallery-nav-btn next"
            onClick={() => scrollByAmount(380)}
            aria-label="Scroll right"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Infinite Seamless Scrolling Track (Edge-to-Edge) */}
      <div
        className={`gallery-carousel-stage ${isPaused ? "is-paused" : ""} ${isDragging ? "is-dragging" : ""}`}
        ref={stageRef}
        onWheel={handleWheel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isPointerDownRef.current) {
            setIsPaused(false);
          }
        }}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}
        onTouchCancel={handlePointerUp}
        onMouseDown={(e) => {
          e.preventDefault();
          handlePointerDown(e.clientX);
        }}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={handlePointerUp}
      >
        <div className="gallery-carousel-track continuous" ref={trackRef}>
          {EXTENDED_IMAGES.map((img, idx) => (
            <div className="gallery-slide-item max-four" key={idx}>
              <div className="gallery-square-card">
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  className="gallery-square-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption at the bottom */}
      <div className="gallery-bottom">
        <p className="gallery-caption-sub">
          Around tables. On quiet nights.
          <br />
          In between everything.
        </p>
      </div>
    </section>
  );
}
