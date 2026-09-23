"use client";

import Image from "next/image";
import styles from "./GallerySection.module.css";

export default function GallerySection() {
  return (
    <section className={styles.gallery}>
      <div className={styles.galleryTop}>
        <p className={styles.eyebrow}>Atmosphere</p>
        <h2 className={styles.heading}>
          Stillness is not empty.
          <br />
          It is <em>full</em> of answers.
        </h2>
      </div>

      <figure className={styles.galleryLarge}>
        <Image
          src="/images/deck/gallery-large.jpg"
          alt="Thought Daughter card deck resting on natural wooden surface"
          width={700}
          height={840}
          className={styles.galleryImg}
        />
        <figcaption className={styles.caption}>
          Curated objects for quiet rooms and deep reverie
        </figcaption>
      </figure>

      <figure className={styles.gallerySmall}>
        <Image
          src="/images/deck/gallery-small.jpg"
          alt="Hands examining an inquiry card by window morning light"
          width={500}
          height={500}
          className={styles.galleryImg}
        />
        <figcaption className={styles.caption}>
          A companion for memory, solitude, and sincere encounter
        </figcaption>
      </figure>
    </section>
  );
}
