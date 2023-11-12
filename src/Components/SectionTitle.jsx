
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 text-center mx-auto py-12">
            <p className="text-yellow-600 text-center py-2">---{subHeading}---</p>
            <h3 className="text-center text-4xl font-bold uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;                    