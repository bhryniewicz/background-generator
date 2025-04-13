import { GenerateScreen } from "@/screens/Generate/GenerateScreen";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";

export default async function GeneratePage() {
  const queryClient = new QueryClient();

  const cookiesStore = await cookies();

  queryClient.setQueryData(
    ["USED_COLORS"],
    JSON.parse(cookiesStore.get("color")?.value as string)
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GenerateScreen />;
    </HydrationBoundary>
  );
}
