import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Comfort = () => {
  return (
    <div className="lg:flex justify-evenly">
      <div className={`${styles.comfort_avatar} `}>
        <Image
          src="/home/comfort_1.png"
          className="rounded-lg"
          width={364.41}
          height={345.88}
          alt="building"
        />
      </div>
      <div className="lg:ml-24 mt-6 lg:mt-0">
        <h3 className="text-left text-[#151D48] font-semibold font-Poppins py-2 text-4xl mx-2 lg:mx-0">
          Comfort is Our Top <br className="hidden sm:block" /> Priority for you
        </h3>
        <p className="text-xl text-[#737791] pt-6 pb-2">
          Congue enim vitae a ultricies feugiat aliquet netus leo. Nec,{" "}
          <br className="hidden sm:block" /> volutpat volutpat vulputate
          adipiscing.
        </p>
        <ul className={`${styles.comfort_list}`}>
          <li>Premium National Marketing</li>
          <li>Free, no Obligation Valuations</li>
        </ul>
      </div>
    </div>
  );
};

export default Comfort;
