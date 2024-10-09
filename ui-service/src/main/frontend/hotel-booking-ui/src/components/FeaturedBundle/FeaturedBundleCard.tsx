const FeaturedBundleCard = ({ destination, dates, price, imgSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-[rgba(0,0,0,0.4)] transition-shadow duration-300">
      <div className="h-40 bg-gray-300 relative overflow-hidden">
        <img
          src={imgSrc}
          alt={destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
        <div className="absolute top-2 left-0 bg-blue-600 text-white px-2 py-1 rounded-r-full">
          Hotel + Flight
        </div>
        <h3 className="absolute bottom-2 left-2 text-white text-xl font-bold drop-shadow-md">
          {destination}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-2">{dates}</p>
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
          <p>Round-trip flight</p>
        </div>
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v7H7V5zm8 9v-7h2v7h-2zm-8 0v-7H5v7h2z"
              clipRule="evenodd"
            />
          </svg>
          <p>Hotel for 3 Nights</p>
        </div>
        <div className="flex justify-between content-end">
          <div>
            <span className="inline-block align-middle bg-green-100 px-2  text-green-800 font-semibold rounded-full">
              BUNDLE & SAVE
            </span>
            <p className="text-sm pt-3">3 nights hotel + Round-trip flight</p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold">${price}</p>
            <span className="text-sm font-normal">per person</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBundleCard;
