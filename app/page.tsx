export default function Home() {
  return (
    <main className="site">
      <nav className="navbar">
        <div className="logo">MARION</div>

        <div className="nav-links">
          <a href="#">Commands</a>
          <a href="#">Docs</a>
          <a href="#">Status</a>
        </div>

        <button className="dashboard-button">Dashboard</button>
      </nav>

      <section className="hero">
        <div className="badge">
          Discord Bot • Moderation • Utility • Fun
        </div>

        <h1>
          Your server.
          <br />
          <span>Your rules.</span>
          <br />
          Your Marion.
        </h1>

        <p>
          A powerful Discord bot built to help you manage,
          customize, and improve your server.
        </p>

        <div className="buttons">
          <button className="primary-button">Add Marion</button>
          <button className="secondary-button">View Commands</button>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="icon">🛡️</div>
          <h2>Moderation</h2>
          <p>Keep your server clean and organized.</p>
        </div>

        <div className="feature">
          <div className="icon">🎁</div>
          <h2>Giveaways</h2>
          <p>Run and manage giveaways with ease.</p>
        </div>

        <div className="feature">
          <div className="icon">💤</div>
          <h2>AFK</h2>
          <p>Let your members know when you're away.</p>
        </div>

        <div className="feature">
          <div className="icon">⚙️</div>
          <h2>Utilities</h2>
          <p>Useful tools for your entire server.</p>
        </div>
      </section>
    </main>
  );
}
