import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";

const item = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.5,
    },
  },
};

const imageVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.2,
    y: -100,
  },
};

const Comfort = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-evenly">
      <motion.div
        className={`${styles.comfort_avatar} `}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
        variants={imageVariants}
      >
        <Image
          src="/home/comfort_1.png"
          className="rounded-lg"
          width={364.41}
          height={345.88}
          alt="building"
        />
      </motion.div>
      <div className="lg:ml-24 mt-6 lg:mt-0">
        <motion.h3
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left text-[#151D48] font-semibold font-Poppins py-2 text-4xl mx-2 mt-8 lg:mt-0 lg:mx-0"
        >
          Comfort is Our Top <br className="hidden lg:block" /> Priority for you
        </motion.h3>
        <motion.p
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl text-[#737791] pt-6 pb-2"
        >
          Congue enim vitae a ultricies feugiat aliquet netus leo. Nec,{" "}
          <br className="hidden sm:block" /> volutpat volutpat vulputate
          adipiscing.
        </motion.p>
        <motion.ul
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`${styles.comfort_list}`}
        >
          <li>Premium National Marketing</li>
          <li>Free, no Obligation Valuations</li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Comfort;
