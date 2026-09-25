export default function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Thought Daughter home">
        <img
          src="/logo.png"
          alt="Thought Daughter"
          className="header-logo"
        />
      </a>
      <a className="header-link" href="#questions">
        The questions <span>↘</span>
      </a>
    </header>
  );
}
