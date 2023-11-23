import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js",
  description: "The React Framework for the Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
      />
      <script
        async
        src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"
      ></script>
      <body>{children}</body>
    </html>
  );
}
