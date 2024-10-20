import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EmptySearch() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-boards.svg" height={200} width={200} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">No boards created</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try creating some boards
      </p>
      <div className="mt-6">
        <Button size="lg">Create Board</Button>
      </div>
    </div>
  );
}
