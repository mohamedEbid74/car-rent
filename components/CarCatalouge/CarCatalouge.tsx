"use client";
import { fetchData } from "@/utils";
import SearchBar from "./SearchBar";
import SearchFilter from "./SearchFilter";
import CardCar from "./CardCar";
import { CatalougeProps, carProps } from "@/types";
import { fuels, yearsOfProduction } from "@/Constants";
import ShowMore from "./ShowMore";

const CarCatalouge = async ({ searchParams }: CatalougeProps) => {
  const AllCars = await fetchData({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || 2022,
    year: searchParams.year || "",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
  });
  const isEmpty = !Array.isArray(AllCars) || AllCars.length < 1 || !AllCars;

  const ShowCars = (
    <div className='flex-row flex relative max-lg:flex-col gap-8 m-auto max-w-[90%] w-full flex-wrap mt-20'>
      {AllCars.map((cars: carProps) => (
        <>
          <CardCar car={cars} />
        </>
      ))}
      <ShowMore
        pageNumber={(searchParams.limit || 10) / 10}
        isNext={(searchParams.limit || 10) > AllCars.length}
      />
    </div>
  );
  return (
    <section className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>
      <div className='home__filters'>
        <SearchBar />
        <div className='home__filter-container'>
          <SearchFilter title='fuel' options={fuels} />
          <SearchFilter title='year' options={yearsOfProduction} />
        </div>
      </div>
      {isEmpty && <p>No Data</p>}
      {!isEmpty && ShowCars}
    </section>
  );
};

export default CarCatalouge;
