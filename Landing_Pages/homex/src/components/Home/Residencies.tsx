import { motion } from "framer-motion";
import Image from "next/image";

type props = {
  details: {
    image: string;
    title: string;
    description: string;
    price: string;
  };
};

const item = {
  hidden: { y: -150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1 },
  },
};

const Residencies = ({ details }: props) => {
  return (
    <motion.div
      variants={item}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="p-4 my-4 mx-2  sm:mx-3 bg-[#F9FAFB] max-w-[515px] rounded-lg border-[1px] solid border-[#E8E8ED] border-solid"
    >
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
    </motion.div>
  );
};

export default Residencies;
