import React from "react";

import RootProvider from "./containers/root.container";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RootProvider>
        <body className="flex h-screen  w-screen justify-center  items-center">
          {children}
        </body>
      </RootProvider>
    </html>
  );
}
