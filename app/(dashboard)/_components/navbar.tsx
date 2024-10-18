"use client";

import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-500">
      <div className="hidden lg:flex lg:flex-1 bg-orange-400">
        {/* TODO: Add search bar */}
        Search
      </div>
      <UserButton />
    </div>
  );
}
