import heroImg from "/hero.png";

const Hero = () => {
  return (
    <div className="relative mx-auto w-full">
      <img src={heroImg} alt="image" className="w-full" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
        <h3 className="mb-1 text-3xl font-semibold text-white drop-shadow-xl shadow-black">
          Any good business nearby?
        </h3>
        <p className="mb-5 w-[30rem] text-base font-normal text-white drop-shadow-xl shadow-black">
          Explore our quality services, local offerings, and unbeatable deals in
          your area. Enjoy the best business experience!
        </p>
        <div className="rounded-2xl bg-white p-5">
          <div className="mb-2 flex justify-start">
            <p className="text-sm font-medium text-gray-800">
              Find your business
            </p>
          </div>
          <div>
            <form className="flex items-center">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="h-4 w-4 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="10"
                    viewBox="0 0 320 512"
                    fill="currentColor"
                  >
                    <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="block w-full rounded-full border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-800"
                  placeholder="Search business..."
                  disabled
                />
              </div>
              <button
                type="submit"
                className="ms-2 inline-flex items-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-800"
              >
                Explore
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
