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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Books, Teenage } from "@/app/lib/data";
import { Kids } from "@/app/lib/data";
import { ScrollArea } from "../ui/scroll-area";

const SideMenu = () => {
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

          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2", "item-3"]}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Books</AccordionTrigger>
              {Books.map((book) => (
                <AccordionContent key={book.title}>
                  <Link href={book.href}>{book.title}</Link>
                </AccordionContent>
              ))}
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Kids</AccordionTrigger>

              {Kids.map((kid) => (
                <AccordionContent key={kid.title}>
                  <Link href={kid.href}>{kid.title}</Link>
                </AccordionContent>
              ))}
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Teenage</AccordionTrigger>

              {Teenage.map((teen) => (
                <AccordionContent key={teen.title}>
                  <Link href={teen.href}>{teen.title}</Link>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
