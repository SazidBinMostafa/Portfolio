import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRocket, FaRegClock } from 'react-icons/fa';


function PackageDetails() {

    const { id } = useParams();

    const [webPackage, setWebPackage] = useState({});

    const { name, service, price, description, features, delivery_time } = webPackage;

    useEffect(() => {
        fetch('/packages.json')
            .then(res => res.json())
            .then(data => {
                const currentPackage = data.find(x => x.id == id);
                setWebPackage(currentPackage)
            })
    }, [id])

    return <>
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-14">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-2/3 lg:pl-6 mt-4 lg:mt-0">
                    <h1 className="text-3xl text-yellow-400 font-semibold mb-2">{name}</h1>
                    <h2 className="text-xl mb-2">{service}</h2>
                    <p className="text-lg mb-4">{description}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-yellow-400 mr-2">$ {price}</span>
                    </div>
                    <div>
                        {features?.map((f, index) => <div key={index} className="flex items-center mb-4">
                            
                        <FaRocket className="text-blue-500 mr-2" />
                            <p className="text-lg">{f}</p>
                            </div>)}
                    </div>
                    <div className="flex items-center mb-4">
                        <FaRegClock className="text-gray-300 mr-2" />
                        <span className="text-lg">{delivery_time} days delivery</span>
                    </div>
                    <div className="mt-6">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
                        >
                            Purchase Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PackageDetails;