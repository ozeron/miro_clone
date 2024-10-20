"use client";

import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Overlay } from "./overlay";
import { Skeleton } from "@/components/ui/skeleton";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

export default function BoardCard({
  id,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  isFavorite,
  title,
}: BoardCardProps) {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt="Doodle" fill className="object-fit" />
          <Overlay />
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="group aspect-[100/127] rounded-lg">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
