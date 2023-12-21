import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Books, Teenage } from "@/app/lib/data";
import { Kids } from "@/app/lib/data";
import Link from "next/link";
const AccordionMain = () => {
  return (
    <div>
      <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]}>
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
    </div>
  );
};

export default AccordionMain;
