
const features = [
  {
    icon: "♡",
    title: "Moderation",
    description: "Keep your server safe, welcoming, and organized.",
  },
  {
    icon: "♡",
    title: "Giveaways",
    description: "Make every event a little more special.",
  },
  {
    icon: "♡",
    title: "AFK",
    description: "Let your friends know when you're away.",
  },
  {
    icon: "✧",
    title: "Utilities",
    description: "Everything your community needs, all in one place.",
  },
];

export default function Home() {
  return (
    <main className="site">
      <nav className="navbar">
        <a className="logo" href="#">
          LOVEL♡RN
        </a>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <a className="dashboard-button" href="#dashboard">
          Dashboard
        </a>
      </nav>

      <section className="hero" id="about">
        <div className="floating-heart heart-one">♥</div>
        <div className="floating-heart heart-two">♥</div>
        <div className="floating-heart heart-three">♡</div>
        <div className="floating-heart heart-four">♥</div>

        <div className="badge">♡ Your server's new favorite</div>

        <h1>LOVELORN</h1>

        <p>
          A little more love for your Discord server.
          <br />
          Moderation, fun, and everything in between.
        </p>

        <div className="buttons">
          <a
            className="primary-button"
            href="#"
          >
            Add Lovelorn →
          </a>

          <a className="secondary-button" href="#features">
            Explore Features
          </a>
        </div>

        <div className="love-note">made with ♡ for your community</div>
      </section>

      <section className="features" id="features">
        {features.map((feature) => (
          <article className="feature" key={feature.title}>
            <div className="icon">{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <footer className="footer" id="dashboard">
        <span>♡ LOVELORN</span>
        <p>A little love goes a long way.</p>
      </footer>
    </main>
  );
}
