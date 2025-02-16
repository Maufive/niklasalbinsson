"use client";

import Link from "next/link";
import { ReactNode } from "react";

type AnimatedLinkProps = {
  href: string;
  children: ReactNode;
};

export default function AnimatedLink({ href, children }: AnimatedLinkProps) {
  return (
    <Link href={href} className="group relative inline-block">
      {children}
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 ease-in-out group-hover:w-full" />
    </Link>
  );
}
