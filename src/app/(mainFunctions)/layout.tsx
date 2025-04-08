import { Navbar } from "@/components/Navbar";

export default function GeneratePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#140021] flex flex-col h-screen w-full px-32 pt-12">
      <Navbar />
      <div className=" flex flex-col h-full overflow-auto">{children}</div>
    </div>
  );
}
