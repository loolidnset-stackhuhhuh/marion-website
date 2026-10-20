
"use client";

import { useMemo, useState } from "react";

const commands = [
  { name: ",c", category: "Moderation", description: "Clear recent messages from a channel." },
  { name: ",bc", category: "Moderation", description: "Clear messages sent by bots." },
  { name: ",ban", category: "Moderation", description: "Ban a member from your server." },
  { name: ",kick", category: "Moderation", description: "Remove a member from your server." },
  { name: ",mute", category: "Moderation", description: "Restrict a member from chatting." },
  { name: ",afk", category: "Utility", description: "Set an AFK status when you're away." },
  { name: ",gw start", category: "Giveaways", description: "Start a new giveaway." },
  { name: ",gw end", category: "Giveaways", description: "End an active giveaway." },
  { name: ",gw reroll", category: "Giveaways", description: "Choose a new giveaway winner." },
  { name: ",help", category: "Utility", description: "View available bot commands." },
];

const categories = ["All", "Moderation", "Giveaways", "Utility"];

const inviteLink =
  "https://discord.com/oauth2/authorize?client_id=1560663876092035103&permissions=8&integration_type=0&scope=bot+applications.commands";

export default function CommandsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCommands = useMemo(() => {
    return commands.filter((command) => {
      const matchesCategory =
        category === "All" || command.category === category;

      const term = search.toLowerCase();

      const matchesSearch =
        command.name.toLowerCase().includes(term) ||
        command.description.toLowerCase().includes(term) ||
        command.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="site commands-page">
      <nav className="navbar">
        <a className="logo" href="/">LOVEL♡RN</a>

        <div className="nav-links">
          <a href="/">Home</a>
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

      <section className="hero commands-hero">
        <div className="badge">♡ Lovelorn command library</div>

        <h1>Commands</h1>

        <p>
          Everything you need to make your server
          a little more lovely.
        </p>

        <input
          className="command-search"
          type="search"
          placeholder="♡ Search commands..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search commands"
        />

        <div className="command-filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item
                  ? "command-filter active"
                  : "command-filter"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="command-list">
        {filteredCommands.length > 0 ? (
          filteredCommands.map((command) => (
            <article className="command-card" key={command.name}>
              <div>
                <code>{command.name}</code>
                <p>{command.description}</p>
              </div>

              <span className="command-category">
                {command.category}
              </span>
            </article>
          ))
        ) : (
          <p className="no-commands">
            No commands found. Try another search. ♡
          </p>
        )}
      </section>

      <footer className="footer">
        <span>♡ LOVELORN</span>
        <p>A little love goes a long way.</p>
        <a href="/">Back to home ↑</a>
      </footer>
    </main>
  );
}
