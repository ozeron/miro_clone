"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/empty-org";
import BoardList from "./_components/board-list";

interface HomeProps {
  searchParams: {
    search?: string;
    favorites?: string;
  }
}

export default function Home({ searchParams }: HomeProps) {
  const { organization } = useOrganization();

  return (
    <div className=" h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> : <BoardList orgId={organization.id} query={searchParams} />}
    </div>
  );
}
