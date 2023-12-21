"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import logo from "@/app/asset/image/finallogo.png";
import { Button } from "../ui/button";
import Link from "next/link";

import { ScrollArea } from "../ui/scroll-area";
interface SideMenuProps {
  children: React.ReactNode;
}
const SideMenu = (props: SideMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>
          <AlignRight />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <ScrollArea className="h-full w-full ">
          <SheetHeader>
            <SheetTitle>
              <Link href={"/"}>
                <div className="flex items-center justify-center">
                  <Image src={logo} width={100} height={100} alt="logo" />
                  Library Management
                </div>
              </Link>
            </SheetTitle>
            <SheetDescription className="font-black">
              LIBRARIES: WHERE BOOKS OPEN DOORS TO INFINITE WORLDS AND PAGES
              UNFOLD JOURNEYS.
            </SheetDescription>
          </SheetHeader>
          {props.children}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
