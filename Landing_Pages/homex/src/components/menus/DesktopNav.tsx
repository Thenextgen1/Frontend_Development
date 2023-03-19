const DesktopNav = () => {
  return (
    <nav className="hidden md:flex justify-between items-center bg-[#151D48] lg:pl-24 lg:pr-[8.5%] px-14 py-8">
      <h1 className="font-semibold text-[32px] font-Outfit text-white">
        Homex.
      </h1>
      <ul className="text-lg text-white flex ">
        <li className="font-medium mx-4">Home</li>
        <li className="mx-4">About</li>
        <li className="mx-4">Services</li>
        <li className="mx-4">Contact</li>
      </ul>
      <p>
        <button className="text-[#121D48] py-3 px-7 rounded-lg bg-white text-lg font-medium font-Poppins">
          Let&apos;s Talk
        </button>
      </p>
    </nav>
  );
};

export default DesktopNav;
