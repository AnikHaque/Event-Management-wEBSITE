import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const WorkDetails = () => {
    const services = useLoaderData();


    const { id } = useParams()
    const idInt = parseInt(id);
    const service = services.find((service) => service.id === idInt);
    return (

        <div className=''>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            {service?.name}
                        </h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <img
                                alt="Party"
                                src={service.image}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600">
                                <p>
                                    {service.short_desc}
                                </p>

                                <p>
                                    {service.description}
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default WorkDetails;