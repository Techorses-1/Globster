import React, { useEffect } from 'react';
import ServicesHero from './ServicesHero/ServicesHero';
import ServicesEditorial from './ServicesSection/ServicesEditorial';
import ServicesHype from './Serviceshype/ServicesHype';
import ServicesStack from './ServicesSection/ServicesStack';
import ServicesMasonry from './ServicesSection/ServicesMasonry';

const Services = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            <ServicesHero />
            <ServicesHype />
            <ServicesEditorial />
            {/* <ServicesStack /> */}
            {/* <ServicesMasonry /> */}
        </>
    );
};

export default Services;