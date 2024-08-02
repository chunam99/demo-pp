import Image from "next/image";
import PptExample from "../containers/testApi/testApi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PptExample />
    </main>
  );
}
