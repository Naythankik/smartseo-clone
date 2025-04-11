import {Link} from "react-router-dom";
import {FaClosedCaptioning, FaMagnifyingGlass, FaPhone} from "react-icons/fa6";
import HomeIcon from '../../assets/icon.webp'
import {useState} from "react";


const Header = () => {
    const [search, setSearch] = useState(false);
    return (
        <header className="bg-transparent w-full flex justify-between items-center p-8 md:px-12 relative">
            <div className="flex gap-16 items-center">
                <Link to="/">
                    <img src={HomeIcon} alt="Home icon"/>
                </Link>
                <nav className="text-white font-semibold text-base md:text-lg">
                    <ul className="flex gap-10 items-center">
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
                </nav>
            </div>
            <div className="flex items-center">
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
            <div
                className={
                    `transition-all duration-700 ease-in-out bg-[#111922] md:h-[52vh] absolute justify-between top-0 w-full left-0 items-center py-16 flex-col ${search ? 'translate-y-0 pointer-events-auto flex' : 'hidden -translate-y-full pointer-events-none'}`
                }>
                <div className=" flex justify-between w-[88%] items-center">
                    <img src={HomeIcon} alt="Home icon" className="w-48"/>
                    <button onClick={() => {
                        setSearch(!search)
                    }} className="text-white font-medium text-3xl">X
                    </button>
                </div>
                <form className="w-[90%] mb-16">
                    <input type="text"
                           className="w-full bg-transparent focus:outline-0 border-b border-gray-500 pb-4 text-white text-lg md:text-3xl"
                           placeholder="Type words and hit enter"/>
                </form>
            </div>
        </header>
    )
}

export default Header
