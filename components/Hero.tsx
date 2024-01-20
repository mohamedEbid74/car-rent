"use client";
import Image from "next/image";
import CustomBtn from "./CustomBtn";

const Hero = () => {
  const scrollHandler = () => {
    console.log(window.scrollTo);
  };
  return (
    <section className='hero'>
      <div className='flex-1 padding-x pt-36'>
        <h1 className='hero__title capitalize'>
          find, book, or rent a car - quickly and easily!{" "}
        </h1>
        <p className='hero__subtitle capitalize'>
          streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomBtn
          title='Explore Cars'
          btnStyle='bg-primary-blue text-white rounded-full mt-10'
          btnType='button'
          handleClick={scrollHandler}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' className='object-contain' fill alt='hero' />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </section>
  );
};

export default Hero;
