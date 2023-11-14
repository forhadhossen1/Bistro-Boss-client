import { Parallax } from 'react-parallax';

const Cover = ({ img, coverHeading, coverDescription }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgClassName='object-cover'
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero min-h-[70vh]">
                <div className=" "></div>
                <div className="hero-content text-center text-white bg-black md:p-12 md:px-20 rounded-lg bg-opacity-50">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{coverHeading}</h1>
                        <p className="mb-5">{coverDescription}</p>
                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;