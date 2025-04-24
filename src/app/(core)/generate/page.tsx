import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import { Generate } from "./_components/generate";

export default async function GeneratePage() {
  const queryClient = new QueryClient();

  const cookiesStore = await cookies();

  await queryClient.setQueryData(
    ["USED_COLORS"],
    JSON.parse(cookiesStore.get("color")?.value as string)
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Generate />;
    </HydrationBoundary>
  );
}
