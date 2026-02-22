
export default function Header(){
    return (
        <header className="flex justify-between p-10 space-x-4 mx-25 items-center text-4xl font-heading">
            <div className="flex justify-center items-center">
                <a href="/" className="w-25">
                    <img src="/Moon.svg" alt="Logo"/>
                </a>
                <a href="/" className="">
                    Samuel Choi
                </a>
            </div>
            <nav className="flex justify-end space-x-25 mr-5">
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
        </header>
    )
}