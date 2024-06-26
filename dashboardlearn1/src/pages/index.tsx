import Image from "next/image";
import { ubuntuMono } from "@/types/font/Font";

export default function Home() {
  return (
    <main className={`min-h-screen ${ubuntuMono.className}`}>
      <div className={``}>
        <h1 className="text-2xl text-center font-[600]">
          Welcome to Dashboard
        </h1>
      </div>
    </main>
  );
}
