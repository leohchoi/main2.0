import Image from "next/image"

export default function Nav() {
    return (
        <nav className="transition-all duration-[600ms] delay-500 flex justify-between
                        items-center w-full max-w-[75rem] h-[6.25rem] mx-auto my-0 px-5 py-0">
            <figure>
                <Image
                    src="/output-onlinepngtools.png"
                    width={40}
                    height={40}
                    className="invert-[1] mx-3 my-0"
                />
            </figure>
            <ul className="flex">
                <li className="mx-3 my-0">
                    <a
                        href="#"
                        className="text-base text-[#242424] font-bold relative after:content-[''] 
                                  after:absolute after:bottom-[-0.1875rem] after:h-[0.1875rem] after:w-0 after:transition-all
                                  after:duration-300 after:ease-[ease] after:right-0 hover:after:w-full hover:after:left-0
                                  after:bg-[black]"
                    >
                        About
                    </a>
                </li>
                <li className="mx-3 my-0">
                    <a
                        href="#projects"
                        className="text-base text-[#242424] font-bold relative after:content-[''] 
                                  after:absolute after:bottom-[-0.1875rem] after:h-[0.1875rem] after:w-0 after:transition-all
                                  after:duration-300 after:ease-[ease] after:right-0 hover:after:w-full hover:after:left-0
                                  after:bg-[black]">
                        Projects
                    </a>
                </li>
                <li className="mx-3 my-0" alt="add toggle">
                    <a
                        href="#"
                        className="text-base text-[#242424] font-bold relative after:content-[''] 
                                  after:absolute after:bottom-[-0.1875rem] after:h-[0.1875rem] after:w-0 after:transition-all
                                  after:duration-300 after:ease-[ease] after:right-0 hover:after:w-full hover:after:left-0
                                  after:bg-[black]">
                        Contact
                    </a>
                </li>
                <li className="mx-3 my-0" alt="add toggle">
                    <a
                        href="#"
                        className="text-base text-[#242424] font-bold relative after:content-[''] 
                                  after:absolute after:bottom-[-0.1875rem] after:h-[0.1875rem] after:w-0 after:transition-all
                                  after:duration-300 after:ease-[ease] after:right-0 hover:after:w-full hover:after:left-0
                                  after:bg-[black]">
                        FAIcon
                    </a>
                </li>
            </ul>
        </nav>
    )
}