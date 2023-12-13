"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SafeUser } from "@/app/types";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  return (
    <>
      <Avatar>
        <AvatarImage src={currentUser.image} alt="userImg" />
        <AvatarFallback>
          {currentUser?.name?.slice(0, 1).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </>
  );
};

export default UserMenu;
