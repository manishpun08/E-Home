"use client";

import { Input } from "@/components/ui/input";
import { IconEmoji } from "../svg/IconEmoji";
import { IconGallery } from "./IconGallery";
import { IconGif } from "../svg/IconGif";
import { IconSend } from "../svg/IconSend";

export function Comment() {
  return (
    <div className="w-full my-3 relative">
      <Input
        placeholder="Write your comment here..."
        className="w-full border border-primary-300 rounded-md bg-c19 py-7 text-858585 text-[16px] font-PlusJakartaSans font-normal"
      />

      {/* Icons container */}
      <div className="absolute right-8 top-1/2 transform -translate-y-full flex space-x-4 cursor-pointer">
        <IconEmoji />
        <IconGallery />
        <IconGif />
        <IconSend />
      </div>
    </div>
  );
}
