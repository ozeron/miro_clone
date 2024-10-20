"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutations";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export default function NewBoardButton({
  orgId,
  disabled,
}: NewBoardButtonProps) {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({ orgId, title: "Untitled" })
      .then((id) => {
        toast.success("Board created");
        //TOOD: redirect to board id
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center p-y6",
        (pending || disabled) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <PlusIcon className="h-20 w-20 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
}
