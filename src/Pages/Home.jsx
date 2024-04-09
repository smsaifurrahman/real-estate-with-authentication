import React from 'react';
import Slider from '../Components/Slider';
import Estates from '../Components/Estates';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const estates = useLoaderData() || [];
    return (
        <div>
            <Helmet> <title>EliteDwellings | Home</title> </Helmet>
            <Slider></Slider>
            <Estates estates={estates}></Estates>
        </div>
    );
};

export default Home;