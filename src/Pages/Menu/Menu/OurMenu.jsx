import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover';
import banner from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory';
const OurMenu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
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

            {/* main cover */}

            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>

             {/* offered section  */}
            <MenuCategory items={offered}></MenuCategory>

            {/* desserts meny items */}
            <MenuCategory items={desserts}
            coverHeading={'desserts'} coverDescription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} banner={dessertImg}></MenuCategory>


            {/*PIZZA meny items */}
            <MenuCategory items={pizza}
            coverHeading={'pizza'} coverDescription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} banner={pizzaImg}></MenuCategory>

            {/*salad meny items */}
            <MenuCategory items={salad}
            coverHeading={'salads'} coverDescription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} banner={saladImg}></MenuCategory>

            {/*salad meny items */}
            <MenuCategory items={soup}
            coverHeading={'soups'} coverDescription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} banner={soupImg}></MenuCategory>



        </div>
    );
};

export default OurMenu;