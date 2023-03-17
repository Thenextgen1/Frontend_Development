import LocationForm from "@/components/Home/LocationForm";
import BaseLayout from "@/layout";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <BaseLayout
      title="Homex- Real Estate"
      description={""}
      keywords={""}
    >
      <main>
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
          <div className="mt-12 xl:mt-0">
            <Image
              src="/home/hero.png"
              width={537}
              height={550}
              alt="hero house"
              className="rounded-lg"
            />
          </div>
        </section>
      </main>
    </BaseLayout>
  );
}
