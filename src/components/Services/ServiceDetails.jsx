import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData();
  
    
const {id} = useParams()
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

            <section className="py-6 bg-gray-100 text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={service?.image1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={service?.image2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={ service?.image3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={service?.image4} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={service?.image5} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={service?.image6} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={service?.image7} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={service?.image8} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={service?.image9} />
                    <img src={service?.image10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
                </div>
            </section>


            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg bg-blue-500 text-white font-bold">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                        </details>
                        <details className="w-full border rounded-lg bg-blue-500 text-white font-bold">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                        </details>
                        <details className="w-full border rounded-lg bg-blue-500 text-white font-bold">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                        </details>
                        <details className="w-full border rounded-lg bg-blue-500 text-white font-bold">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                        </details>
                        <details className="w-full border rounded-lg bg-blue-500 text-white font-bold">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                        </details>
                        <details className="w-full border rounded-lg bg-blue-500 text-white font-bold">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                        </details>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default ServiceDetails;