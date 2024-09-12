import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";


function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return <section id="Services">
        <div className="mt-14">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl ">Packages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 mx-5">
                {services.map((service, index) => <ServiceCard key={index} service={service}></ServiceCard>)}
            </div>
        </div>
    </section>
}

export default Services;