import { HomeLayout } from "./_components/home-layout";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayout>{children}</HomeLayout>;
}
