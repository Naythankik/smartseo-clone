import { useRef } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const TestimonialArticles = ({ id, name, description, level, image }) => {
    return (
        <article id={id}
                 className="min-w-full transition-shadow duration-300 flex gap-5 items-center flex-col text-center">
            {image && (
                <img src={image} alt={name} className="rounded-full w-[100px] h-[100px]" />
            )}
            <p className="capitalize text-blue-950 text-xl font-semibold w-3/5">{description}</p>
            <span className="text-cyan-400 text-8xl font-extrabold h-12">''</span>
            <div className="flex flex-col gap-2">
                <span className="capitalize text-blue-950 text-2xl font-semibold">{name}</span>
                <span className="capitalize text-gray-300 text-xl font-medium">{level}</span>
            </div>
        </article>
    );
};


const TestimonialSlider = ({ testimonials }) => {
    const scrollRef = useRef();

    const scroll = (direction) => {
        if (scrollRef.current) {
            const size = window.innerWidth / 1.2;

            scrollRef.current.scrollBy({
                left: direction === "left" ? -size : size,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            className="relative flex flex-col h-auto px-0 my-16 md:my-24 w-[90%] md:w-[85%] mx-auto gap-1 md:gap-8 lg:gap-12 justify-center items-center">
            <button
                onClick={() => scroll("left")}
                className="absolute top-1/2 -translate-y-1/2 left-4 bg-transparent border-2 border-gray-300 text-gray-600 w-12 h-12 rounded-full flex justify-center items-center text-2xl z-10"
            >
                <FaCaretLeft/>
            </button>

            <div
                ref={scrollRef}
                className="flex flex-nowrap overflow-x-scroll w-full gap-6 px-6 py-4 scrollbar-hide"
                style={{scrollBehavior: "smooth", scrollbarWidth: 'none'}}
            >
                {testimonials.map((testimonial, index) => (
                    <TestimonialArticles key={index} {...testimonial} />
                ))}
            </div>

            <button
                onClick={() => scroll("right")}
                className="absolute top-1/2 -translate-y-1/2 right-4 bg-transparent border-2 border-gray-300 text-gray-600 w-12 h-12 rounded-full flex justify-center items-center text-2xl z-10"
            >
                <FaCaretRight/>
            </button>
        </section>
    );
};

export default TestimonialSlider;
