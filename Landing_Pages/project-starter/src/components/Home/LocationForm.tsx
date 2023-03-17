import styles from "@/styles/Home.module.css";

const LocationForm = () => {
  return (
    <div>
      <form
        className={`${styles.hero_form} bg-white  rounded-lg pl-7 py-[5px] pr-1 flex items-center justify-between`}
      >
        <div className="">
          <input
            type="text"
            placeholder="Search by Location"
            className="ml-2 sm:ml-8 text-xl w-[50vw] xl:w-auto"
          />
        </div>
        <p>
          {" "}
          <button className="text-center sm:px-8 px-4 bg-[#567AE5] rounded-lg text-white py-3">
            Search
          </button>
        </p>
      </form>
    </div>
  );
};

export default LocationForm;
