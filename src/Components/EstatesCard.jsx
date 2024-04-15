import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const EstatesCard = ({estate}) => {
    const {image,location,estate_title,price,description,Status,id} = estate || {};
    return (
 <div  className="card bg-base-200 shadow-xl md:hover:scale-105 transition-transform">
    <figure className=" h-64 md:h-80 relative"> {/* Adjust the height as per your requirement */}
        <img className='rounded-xl h-full w-full object-cover' src={image} alt="Shoes" />
        <p className="absolute bg-blue-500 px-6 rounded-l-b-xl text-white f left-0 top-0 py-2">{Status}</p>
    </figure>
    <div className="card-body">
        <div className="flex items-center gap-2">
        <CiLocationOn />
        <p >{location}</p>

        </div>
        <h2 className="card-title">
            {estate_title}
           
        </h2>
        <p> <span className="font-bold">Price:</span> {price}</p>
        <p>Description: {description.slice(0,120)}... </p>
        <div>
           <Link to={`/estate-details/${id}`}> <button onClick={''} className="btn bg-orange-500 text-white">View Property</button></Link>
        </div>
       
    </div>
</div>

    
    );
};

export default EstatesCard;