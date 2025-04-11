const RandomSlider = ({ randomImages }) => {
    return (
        <section
            className="relative flex flex-col h-auto px-0 my-16 md:my-24 w-[90%] mx-auto gap-1 md:gap-8 lg:gap-12 justify-center items-center">
            <div
                className="flex flex-nowrap overflow-x-scroll w-full gap-6 px-6 py-4 scrollbar-hide"
                style={{ scrollBehavior: "smooth", scrollbarWidth: 'none' }}
            >
                {randomImages.map((image, index) => (
                    <div key={index} className="min-w-[250px]">
                        <img src={image} alt={`Image ${index}`} className="w-full h-auto rounded-lg" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RandomSlider;
