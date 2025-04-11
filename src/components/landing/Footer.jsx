import {Link, NavLink} from "react-router-dom";
import {FaCaretRight} from "react-icons/fa6";

const navlinks = [
    {
        title: 'links',
        links: ['home', 'services', 'about us', 'our team', 'contacts'],
    },
    {
        title: 'socials',
        links: ['facebook', 'twitter', 'dribble', 'instagram']
    }
]

const NavContainer = ({title, links}) => {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-lg capitalize">{title}</p>
            <nav>
                <ul className="flex flex-col gap-3 text-gray-300 capitalize text-base font-medium tracking-wide">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to="#">{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="w-full bg-[#060E18] py-8">
            <div className="flex flex-col gap-6 w-full md:w-[85%] mx-auto bg-transparent">

                <div className="flex justify-between">
                    <div className="flex flex-col gap-5">
                        <p className="text-white font-semibold text-lg">Office</p>
                        <span className="cursor-text w-2/4 text-gray-300 text-base font-medium">Germany — 785 15h Street, Office 478 Berlin, De 81566</span>
                        <Link to="#"
                              className="text-gray-300 text-base font-medium underline underline-offset-8 hover:no-underline">info@email.com</Link>
                        <Link to="#" className="text-white font-semibold text-xl">+1 840 841 25 69</Link>
                    </div>

                    {navlinks.map((link, i) => (
                        <NavContainer key={i} links={link.links} title={link.title} />
                    ))}

                    <div className="flex flex-col gap-3">
                        <p className="text-white font-semibold text-lg">Newsletter</p>
                        <form className="flex flex-col gap-3 items-start w-full">
                            <div className="flex gap-1 justify-center w-full">
                                <input type="email"
                                       placeholder="Enter Your Email Address"
                                       className="text-wrap focus:outline-0 px-8 flex items-center w-full py-2 text-base font-semibold rounded-3xl" />
                                <div
                                    className="[width:40px] [height:40px] flex justify-center items-center text-white text-xl rounded-full bg-blue-500">
                                    <FaCaretRight />
                                </div>
                            </div>
                            <div className="flex justify-center gap-2">
                                <input type="checkbox"/>
                                <label className="text-gray-400 text-base">I agree to the <Link to="#" className="underline underline-offset-4">Privacy Policy</Link>.
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

                <hr className="border-[1px] border-gray-50 md:mt-12" />
                <span className="text-gray-500 font-medium">AxiomThemes &copy; {year}. All right reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
