export default function Footer() {
  return (
    <footer>
      <div>
        <p className="footer-title">Stay close.</p>
        <a
          className="waitlist"
          href="https://mail.google.com/mail/?view=cm&to=thethoughtdaughterdeck@gmail.com&su=Waiting%20list"
          target="_blank"
          rel="noreferrer"
        >
          Join the waiting list <span>↗</span>
        </a>
      </div>
      <div className="footer-links">
        <a href="https://www.instagram.com/thethoughtdaughterdeck/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=thethoughtdaughterdeck@gmail.com" target="_blank" rel="noreferrer">Email</a>
        <a href="https://wa.me/">WhatsApp</a>
      </div>
      <p className="copyright">© Thought Daughter</p>
    </footer>
  );
}
