"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutations";
import { toast } from "sonner";

export default function EmptySearch() {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({ title: "Untitled", orgId: organization.id })
      .then((id) => {
        toast.success("Board Created");
        // TODO: redirect to the board/{id}
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-boards.svg" height={200} width={200} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">No boards created</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try creating some boards
      </p>
      <div className="mt-6">
        <Button size="lg" onClick={onClick} disabled={pending}>
          Create Board
        </Button>
      </div>
    </div>
  );
}
