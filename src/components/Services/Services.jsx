import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("service.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (

   <div className='ml-20 mr-20'>
          <h1 className='font-semibold text-3xl mb-8'>Our Event Services</h1>
            <div   className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
    {
        services?.map((service) => <ServicesCard key={service.id} service={service}>

        </ServicesCard>)
    }
</div>
            
   </div>

    );
};

export default Services;