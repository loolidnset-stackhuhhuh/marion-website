export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0d12] text-white">
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold">MARION</div>

        <div className="hidden gap-8 md:flex">
          <a href="#" className="text-gray-300 hover:text-white">
            Commands
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Docs
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Status
          </a>
        </div>

        <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black">
          Dashboard
        </button>
      </nav>

      <section className="flex min-h-[75vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          Discord bot • Moderation • Utility • Fun
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Your server.
          <br />
          <span className="text-gray-400">Your rules.</span>
          <br />
          Your Marion.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          A powerful Discord bot built to help you manage, customize,
          and improve your server.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-white px-7 py-4 font-semibold text-black">
            Add Marion
          </button>

          <button className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white">
            View Commands
          </button>
        </div>
      </section>

      <section className="grid gap-5 px-6 pb-20 md:grid-cols-4">
        {[
          ["🛡️", "Moderation", "Keep your server clean and organized."],
          ["🎁", "Giveaways", "Run and manage giveaways with ease."],
          ["💤", "AFK", "Let your members know when you're away."],
          ["⚙️", "Utilities", "Useful tools for your entire server."],
        ].map(([icon, title, description]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="text-3xl">{icon}</div>
            <h2 className="mt-4 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-gray-400">{description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
