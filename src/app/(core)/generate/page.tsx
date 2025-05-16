import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import { Generate } from "./_components/generate";

export default async function GeneratePage() {
  const queryClient = new QueryClient();

  const getColorsFromCookies = async () => {
    const cookiesStore = await cookies();
    const colorCookie = cookiesStore.get("color")?.value ?? "[]";
    await queryClient.setQueryData(["USED_COLORS"], JSON.parse(colorCookie));
  };

  await getColorsFromCookies();

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Generate />;
    </HydrationBoundary>
  );
}
