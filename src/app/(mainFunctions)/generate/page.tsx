import { GenerateScreen } from "@/screens/Generate/GenerateScreen";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

const getColorsUsedBefore = async (): Promise<RequestCookie | undefined> => {
  const cookiesStore = await cookies();

  return cookiesStore.get("color");
};

export default async function GeneratePage() {
  const colors = await getColorsUsedBefore();

  return <GenerateScreen colors={colors} />;
}
