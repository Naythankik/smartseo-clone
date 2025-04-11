import {Link} from "react-router-dom";
import {FaDribbble, FaFacebook, FaInstagram, FaMagnifyingGlass, FaPhone, FaTwitter} from "react-icons/fa6";
import HomeIcon from '../../assets/icon.webp'
import HamBurger from '../../assets/hamburger.png'
import {useState} from "react";


const Header = () => {
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <header className="bg-transparent w-full flex justify-between items-center p-5 md:px-12 relative">
            <div className="flex gap-16 items-center justify-between md:justify-center w-full md:w-auto">
                <Link to="/">
                    <img src={HomeIcon} alt="Home icon"/>
                </Link>
                <nav className="text-white font-semibold text-base md:text-lg">
                    <ul className="hidden md:flex gap-10 items-center">
                        <li><Link to="/"
                                  className="hover:underline underline-offset-8 [text-decoration-thickness:2px] transition-all duration-200">Home</Link>
                        </li>
                        <li><Link to="#"
                                  className="hover:underline underline-offset-8 [text-decoration-thickness:2px] transition-all duration-200">Pages</Link>
                        </li>
                        <li><Link to="#"
                                  className="hover:underline underline-offset-8 [text-decoration-thickness:2px] transition-all duration-200">Portfolio</Link>
                        </li>
                        <li><Link to="#"
                                  className="hover:underline underline-offset-8 [text-decoration-thickness:2px] transition-all duration-200">Contacts</Link>
                        </li>

                        <li>
                            <button className="text-white text-lg md:text-xl lg:text-3xl" onClick={() => {
                                setSearch(!search)
                            }}>
                                <FaMagnifyingGlass className="font-extralight"/>
                            </button>
                        </li>
                    </ul>
                    <ul className="flex md:hidden gap-10 items-center">
                        <li>
                            <button className="text-white text-lg md:text-xl lg:text-3xl" onClick={() => {
                                setSearch(!search)
                            }}>
                                <FaMagnifyingGlass className="font-extralight"/>
                            </button>
                        </li>
                        <li>
                            <img src={HamBurger} alt="hambugr" className="w-6 cursor-pointer" onClick={() => {
                                setMenu(!menu)
                            }} />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="hidden md:flex items-center">
                <Link to="#" className="hidden lg:flex text-nowrap items-center gap-4 mr-16">
                    <div
                        className="[width:40px] [height:40px] flex justify-center items-center text-white text-xl rounded-full bg-blue-900">
                        <FaPhone/>
                    </div>
                    <span className="text-white font-bold text-xl">1 800 458 56 97</span>
                </Link>
                <Link to="#"
                      className="rounded-3xl text-white bg-blue-600 p-3 font-semibold hover:opacity-90 w-48 text-center">Let's
                    talk</Link>
            </div>

            {/*The modal for search display*/}
            <div
                className={
                    `transition-all duration-700 ease-in-out bg-[#111922] h-[58vh] md:h-[52vh] z-50 fixed justify-between top-0 w-full left-0 items-center py-8 flex-col ${search ? 'translate-y-0 pointer-events-auto flex' : 'hidden -translate-y-full pointer-events-none'}`
                }>
                <div className=" flex justify-between w-[88%] items-center">
                    <img src={HomeIcon} alt="Home icon" className="w-28 md:w-48"/>
                    <button onClick={() => {
                        setSearch(!search)
                    }} className="text-white font-medium text-2xl md:text-3xl">X
                    </button>
                </div>
                <form className="w-[90%] mb-16">
                    <input type="text"
                           className="w-full bg-transparent focus:outline-0 border-b border-gray-500 pb-4 text-white text-lg md:text-3xl"
                           placeholder="Type words and hit enter"/>
                </form>
            </div>

            {/*The Modal for hamburger menu*/}
            <div
                className={
                    `transition-all duration-700 ease-in-out bg-[#111922] min-h-screen z-50 fixed gap-12 top-0 w-full left-0 items-center py-8 flex-col ${menu ? 'translate-y-0 pointer-events-auto flex' : 'hidden -translate-y-full pointer-events-none'}`
                }>
                <div className=" flex justify-between w-[88%] items-center">
                    <img src={HomeIcon} alt="Home icon" className="w-28"/>
                    <button onClick={() => {
                        setMenu(!menu)
                    }} className="text-white font-medium text-2xl flex justify-center items-center">
                        <span className="text-gray-400 font-normal text-base ml-2">Close</span>
                        X
                    </button>
                </div>

                <nav className="text-white font-semibold text-base md:text-lg w-[94%] flex flex-col gap-5">
                    <ul className={`${menu ? 'flex' : 'md:hidden'} flex-col w-fit gap-4 text-2xl`}>
                        <li><Link to="/"
                                  className="hover:underline underline-offset-8 [text-decoration-thickness:2px] transition-all duration-200">Home</Link>
                        </li>
                        <li><Link to="#"
                                  className="hover:underline underline-offset-8 [text-decoration-thickness:2px] transition-all duration-200">Pages</Link>
                        </li>
                        <li><Link to="#"
                                  className="hover:underline underline-offset-8 [text-decoration-thickness:2px] transition-all duration-200">Portfolio</Link>
                        </li>
                        <li><Link to="#"
                                  className="hover:underline underline-offset-8 [text-decoration-thickness:2px] transition-all duration-200">Contacts</Link>
                        </li>
                    </ul>

                    <hr className="border-r w-full border-gray-50"/>

                    <ul className="flex gap-3">
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaDribbble/>
                        <FaInstagram/>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header
