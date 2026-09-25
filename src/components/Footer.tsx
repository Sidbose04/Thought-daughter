export default function Footer() {
  return (
    <footer>
      <div>
        <p className="footer-title">Stay close.</p>
        <a
          className="waitlist"
          href="mailto:hello@thoughtdaughter.com?subject=Waiting%20list"
        >
          Join the waiting list <span>↗</span>
        </a>
      </div>
      <div className="footer-links">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="mailto:hello@thoughtdaughter.com">Email</a>
        <a href="https://wa.me/">WhatsApp</a>
      </div>
      <p className="copyright">© Thought Daughter</p>
    </footer>
  );
}
