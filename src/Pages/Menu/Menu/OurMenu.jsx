import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import banner from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory';
const OurMenu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={banner}
                coverHeading={'OUR MENU'}
                coverDescription={'Would you like to try a dish?'}
            ></Cover>

            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

        </div>
    );
};

export default OurMenu;