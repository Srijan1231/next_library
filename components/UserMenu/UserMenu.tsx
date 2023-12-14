"use client";
import React from "react";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import Image from "next/image";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Image
              src={currentUser?.image}
              alt="userImage"
              height={30}
              width={30}
            />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset>Profile</MenubarItem>
            <MenubarItem inset>Burrow</MenubarItem>
            <MenubarItem inset>Favourite</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset onClick={() => signOut()}>
              Logout
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default UserMenu;
