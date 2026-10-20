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

const inviteLink =
  "https://discord.com/oauth2/authorize?client_id=1560663876092035103&permissions=8&integration_type=0&scope=bot+applications.commands";

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

        <a
          className="dashboard-button
