"use client";
import { ShowMOreProps } from "@/types";
import { CustomBtn } from "../index";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMOreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPath = updateSearchParams("limit", `${newLimit}`);

    router.push(newPath);
  };
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomBtn
          title='ShowMore'
          btnType='button'
          btnStyle='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
