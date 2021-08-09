import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[18.75rem] sm:h-[25rem] lg:h-[31.25rem] xl:h-[37.5rem] 2xl:h-[43.75rem]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not Sure where to go? Perfect.</p>

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-3 font-bold hover:shadow-xl active:scale-90 transition duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
