
const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item || {}
    return (
        <div className="md:flex space-x-4">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="image" />
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">$ {price}</p>
        </div>
    );
};

export default MenuItem;