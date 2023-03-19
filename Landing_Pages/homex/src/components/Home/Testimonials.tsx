import Image from "next/image";
import styles from "@/styles/Home.module.css";

type props = {
  details: {
    avatar: string;
    name: string;
    description: string;
    job: string;
  };
};

const Testimonials = ({ details }: props) => {
  return (
    <article
      className={`${styles.testimonials_card} my-6 lg:mr-5 rounded-lg pl-4 pr-6 pt-6 pb-3 bg-[#F9FAFB] border-solid border-[1px] border-[#E8E8ED]`}
    >
      <p className="py-6 font-Poppins text-[#70798B]">{details.description}</p>
      <div className="flex">
        <div className="mr-4">
          <Image
            src={details.avatar}
            alt="avatar"
            width={58.24}
            className="rounded-full"
            height={58}
          />
        </div>
        <div>
          <h4 className="font-Poppins text-[#151D48] font-semibold text-xl">
            {details.name}
          </h4>
          <p className="font-Poppins text-[#737791]">{details.job}</p>
        </div>
      </div>
    </article>
  );
};

export default Testimonials;
