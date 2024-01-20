import { Hero, CarCatalouge } from "@/components";
import { CatalougeProps } from "@/types";

export default async function Home({ searchParams }: CatalougeProps) {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <CarCatalouge searchParams={searchParams} />
    </main>
  );
}
