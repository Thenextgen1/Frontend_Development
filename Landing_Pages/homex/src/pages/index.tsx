import Comfort from "@/components/Home/Comfort";
import LocationForm from "@/components/Home/LocationForm";
import Residencies from "@/components/Home/Residencies";
import Testimonials from "@/components/Home/Testimonials";
import residencyData from "@/data/residencies.json";
import testimonialsData from "@/data/testimonials.json";
import BaseLayout from "@/layout";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0, scale: 0, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    scale: 0.2,
    y: -100,
    transition: {
      duration: 1,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <BaseLayout
      title="Homex- Real Estate"
      description={""}
      keywords={""}
    >
      <main className="bg-[#FCFDFF]">
        <section
          className={`${styles.hero_container} flex flex-col xl:justify-between justify-center xl:flex-row pt-14 pb-20 bg-[#151D48] lg:pl-24 lg:pr-28 px-6 sm:px-8 items-center`}
        >
          <div className="xl:block flex justify-center items-center flex-col">
            <h2 className="font-Poppins lead text-center xl:text-left text-white font-semibold text-3xl md:text-6xl">
              Discover Most <br /> Suitable{" "}
              <span className="font-Poppins text-3xl xl:block md:text-6xl font-semibold text-[#567AE5]">
                Property
              </span>
            </h2>
            <p className="text-xl text-white my-10 text-center xl:text-left mx-12 xl:mx-0">
              Non id ut volutpat urna, nulla ornare tempus molestie tincidunt.{" "}
              <br className="hidden xl:block" /> A vitae ut purus non elementum
              sapien ac at.
            </p>
            <LocationForm />
          </div>
          <motion.div
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            variants={imageVariants}
            className="mt-12 xl:mt-0"
          >
            <Image
              src="/home/hero.png"
              width={537}
              height={550}
              alt="hero house"
              className="rounded-lg"
            />
          </motion.div>
        </section>
        <section className=" py-8 md:py-24">
          <h3 className="text-center pt-4 md:pt-6 font-Poppins text-4xl font-semibold text-[#151D48]">
            TrustedBy
          </h3>
          <p className="text-center text-xl text-[#737791] py-8">
            Non egestas nunc tempor pellentesque consequat. Metus neque,
            <br className="hidden md:block" /> sodales nisl mauris.
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`${styles.trusted_companies} flex justify-center lg:justify-between flex-wrap items-center pt-8 lg:pl-24 lg:pr-28 px-6 sm:px-8`}
          >
            {[
              {
                src: "/home/ifttt.png",
                alt: "ifttt",
                width: 129,
                height: 39.45,
              },
              {
                src: "/home/amazon.png",
                alt: "amazon",
                width: 129,
                height: 44.67,
              },

              {
                src: "/home/google.png",
                alt: "google",
                width: 129,
                height: 41.67,
              },
              {
                src: "/home/paypal.png",
                alt: "paypal",
                width: 129,
                height: 36.58,
              },
              {
                src: "/home/airbnb.png",
                alt: "airbnb",
                width: 129,
                height: 46.59,
              },
            ].map((details, i) => (
              <motion.div
                variants={item}
                whileInView="visible"
                viewport={{ once: true }}
                initial="hidden"
                key={i}
              >
                <Image
                  src={details.src}
                  width={details.width}
                  height={details.height}
                  alt={details.alt}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section className="py-8 md:py-24">
          <h3 className="text-center pt-4 md:pt-6 font-Poppins px-2  sm:px-0 text-4xl font-semibold text-[#151D48]">
            Popular Residencies
          </h3>
          <p className="text-center px-2 sm:px-0 text-[#737791] py-8 mb-4">
            Integer dictum urna, mauris imperdiet. Sollicitudin enim vitae
            laoreet <br className="hidden md:block" /> lorem quis eget. Nam
            potenti dolor dui, netus.
          </p>
          <div className="flex flex-col justify-center items-center xl:pl-24 xl:pr-28 flex-wrap mx-6 sm:px-8 lg:flex-row">
            {residencyData.map((details, i) => (
              <Residencies
                details={details}
                key={i}
              />
            ))}
          </div>
          <div className="flex justify-center pt-10 items-center">
            <div className="w-[17.29px] h-[17.47px] rounded-full bg-[#E8E8ED]"></div>
            <div className="flex items-center justify-center rounded-full mx-2 w-[26.71px] h-[27px] border-[#737791] border-[1px] border-solid">
              <div className="bg-[#567AE5] w-[17.29px] h-[17.47px] rounded-full"></div>
            </div>
            <div className="rounded-full w-[17.29px] h-[17.47px] bg-[#E8E8ED]"></div>
          </div>
        </section>
        <section className="xl:pl-24 xl:pr-28 px-6 sm:px-8 my-8  pb-12 pt-8 sm:pb-28">
          <Comfort />
        </section>
        <section className="xl:pl-24 xl:pr-28 px-6 sm:px-8 my-8  pb-12 pt-8 sm:pb-28">
          <motion.h4
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-Poppins px-3 text-2xl sm:px-0 font-semibold text-center text-[#151D48] sm:text-4xl "
          >
            What Our Customer Say About Us
          </motion.h4>
          <motion.p
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-[#737791] my-5 text-center"
          >
            Arcu, accumsan quam mi porttitor etiam in. Libero egestas
            <br className="hidden sm:block" /> amet, quam sagittis.
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center flex-col lg:flex-row items-center pt-20"
          >
            {testimonialsData.map((details, i) => (
              <Testimonials
                key={i}
                details={details}
              />
            ))}
          </motion.div>
          <div className="flex justify-center pt-10 items-center">
            <div className="w-[17.29px] h-[17.47px] rounded-full bg-[#E8E8ED]"></div>
            <div className="flex items-center justify-center rounded-full mx-2 w-[26.71px] h-[27px] border-[#737791] border-[1px] border-solid">
              <div className="bg-[#567AE5] w-[17.29px] h-[17.47px] rounded-full"></div>
            </div>
            <div className="rounded-full w-[17.29px] h-[17.47px] bg-[#E8E8ED]"></div>
          </div>
        </section>

        <section className="lg:pl-24 lg:pr-28 px-6 sm:px-8 my-8 sm:my-24">
          <div className=" bg-[#567AE5] py-20  rounded-lg">
            <h4 className="font-Poppins px-3 text-2xl sm:px-0 font-semibold text-center sm:text-4xl text-white">
              What Our Customer Say About Us
            </h4>
            <p className="text-xl py-9 px-3 sm:px-0 text-[#F9FAFB] text-center">
              Gravida et dignissim sit augue suscipit leo nisl, tristique.
              Scelerisque <br className="hidden sm:block" /> consequat vel
              penatibus vivamus nec.
            </p>
            <p className="text-center">
              <button className="font-Poppins text-lg text-white font-medium rounded-lg py-3 px-6 bg-[#151D48] ">
                Get Started
              </button>
            </p>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
}
