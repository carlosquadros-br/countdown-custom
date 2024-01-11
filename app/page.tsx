import Image from "next/image";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Countdown />
    </main>
  );
}
