import { Parallax } from 'react-parallax';

const Cover = ({ img, coverHeading, coverDescription }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero min-h-[70vh]">
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
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