import About from "@/components/sections/about.tsx/About";
import Header from "@/components/sections/header/Header";
import SideBar from "@/components/sections/sidebar/SideBar";
import { ModeToggle } from "@/components/ui/toggle-mode";

export default function Home() {
  return (
    <main className="h-[200vh]">
      <SideBar />
      <About />
    </main>
  );
}
