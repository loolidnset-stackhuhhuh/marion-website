const inviteLink =
  "https://discord.com/oauth2/authorize?client_id=1560663876092035103&permissions=8&integration_type=0&scope=bot+applications.commands";

const features = [
  {
    icon: "♡",
    title: "Moderation",
    description:
      "Keep your server organized with tools for managing messages and members.",
    tag: "SERVER SAFETY",
  },
  {
    icon: "✧",
    title: "Giveaways",
    description:
      "Bring your community together with giveaway tools and winner rerolls.",
    tag: "COMMUNITY",
  },
  {
    icon: "☁",
    title: "AFK & Utility",
    description:
      "Helpful everyday tools to make chatting and managing your server easier.",
    tag: "EVERYDAY TOOLS",
  },
  {
    icon: "୨୧",
    title: "Custom Commands",
    description:
      "Make common server tasks easier with convenient commands and shortcuts.",
    tag: "PERSONALIZATION",
  },
  {
    icon: "♡",
    title: "Easy to Use",
    description:
      "Simple command-based tools designed to be easy for your community to use.",
    tag: "MADE SIMPLE",
  },
  {
    icon: "✿",
    title: "Made for Community",
    description:
      "Give your server a welcoming space with tools built around your community.",
    tag: "YOUR COMMUNITY",
  },
];

export default function FeaturesPage() {
  return (
    <main className="site features-page">
      <nav className="navbar">
        <a className="logo" href="/">
          LOVEL♡RN
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/commands">Commands</a>
        </div>

        <a
          className="dashboard-button"
          href={inviteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Add Lovelorn ♡
        </a>
      </nav>

      <section className="hero features-hero">
        <div className="badge">
          ♡ A little something for every server
        </div>

        <h1>
          Made with <span>love.</span>
        </h1>

        <p>
          Everything your community needs, wrapped
          in one lovely little bot.
        </p>

        <div className="features-actions">
          <a className="primary-button" href={inviteLink}>
            Invite Lovelorn ♡
          </a>

          <a className="secondary-button" href="/commands">
            Explore Commands →
          </a>
        </div>

        <div className="floating-heart heart-one">♡</div>
        <div className="floating-heart heart-two">✧</div>
        <div className="floating-heart heart-three">୨୧</div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span>THE LOVELORN COLLECTION</span>
          <h2>Little tools, lots of love.</h2>
          <p>
            Explore the tools designed to help your
            server feel a little more like home.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article
              className="feature-card"
              key={feature.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feature-card-top">
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <span className="feature-tag">
                  {feature.tag}
                </span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div className="feature-card-bottom">
                <span>Made for your server</span>
                <span className="feature-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="features-cta">
        <span className="cta-heart">♡</span>
        <h2>Your server deserves a little love.</h2>
        <p>
          Bring Lovelorn into your community and
          make every interaction a little sweeter.
        </p>

        <a
          className="primary-button"
          href={inviteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Add Lovelorn to Discord ♡
        </a>
      </section>

      <footer className="footer">
        <span>♡ LOVELORN</span>
        <p>A little love goes a long way.</p>

        <a href="/">Back to home ↑</a>
      </footer>
    </main>
  );
}
