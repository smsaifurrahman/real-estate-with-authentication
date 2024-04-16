import { FaBed } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";

import { Link, useLoaderData,useParams } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet-async";



const EstateDetails = () => {
    const estates = useLoaderData() || [];
    const pId = useParams();
    const estate = estates.find(estate => estate.id == pId.id );
    const {image,estate_title,segment_name,location,price,description,facilities,bedrooms,bathrooms,Area,Status } = estate
    console.log(estate);
    return (
        <div className=" md:grid grid-cols-5 gap-4  bg-base-100 shadow-xl mt-8 rounded-xl">
          <Helmet><title>EliteDwelling | EstateDetails-{estate.id.toString()}</title></Helmet>
            <figure className=' relative  mt-4 col-span-3 rounded-xl border-2 md:h-[460px] h-96 md:w-full object-cover'>
            <img className='h-full w-full rounded-xl object-cover' src={image} alt="Album" />
            <p className="absolute bg-blue-500 px-6 rounded-tl-xl text-white left-0 top-0 py-2">{Status}</p>
            </figure>
            
        <div className="col-span-2 md:mt-0 mt-3 md:ml-0 ml-3">
        
        <div>
            <div className="flex items-center gap-2">
                <CiLocationOn />
                <p >{location}</p>
            </div>
                    <h2 className=" md:text-3xl text-2xl font-bold">{estate_title}</h2>
                    <p className='text-xl my-2'>{segment_name}</p>

                
                    <p className='text-2xl text-cyan-600 font-bold'>{price}</p>
                
                    <h2 className='text-xl font-bold my-2 '> Available facilities</h2>
            <div className='grid md:grid-cols-3 gap-1 grid-cols-2'>
                    
                    {
                        facilities.map(facility => <button className='btn bg-green-100' key={facility.id}> {facility} </button>)
                    }
            </div>
            <div className="flex gap-3 my-3 ">
                <div className=" border-2 text-center p-3 bg-green-100 ">
                  <div  className="flex justify-center">
                  <FaBed />
                  </div>
                  <p>{bedrooms}</p>
                  <p>Bedrooms</p>

                </div>
                <div className=" border-2 text-center p-3 bg-green-100 ">
                  <div  className="flex justify-center">
                  <MdBathroom />
                  </div>
                  <p>{bathrooms}</p>
                  <p>Bathrooms</p>

                </div>
                <div className=" border-2 text-center p-3 bg-green-100 ">
                  <div  className="flex justify-center">
                  <FaChartArea />
                  </div>
                  <p className="mt-3 mb-5">{Area}</p>
               

                </div>
            </div>
        
                <p>{description}</p>
              <Link to={'/'}> <button className="btn bg-orange-500 text-white  my-1">Back to Properties</button></Link>
              <button className="btn bg-blue-500 text-white ml-4">{Status === 'Sale'? 'Buy Property' : 'Rent Property'}</button>
        </div> 
          
        </div>
      </div>
    );
};

export default EstateDetails;