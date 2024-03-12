"use client";

import Link from "next/link";
import DockContainer from "./dock/dock";
import DockItem from "./dock/dock-item";
import { Blog, About, Home, Mail, Sparkle, Github } from "./dock/dock-icons";
import { usePathname } from "next/navigation";

function InternalLink({
  href,
  children,
  title,
}: {
  href: string;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Link
      title={title}
      href={href}
      className="flex items-center justify-center w-full h-full focus-visible:outline-red-500"
    >
      {children}
    </Link>
  );
}

export function Navigation() {
  const pathname = usePathname();

  return (
    <DockContainer>
      <DockItem tooltipLabel="Home" isActive={pathname === "/"}>
        <InternalLink href="/" title="home">
          <Home />
        </InternalLink>
      </DockItem>
      <DockItem
        tooltipLabel="Projects"
        isActive={pathname?.includes("/projects")}
      >
        <InternalLink href="/projects" title="projects">
          <Sparkle />
        </InternalLink>
      </DockItem>
      <DockItem tooltipLabel="Blog" isActive={pathname?.includes("/blog")}>
        <InternalLink href="/blog" title="blog">
          <Blog />
        </InternalLink>
      </DockItem>
      <DockItem tooltipLabel="About me" isActive={pathname === "/about"}>
        <InternalLink href="/about" title="about">
          <About />
        </InternalLink>
      </DockItem>
      <hr className="h-[36px] w-[1px] shrink-0 dock-divider" />
      <DockItem tooltipLabel="Github">
        <a
          href="https://github.com/maufive"
          target="_blank"
          className="flex items-center justify-center w-full h-full"
        >
          <Github />
        </a>
      </DockItem>
      <DockItem tooltipLabel="Mail" isActive={false}>
        <a
          href="mailto:albinssonniklas@gmail.com"
          className="flex items-center justify-center w-full h-full"
        >
          <Mail />
        </a>
      </DockItem>
    </DockContainer>
  );
}
