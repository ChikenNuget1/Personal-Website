
export default function Footer(){
    return(
        <footer className="bg-[#0F252F] px-30 pt-12 pb-6 font-heading
                    [clip-path:ellipse(80%_95%_at_50%_100%)] mt-20 text-4xl">
            <div className="flex justify-between items-center mt-5">
                <div className="flex justify-center items-center">
                    <a href="/" className="w-40 mt-2">
                        <img src="/Moon.svg" alt="Logo"/>
                    </a>
                    <a href="/" className="">
                        Samuel Choi
                    </a>
                </div>
                <nav className="flex justify-end space-x-40 mr-20">
                    <a href="#about">
                        About Me
                    </a>
                    <a href="/projects">
                        Projects
                    </a>
                    <a href="#contact">
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    )
}