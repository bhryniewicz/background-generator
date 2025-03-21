import { Navbar } from "@/components/Navbar";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[url('../assets/bg3.svg')] bg-cover bg-no-repeat grid grid-cols-12 h-screen w-full px-32 py-12">
      <Navbar />
      {children}
    </div>
  );
}
