import React, { ReactNode } from "react";
import Heading from "../components/heading";
import { Footer } from "../components/footer";
import { ScrollButton } from "../components/scrollbutton";

interface LayoutProps {
  children: ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <Heading />
      </header>
      <body>{children}</body>
      <footer>
        <ScrollButton />
        <Footer />
      </footer>
    </div>
  );
}
