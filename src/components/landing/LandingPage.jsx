import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Link} from "react-router-dom";
import LandingImage from "../../assets/landing.webp"
import LaptopMan from "../../assets/laptop-man.webp"
import HeadPhone from "../../assets/headphone.webp"
import WomanDrinking from "../../assets/woman-drinking.webp"
import Laptop from "../../assets/laptop.webp"
import Orca from "../../assets/icons/orca.webp"
import Arquivar from "../../assets/icons/arquivar.webp"
import Br from "../../assets/icons/br.webp"
import Codan from "../../assets/icons/codan.webp"
import Minagod from "../../assets/icons/minagod.webp"
import Wave from "../../assets/icons/wave.webp"
import LadyWorking from "../../assets/lady-working.jpg"
import GuyWorking from "../../assets/guy-working.jpg"
import GuyOnPhone from "../../assets/guy-on-phone.jpg"
import WorkingOffice from "../../assets/working-office.jpg"

import {
    FaCartShopping,
    FaFaceAngry,
    FaImage,
    FaMessage,
    FaShare,
    FaWallet
} from "react-icons/fa6";
import {SiFarfetch} from "react-icons/si";


const lists = [
    {
        id: 1,
        title: 'Projects',
        value: 98
    },
    {
        id: 2,
        title: 'People',
        value: 65
    },
    {
        id: 3,
        title: 'Years',
        value: 10
    },
    {
        id: 4,
        title: 'Offices',
        value: 15
    }
]

const articles = [
    { id: 1, title: 'media seo', description: "Fresh startup ideas for your digital business", date: "Apr 21, 2020", comments: 0, image: WorkingOffice },
    { id: 2, title: 'media seo', description: "Top 5 targeting techniques to attract customers", date: "Apr 21, 2020", comments: 0, image: LadyWorking },
    { id: 3, title: 'media seo', description: "Why do project managers need to focus on strategy?", date: "Apr 21, 2020", comments: 0, image: GuyOnPhone },
    { id: 4, title: 'media seo', description: "What’s trending on designers’ charts this spring", date: "Apr 21, 2020", comments: 0, image: GuyWorking },
    { id: 5, title: 'media seo', description: "Fresh startup ideas for your digital business", date: "Apr 21, 2020", comments: 0, image: WorkingOffice },
    { id: 6, title: 'media seo', description: "Top 5 targeting techniques to attract customers", date: "Apr 21, 2020", comments: 0, image: LadyWorking },
    { id: 7, title: 'media seo', description: "Why do project managers need to focus on strategy?", date: "Apr 21, 2020", comments: 0, image: GuyOnPhone },
    { id: 8, title: 'media seo', description: "What’s trending on designers’ charts this spring", date: "Apr 21, 2020", comments: 0, image: GuyWorking },
]

const SideLinks = ({ title, icon: Icon }) => {
    return (
        <Link
            to="#"
            className="group text-white bg-blue-950 flex items-center w-fit min-h-16"
        >
            <span className="hidden group-hover:flex bg-cyan-950 py-6 px-4 w-full text-nowrap uppercase font-semibold text-xs transition-all duration-300">
                {title}
            </span>
            <span className="flex justify-center w-full px-6 group-hover:px-7 transition-all duration-300">
                <Icon className="text-3xl font-extralight" />
            </span>
        </Link>
    );
};

const RandomList = ({ id, title, value}) => {
    return (
        <div className="cursor-text gap-4 flex">
            <div className="relative">
                <p className="text-[10rem] font-extrabold text-red-400">{value}</p>
                <span
                    className="text-2xl text-gray-900 font-bold absolute top-0 bottom-0 left-0 right-0 grid place-items-center">{title}
            </span>
            </div>
            <hr dir="vertical" className={
                `${id !== 4 ? 'flex' : 'hidden'} border w-full h-[70px] flex items-center my-auto border-gray-200 ml-32`
            }/>
        </div>
    );
}

const SponsorArticle = ({ icon: Icon, title }) => {
    return (
        <div className="w-full justify-center flex">
            <img src={Icon} alt={title} className="w-2/3"/>
        </div>
    )
}

