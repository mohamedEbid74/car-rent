import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomBtn from "./CustomBtn";

const Header = () => {
  return (
    <nav className='w-full absolute z-10'>
      <div className='flex max-w-[1440px] m-auto bg-transparent items-center justify-between  px-6 py-5'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
        <CustomBtn
          title='Sign in'
          btnType='button'
          btnStyle='text-primary-blue rounded-full bg-white min-w-[130px]'
        />
      </div>
    </nav>
  );
};

export default Header;
