import "./globals.css";

export const metadata = {
  title: "Marion — Discord Bot",
  description: "A powerful Discord bot for your server.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
