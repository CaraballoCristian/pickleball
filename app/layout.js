// PROVIDER
import ClientProvider from "./ClientProvider";
// STYLES
import "./globals.css";

export const metadata = {
  title: "APLP - Demo",
  description: "Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body  >
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
