import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-footerColor relative flex py-4 before:hidden before:absolute before:right-0 before:h-1 before:w-full before:bg-black">
            <div className="w-full px-0 py-[3.125rem]">
                <div className="w-full max-w-[68.75rem] mx-auto my-0 px-3 py-0 flex flex-col items-center justify-center">
                    <figure className="w-16">
                        <Image 
                            src="/bold__logo__resized.png"
                            width={64}
                            height={64}
                        />
                    </figure>
                    <div className="w-full max-w-[31.25rem] flex justify-around mx-0 my-6">
                        <a 
                            href="https://www.github.com/leohchoi" 
                            target="_blank"
                            className="text-[white] relative after:content[''] after:absolute after:bottom-[-0.1875rem] after:h-[0.1875rem] 
                                        after:w-0 after:transition-all after:duration-300 after:ease-[ease] after:right-0 after:bg-[white]
                                        hover:after:left-0 hover:after:w-full"
                        >
                            Github
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/leo-choi-44a82b173" 
                            target="_blank"
                            className="text-[white] relative after:content[''] after:absolute after:bottom-[-0.1875rem] after:h-[0.1875rem] 
                                        after:w-0 after:transition-all after:duration-300 after:ease-[ease] after:right-0 after:bg-[white]
                                        hover:after:left-0 hover:after:w-full"
                        >
                            LinkedIn
                        </a>
                        <a 
                            href="#" 
                            // onClick={toggleModal()}
                            className="text-[white] relative after:content[''] after:absolute after:bottom-[-0.1875rem] after:h-[0.1875rem] 
                                        after:w-0 after:transition-all after:duration-300 after:ease-[ease] after:right-0 after:bg-[white]
                                        hover:after:left-0 hover:after:w-full"
                        >
                            Contact
                        </a>
                        <a 
                            href="/resume.docx.pdf" 
                            target="_blank"
                            className="text-[white] relative after:content[''] after:absolute after:bottom-[-0.1875rem] after:h-[0.1875rem] 
                                        after:w-0 after:transition-all after:duration-300 after:ease-[ease] after:right-0 after:bg-[white]
                                        hover:after:left-0 hover:after:w-full"
                        >
                            Resume
                        </a>
                    </div>
                    <div className="text-[white]">Copyright &copy; 2023 Leo Choi</div>
                </div>
            </div>
        </footer>
    )
}