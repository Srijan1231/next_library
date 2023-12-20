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
import SideMenu from "../Sidemenu/SideMenu";

interface HeaderProps {
  children: React.ReactNode;
  currentUser?: SafeUser | null;
}
export const Layout = (props: HeaderProps) => {
  const image = props.currentUser?.image;
  return (
    <>
      <div className=" hidden border-b-2 justify-between items-center h-full sm:hidden md:flex lg:flex ">
        <div className="flex items-center ">
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
      {
        <div className=" mt-2 flex justify-between items-center h-full sm:flex md:hidden lg:hidden">
          <SideMenu />
          {props.currentUser ? (
            <UserMenu currentUser={props.currentUser} />
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}

          {/* <div className="flex items-center ">
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
          )} */}
        </div>
      }
      <div className="overflow-hidden">{props.children}</div>
    </>
  );
};
