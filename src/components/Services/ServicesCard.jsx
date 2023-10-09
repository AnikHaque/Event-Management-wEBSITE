import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
   
    return (

        <div className='' data-aos="fade-right">
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt="Home"
                    src={service?.image}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">$ {service?.price} Only</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Name</dt>

                            <dd className="font-medium">{service?.name}</dd>
                        </div>
                    </dl>

                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem dolores ipsum perspiciatis, architecto itaque omnis debitis nihil veniam quod.</p>
                    <Link to={`/service/${service?.id}`}>
                        <button className='btn bg-blue-500 pl-8 pr-8 text-white pt-2 pb-2 mt-4 rounded-md font-bold'>View Details</button>
                    </Link>
                    
                </div>
            </a> 
           

        </div>

    );
};

export default ServicesCard;