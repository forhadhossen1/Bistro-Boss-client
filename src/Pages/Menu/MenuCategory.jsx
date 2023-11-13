import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({items, coverHeading, banner, coverDescription}) => {
    return (
        <div>
            {coverHeading && <Cover
                img={banner}
                coverHeading={coverHeading}
                coverDescription ={coverDescription}
            ></Cover>}

             <div className="grid md:grid-cols-2 gap-8 py-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className=" my-5 btn btn-outline border-0 border-b-4 ">Order Your Favourite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;