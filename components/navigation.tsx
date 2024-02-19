import { Button } from "components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import { BookOpenIcon, HomeIcon, UserIcon } from "lucide-react";
import { HamburgerIcon } from "./icons";
import Link from "next/link";

export function Navigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="fixed bottom-10 right-6 z-10 lg:bottom-16 md:right-12 lg:right-24 2xl:right-32"
        asChild
      >
        <Button variant="outline" size="icon" className="rounded-full p-4">
          <HamburgerIcon className="absolute z-10" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" sideOffset={8} align="end">
        <DropdownMenuLabel className="text-lg">Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2 text-lg" asChild>
          <Link href="/">
            <HomeIcon className="size-5" />
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 text-lg" asChild>
          <Link href="/blog">
            <BookOpenIcon className="size-5" />
            My blog
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 text-lg" asChild>
          <Link href="/about">
            <UserIcon className="size-5" />
            About me
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
