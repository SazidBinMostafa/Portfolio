import { Link } from "react-router-dom";


function ServiceCard({ service }) {
  const id = service?.id;
  const name = service?.name;
  const serviceInfo = service?.service;
  const price = service?.price;
  const topFeatures = service?.topFeatures;

  return <>
    <div className="max-w-sm mx-auto bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-indigo-500 p-4 relative">
      {/* Starry Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-80 z-0"></div>
      <div className="p-6 flex flex-col h-full justify-between relative z-10 space-y-4">
        {/* Card Header */}
        <div>
          <h3 className="text-3xl font-extrabold mb-2 tracking-wide text-indigo-400 drop-shadow-lg">{name}</h3>
          <h4 className="text-xl font-medium italic mb-4 text-gray-300 opacity-90">{serviceInfo}</h4>
        </div>

        {/* Features List */}
        <div className="mb-6">
          <h5 className="text-xl font-semibold mb-3 text-indigo-200 underline">Top Features:</h5>
          <ul className="space-y-2">
            {topFeatures?.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price and Button */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4">
            <p className="text-3xl font-bold text-indigo-300">${price}</p>
          </div>
          <Link to={`/package/details/${id}`} className="block text-center w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 transition-all duration-300">
            View Details
          </Link>
        </div>
      </div>
      {/* Animated Glowing Border */}
      <div className="absolute inset-0 rounded-xl border-2 border-indigo-500 opacity-20 hover:opacity-100 animate-pulse"></div>
    </div>
  </>
}

export default ServiceCard;