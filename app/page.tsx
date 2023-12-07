"use client";
import { CommandMenu } from "@/components/commandMenu/CommandMenu";
import { Navigation } from "@/components/navbar/Navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/app/asset/image/finallogo.png";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between items-center w-max-screen h-min-screen  h-full mx-3">
      <div className="flex items-center">
        <Image src={logo} width={100} height={100} alt="logo" />
        <Navigation />
      </div>

      <div className="flex gap-2">
        <div>
          <CommandMenu />
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
