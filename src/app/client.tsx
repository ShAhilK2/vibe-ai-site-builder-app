"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
export const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.CreateAI.queryOptions({ text: "Shahil from Prefetch" })
  );

  return <div>{JSON.stringify(data)}</div>;
};
