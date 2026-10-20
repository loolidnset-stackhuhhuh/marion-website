
"use client";

import { useMemo, useState } from "react";

const commands = [
  {
    name: ",c",
    category: "Moderation",
    description: "Clear recent messages from a channel.",
  },
  {
    name: ",bc",
    category: "Moderation",
    description: "Clear messages sent by bots.",
  },
  {
    name: ",ban",
    category: "Moderation",
    description: "Ban a member from your server.",
  },
  {
    name: ",kick",
    category: "Moderation",
    description: "Remove a member from your server.",
  },
  {
    name: ",mute",
    category: "Moderation",
    description: "Restrict a member from chatting.",
  },
  {
    name: ",afk",
    category: "Utility",
    description: "Set an AFK status for when you're away.",
  },
  {
    name: ",gw start",
    category: "Giveaways",
    description: "Start a new giveaway.",
  },
  {
    name: ",gw end",
    category: "Giveaways",
    description: "End an active giveaway.",
  },
  {
    name: ",gw reroll",
    category: "Giveaways",
    description: "Choose a new giveaway winner.",
  },
  {
    name: ",help",
    category: "Utility",
    description: "View available bot commands.",
  },
];

const categories = [
  "All",
  "Moderation",
  "Giveaways",
  "Utility",
];

export default function CommandsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCommands = useMemo(() => {
    return commands.filter((command) => {
      const matchesCategory =
        category === "All" ||
        command.category === category;

      const matchesSearch =
        command.name.toLowerCase().includes(search.toLowerCase()) ||
        command.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="site commands-page">
      <nav className="navbar">
        <a className="logo" href="/">
          LOVEL♡RN
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/commands">Commands</a>
        </div>

        <a
          className="dashboard-button"
          href="https://discord.com/oauth2/authorize?client_id=1560663876092035103&permissions=8&integration_type=0&scope=bot+applications.commands"
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
            <article
              className="command-card"
              key={command.name}
            >
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

/* Lovelorn Commands Page */
.commands-hero {
  min-height: 440px;
  padding-bottom: 35px;
}

.commands-hero h1 {
  font-size: clamp(48px, 8vw, 76px);
}

.command-search {
  width: min(100%, 520px);
  margin-top: 30px;
  padding: 16px 22px;
  border: 1px solid rgba(230, 79, 153, 0.25);
  border-radius: 999px;
  outline: none;
  background: rgba(255, 255, 255, 0.8);
  color: #713653;
  font: inherit;
  box-shadow: 0 8px 25px rgba(189, 93, 139, 0.08);
}

.command-search:focus {
  border-color: #e64f99;
  box-shadow: 0 0 0 4px rgba(230, 79, 153, 0.1);
}

.command-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 22px;
}

.command-filter {
  padding: 10px 18px;
  border: 1px solid rgba(230, 79, 153, 0.2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  color: #bd477f;
  cursor: pointer;
  font: inherit;
  transition: 0.2s ease;
}

.command-filter:hover,
.command-filter.active {
  background: linear-gradient(135deg, #ff9dca, #ed5a9f);
  color: white;
  box-shadow: 0 5px 18px rgba(237, 90, 159, 0.2);
}

.command-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 10px 6% 80px;
}

.command-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 22px;
  border: 1px solid rgba(226, 112, 166, 0.2);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 10px 28px rgba(189, 93, 139, 0.07);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.command-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(237, 90, 159, 0.13);
}

.command-card code {
  display: inline-block;
  color: #d94391;
  font-size: 17px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.command-card p {
  margin: 9px 0 0;
  color: #986b83;
  line-height: 1.6;
}

.command-category {
  flex-shrink: 0;
  padding: 7px 11px;
  border-radius: 999px;
  background: #ffe3f0;
  color: #bd477f;
  font-size: 12px;
  font-weight: 700;
}

.no-commands {
  grid-column: 1 / -1;
  padding: 35px;
  color: #986b83;
  text-align: center;
}

.commands-page .footer a {
  display: inline-block;
  margin-top: 10px;
  color: #d94391;
}

@media (max-width: 650px) {
  .command-list {
    grid-template-columns: 1fr;
    padding-right: 20px;
    padding-left: 20px;
  }

  .command-card {
    padding: 18px;
  }

  .command-category {
    font-size: 10px;
  }
}
