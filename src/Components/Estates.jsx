import EstatesCard from "./EstatesCard";


const Estates = ({estates}) => {

    return (
        <div className="md:my-12">
            <h1 className="md:text-4xl text-center font-bold">Discover Your Dream Home: Unveiling Luxury <br /> Living at its Finest</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 my-8">
                {
                    estates.map(estate => <EstatesCard estate={estate} key={estate.id}></EstatesCard>)
                }
            </div>
        </div>
    );
};

export default Estates;