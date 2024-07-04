import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-hidden px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
