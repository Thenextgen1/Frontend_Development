import Image from "next/image";

type props = {
  details: {
    image: string;
    title: string;
    description: string;
    price: string;
  };
};

const Residencies = ({ details }: props) => {
  return (
    <div className="p-4 my-4 mx-2  sm:mx-3 bg-[#F9FAFB] rounded-lg border-[1px] solid border-[#E8E8ED] border-solid">
      <Image
        src={details.image}
        className="rounded-lg w-full"
        width={345}
        height={294}
        alt="residency"
      />
      <h4 className="text-xl font-Poppins text-[#151D48] mb-2 mt-3 font-semibold">
        {details.title}
      </h4>
      <p className="font-Poppins text-[#737791] text-base lg:w-[307px] my-2">
        {details.description}
      </p>
      <div className="flex justify-between mt-6 items-center">
        <p className="font-semibold text-[#567AE5] text-xl font-Poppins">
          {details.price}
        </p>
        <p>
          <button className="bg-[#567AE5] text-white py-2 rounded-[4px] px-6 font-medium">
            Book Now
          </button>
        </p>
      </div>
    </div>
  );
};

export default Residencies;