const ArticleArticles = ({ title, description, date, comments, image }) => {
    return (
        <article className="min-w-[50%] md:min-w-[35%] rounded md:rounded-2xl transition-shadow duration-300">
            {Image && (
                <img src={image} alt={title} className="w-full rounded-t-xl md:rounded-t-2xl"/>
            )}
            <div className="p-2 md:p-4 lg:p-6">
                <h3 className="text-base md:text-xl font-bold text-gray-800 mb-2 uppercase">{title}</h3>
                <p className="text-gray-900 text-base md:text-2xl font-bold mb-2 md:mb-4">{description}</p>
                <ul className="flex gap-8 items-center text-base text-gray-400">
                    <li>{date}</li>
                    <li className="list-disc">{comments} comments</li>
                </ul>
            </div>
        </article>
    );
};


const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <div className="fixed top-1/3 right-0 hidden flex-col gap-0.5 items-end">
                <SideLinks title="Buy Theme" icon={FaCartShopping}/>
                <SideLinks title="Our bestsellers" icon={FaImage}/>
                <SideLinks title="Hide panel" icon={FaWallet}/>

            </div>

            <div className="hidden fixed left-10 bottom-24 gap-4 z-50 items-center">
                <div
                    className="[width:80px] [height:80px] flex justify-center items-center text-white text-3xl rounded-full bg-green-500">
                    <FaMessage/>
                </div>
                <button className="bg-white px-5 py-2 rounded-xl text-xl">Presale Chat</button>
            </div>

            <section className="hidden flex-col h-auto bg-fixed md:h-[85vh]"
                     style={{
                         backgroundImage: `url(${LandingImage})`,
                         backgroundSize: 'cover'
                     }}
            >
                <Header/>
                <div className="flex flex-col items-center my-12 h-full justify-evenly">
                    <p className="capitalize text-6xl text-white w-2/5 text-center font-extrabold ">
                        turning creative ideas into success
                    </p>
                    <p className="text-white w-2/6 font-semibold text-center text-xl">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud
                        exerc.
                    </p>
                    <Link to="#"
                          className="rounded-3xl text-white bg-cyan-400 py-4 w-fit px-12 font-semibold text-center">Discover
                        Now</Link>
                </div>

            </section>

            {/*The first section*/}
            <section className="hidden px-16 my-[16rem] w-full md:w-[85%] mx-auto justify-between items-center">
                <div className="w-3/6 relative h-full">
                    <div>
                        <img src={HeadPhone} alt="headphone icon"/>
                    </div>
                    <div className="flex justify-end">
                        <img src={LaptopMan} alt="laptop man" className="absolute top-32 left-40"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-2/5">
                    <p className="text-lg text-black uppercase font-semibold tracking-widest">creative agency</p>
                    <p className="text-6xl text-black font-bold">We help your business grow</p>
                    <p className="text-base text-gray-600 font-medium tracking-wide">Dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>

                    <div className="flex gap-5 items-center">
                        <FaShare className="text-3xl"/>
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl text-black font-bold">Creative design</p>
                            <span className="text-lg md:text-base text-gray-600 font-medium tracking-wide">Natus error sit voluptatem accus antium doloremque.</span>
                        </div>
                    </div>

                    <div className="flex gap-5 items-center">
                        <SiFarfetch className="text-3xl"/>
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl text-black font-bold">Endless possibilities</p>
                            <span className="text-lg md:text-base text-gray-600 font-medium tracking-wide">Sit voluptatem accus antium doloremque laudan.</span>
                        </div>
                    </div>

                </div>
            </section>

            {/*The second section*/}
            <section className="hidden px-20 mt-[16rem] w-full md:w-[82%] mx-auto justify-between items-center">
                {
                    lists.map((item, index) => (
                        <RandomList key={index} id={item.id} title={item.title} value={item.value}/>
                    ))
                }
            </section>

            {/*The third section*/}
            <section className="flex flex-col md:flex-row md:px-20 gap-2 md:gap-0 my-16 md:my-24 w-[90%] md:w-[85%] mx-auto justify-between md:h-72">
                <div className="flex flex-col gap-1 md:gap-4 w-full md:w-2/5">
                    <p className="text-base md:text-lg text-black uppercase font-semibold tracking-widest">creative solutions</p>
                    <p className="text-2xl md:text-4xl lg:text-6xl text-black font-bold">We make unique & memorable brands</p>

                </div>
                <div className="w-full md:w-3/6 flex flex-col justify-end gap-1 md:gap-3">
                    <p className="text-base md:text-lg text-gray-600 font-medium tracking-wide">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque
                        lorem in voluptate velit iusto odio dignissimos duci esse.<br/><br/> Sed ut perspiciatis unde
                        omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                    <Link to="#"
                          className="text-indigo-900 underline underline-offset-4 md:underline-offset-8 hover:no-underline font-semibold text-base md:text-lg">Read
                        More</Link>
                </div>

            </section>

            {/*The fifth section*/}
            <section className="flex flex-col md:flex-row px-0 md:px-16 my-16 md:my-24 w-[90%] md:w-[85%] mx-auto gap-3 md:gap-0 justify-between">
                <p className="text-xl md:text-3xl lg:text-5xl text-black font-bold w-full md:w-[40%]">Subscribe for the exclusive updates!</p>
                <form className="flex flex-col gap-1 md:gap-3 items-start w-full md:w-[58%]">
                    <div className="flex gap-2 md:gap-5 w-full">
                        <input type="email"
                               placeholder="Enter Your Email Address"
                               className="text-wrap focus:outline-0 flex items-center gap-2 w-full py-2 px-4 md:p-4 text-base font-semibold rounded-xl md:rounded-3xl"/>
                        <button type="submit"
                                className="text-wrap flex items-center gap-2 py-2 md:py-4 w-2/5 justify-center text-white rounded-xl md:rounded-3xl bg-blue-700">
                            <FaFaceAngry/>
                            Subscribe
                        </button>
                    </div>
                    <div className="flex justify-center gap-2">
                        <input type="checkbox"/>
                        <label className="text-gray-800 text-sm">I agree to the
                            <Link to="#"
                                  className="underline underline-offset-4"> Privacy
                            Policy</Link>.
                        </label>
                    </div>
                </form>
            </section>

            {/*The seventh section*/}
            <section className="flex flex-col-reverse md:flex-row px-0 md:px-16 gap-8 md:gap-0 my-16 md:my-24 w-[90%] md:w-[85%] mx-auto justify-between items-center">

                <div className="flex flex-col gap-2 md:gap-4 w-full md:w-2/5">
                    <p className="text-base md:text-lg text-black uppercase font-semibold tracking-widest">Who We Are</p>
                    <p className="text-2xl md:text-4xl lg:text-6xl text-black font-bold">We provide best digital services</p>
                    <p className="text-base text-gray-600 font-medium tracking-wide">
                        Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                        sed quia.
                    </p>
                    <Link to="#"
                          className="rounded-xl md:rounded-3xl text-white bg-cyan-400 py-3 md:py-4 w-fit px-8 md:px-12 font-semibold text-center">Discover
                        Now</Link>

                </div>

                <div className="w-full md:w-3/6 relative h-full">
                    <div className="flex justify-end w-full">
                        <img src={WomanDrinking} alt="woman drinking" />
                    </div>
                    <div className="flex w-full">
                        <img src={Laptop} alt="laptop" className="-mt-96 ml-10 md:ml-28"/>
                    </div>
                </div>

            </section>

            {/*The eight section*/}
            <section className="grid px-0 grid-cols-[1fr_1fr] md:grid-cols-6 my-16 md:my-24 w-[95%] md:w-[85%] mx-auto gap-3">
                    <SponsorArticle title="codan" icon={Codan}/>
                    <SponsorArticle title="wave" icon={Wave}/>
                    <SponsorArticle title="orca" icon={Orca}/>
                    <SponsorArticle title="minagod" icon={Minagod}/>
                    <SponsorArticle title="br" icon={Br}/>
                    <SponsorArticle title="arquivar" icon={Arquivar}/>
            </section>

            {/*The ninth section*/}
            <section
                className="flex flex-col px-0 my-16 md:my-24 w-[90%] md:w-[85%] mx-auto gap-1 md:gap-8 lg:gap-12 justify-center items-center">
                <p className="text-base md:text-lg text-black uppercase font-semibold tracking-widest">Our blog</p>
                <p className="text-2xl md:text-4xl lg:text-6xl text-black font-bold">Latest articles</p>
                <div className="flex flex-nowrap overflow-x-scroll w-full gap-6 px-6 py-4" style={{scrollbarWidth: 'none'}}>{
                    articles.map((article, index) => (
                        <ArticleArticles key={index} {...article} />
                    ))
                }</div>
            </section>

            <Footer/>
        </div>
    )
}

export default LandingPage
