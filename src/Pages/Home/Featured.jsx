import SectionTitle from "../../Components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import './Featurd.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed my-20">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center py:10 md:py-20 px-10 md:px-32 pb-8 gap-4 text-white">
                <div>
                    <img src={featuredImg} alt="featuredImg" />
                </div>
                <div>
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque voluptatum explicabo asperiores illum cum blanditiis dolores soluta impedit modi fuga nostrum consequatur illo voluptate ea pariatur possimus, enim, reprehenderit quas repudiandae ipsam consequuntur? Voluptatibus, consequuntur! Reiciendis adipisci esse assumenda.</p>
                    <button className=" my-5 btn btn-outline border-0 border-b-4 ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;