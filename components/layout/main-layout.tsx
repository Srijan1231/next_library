"use client";
import React from "react";
import { CommandMenu } from "@/components/commandMenu/CommandMenu";
import { Navigation } from "@/components/navbar/Navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/app/asset/image/finallogo.png";

import Link from "next/link";

import { SafeUser } from "@/app/types";
import UserMenu from "../UserMenu/UserMenu";

interface HeaderProps {
  children: React.ReactNode;
  currentUser?: SafeUser | null;
}
export const Layout = (props: HeaderProps) => {
  const image = props.currentUser?.image;
  return (
    <>
      <div className="flex justify-between items-center   h-full ">
        <div className="flex items-center">
          <Image src={logo} width={100} height={100} alt="logo" />
          <Navigation />
        </div>
        {!props.currentUser ? (
          <div className="flex gap-2">
            <div>
              <CommandMenu />
            </div>
            <div className="flex gap-2">
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <div>
              <CommandMenu />
            </div>
            <div className="flex gap-2">
              <UserMenu currentUser={props.currentUser} />
            </div>
          </div>
        )}
      </div>
      <div>{props.children}</div>
    </>
  );
};
