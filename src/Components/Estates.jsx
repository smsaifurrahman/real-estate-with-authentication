import EstatesCard from "./EstatesCard";
import 'animate.css';


const Estates = ({estates}) => {

    return (
        <div className="mt-4 md:mt-12 lg:mt-16">
            <h1 className="text-2xl md:text-3xl mb-8 text-center font-bold">Discover Your Dream Home: Unveiling Luxury <br /> Living at its Finest</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 my-8  ">
                {
                    estates.map(estate => <EstatesCard estate={estate} key={estate.id}></EstatesCard>)
                }
            </div>
        </div>
    );
};

export default Estates;