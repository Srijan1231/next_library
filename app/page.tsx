"use client";
import { CommandMenu } from "@/components/commandMenu/CommandMenu";
import { Navigation } from "@/components/navbar/Navigation";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between items-center w-max-screen h-max-screen  h-full m-3">
      <div className="flex items-center">
        Logo
        <Navigation />
      </div>

      <div className="flex gap-2">
        <div>
          <Button>
            <CommandMenu />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
