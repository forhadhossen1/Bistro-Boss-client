
const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item || {}

    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure><img src={image} alt="item image" className="w-full" /></figure>
            <p className="absolute right-5 top-5 font-bold bg-slate-900 w-16 text-white p-2 ">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;