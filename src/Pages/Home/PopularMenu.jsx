import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'From Our Menu'}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 py-12">
                {
                    menu.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;