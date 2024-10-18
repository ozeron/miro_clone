"use client";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, sessionId, userId } = useAuth();
     console.log("ConvexClientProvider", isSignedIn, sessionId, userId);
  return (
    <div className="flex flex-col gap-y-4">
      <div>This is a test for authenticated users</div>
    </div>
  );
}
