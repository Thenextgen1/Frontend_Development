import { SlMenu } from "react-icons/sl";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className=" md:hidden">
      <div className="flex justify-between p-6 items-center relative">
        <h1 className="font-semibold text-[#121D48] text-[32px] z-20 font-Outfit">
          Homex.
        </h1>
        <p
          className="z-20"
          onClick={handleOpen}
        >
          {open ? (
            <span>
              <IoCloseCircleSharp
                size="2em"
                color="#121D48"
              />
            </span>
          ) : (
            <SlMenu
              size="2em"
              color="#121D48"
            />
          )}
        </p>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            exit={{ opacity: 0, y: -300 }}
            className="pl-4 pt-24 absolute bg-white text-xl h-screen top-0 w-full"
          >
            <ul className="text-[#121D48] ">
              <li className="font-medium mx-4 py-6">
                <AiFillHome className="align-middle mr-4" /> Home
              </li>
              <li className="mx-4 py-6">
                <AiFillInfoCircle className="align-middle mr-4" />
                About
              </li>
              <li className="mx-4 py-6">
                <MdDesignServices className="align-middle mr-4" />
                Services
              </li>
              <li className="mx-4 py-6">
                <IoMdContact className="align-middle mr-4" />
                Contact
              </li>
            </ul>
            <ul className="text-lg text-[#121D48] flex justify-center items-center my-16 ">
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
