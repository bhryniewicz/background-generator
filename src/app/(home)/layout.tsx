import { Navbar } from "@/components/layouts/navbar";
import { ParticlesBackground } from "./_components/particles-background";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 content-start relative z-10 h-[300vh] w-full px-8 lg:px-32 overflow-hidden items-start">
      <ParticlesBackground />
      <Navbar />
      {children}
    </div>
  );
}
