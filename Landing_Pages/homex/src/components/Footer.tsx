import { BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#151D48] pt-24">
      <h1 className="font-semibold text-[30px] text-center font-Outfit text-white">
        Homex.
      </h1>
      <p className="text-xl text-center text-white py-8">
        We’ll help you achieve your marketing & business goals
      </p>
      <ul className="text-lg text-white flex-wrap flex justify-center items-center ">
        <li className="mx-6">Home</li>
        <li className="mx-6">About</li>
        <li className="mx-6">Services</li>
        <li className="mx-6 leading-loose">Contact</li>
      </ul>
      <ul className="text-lg text-white flex justify-center items-center my-8 ">
        <li className="mx-5">
          <BsInstagram />
        </li>
        <li className="mx-5">
          <FaLinkedinIn size="1.2em" />
        </li>
        <li className="mx-5">
          <GrFacebookOption size="1.2em" />
        </li>

        <li className="mx-5">
          <SiTwitter color="#FD346E" />
        </li>
      </ul>
      <p className="mt-24 py-8 ont-Poppins text-sm text-center text-white border-solid border-white border-t-[1px]">
        &copy; 2023{" "}
        <a
          href="https://elijahohiwerei.netlify.app/"
          rel="noreferrer"
          target="_blank"
          className="font-Poppins text-sm text-center text-white"
        >
          Elijah Ohiwerei
        </a>
      </p>
    </footer>
  );
};

export default Footer;
