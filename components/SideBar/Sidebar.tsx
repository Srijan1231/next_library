"use client";
import Image from "next/image";
import React from "react";
import logo from "@/app/asset/image/finallogo.png";
import Link from "next/link";
import { SidebarDataAdmin } from "@/app/lib/data";
import defaultImg from "@/app/asset/image/defaultimg.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CopyPlus, GripVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface SideBarProps {
  currentUser: SafeUser | null;
}
const Sidebar: React.FC<SideBarProps> = ({ currentUser }) => {
  return (
    <div className="w-1/6  border p-3 flex flex-col justify-between">
      <div>
        <div className="flex items-center ">
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <hr />
        <div className="flex  flex-col">
          {SidebarDataAdmin.map((admin) => (
            <MenuItem key={admin.title} title={admin.title} href={admin.href} />
          ))}

          <Dialog>
            <DialogTrigger className="flex border rounded-full  w-full h-full justify-center p-4 mt-2 gap-2">
              <CopyPlus /> Add Books
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex  items-center justify-center gap-4 pb-2">
        <span className="flex items-center gap-2">
          <Image
            src={currentUser?.image ?? defaultImg}
            alt="profile"
            width={50}
            height={50}
            className="border rounded-full"
          />
          <span className="flex flex-col">
            <span className="text-sm font-semibold">{currentUser?.name}</span>
            <span className="text-xs uppercase text-zinc-500">
              {currentUser?.role}
            </span>
          </span>
        </span>
        <span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GripVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
interface MenuItemProps {
  title: String;
  href: any;
}
const MenuItem: React.FC<MenuItemProps> = ({ title, href }) => {
  return (
    <div>
      <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]  hover:bg-zinc-200">
        <Link
          href={href}
          className="flex items-center flex-grow text-md dark:text-neutral-400/75 text-stone-500 hover:text-gray-900"
        >
          {title}
        </Link>
      </span>
    </div>
  );
};
