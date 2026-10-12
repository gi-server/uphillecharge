import "./globals.css";

export const metadata = {
  title: "Uphill Echarge | Fast & Reliable EV Charging",
  description:
    "Uphill Echarge — Building the future of smart EV charging infrastructure across India. Fast, reliable, and sustainable EV chargers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

