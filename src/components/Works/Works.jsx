import React, { useEffect, useState } from 'react';
import WorksCard from './WorksCard';

const Works = () => {
    const [works, setworks] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setworks(data));
    }, []);

    return (

        <div className='ml-20 mr-20'>
            <h1 className='font-semibold text-3xl mb-8'>Our Top Services</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
                {
                    works?.map((service) => <WorksCard key={service.id} service={service}>

                    </WorksCard>)
                }
            </div>

        </div>

    );
};

export default Works;