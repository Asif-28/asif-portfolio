import { About, Projects, TechStack } from "@/components/sections/HomePage";
import SideBar from "@/components/sections/sidebar/SideBar";

export default function Home() {
  return (
    <main className="h-[200vh]">
      <SideBar />
      <About />
      <TechStack />
      {/* <Projects /> */}
    </main>
  );
}
