import Spline from '@splinetool/react-spline';
import {useState} from 'react';
import {IoMenu} from 'react-icons/io5';
import SCENE_OBJECT from './img/scene.spline';
import JAHID from './img/1584257810706.jpg';


function App() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="flex flex-col w-screen  min-h-screen items-center justify-center relative bg-primary pb-20">
            {/* Navigation Bar */}

            <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex items-center justify-center">
                <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
                    <p className="text-lg text-slate-200 font-medium">Jahid Bhuiyan</p>

                    <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
                        <a

                            href="#home"
                            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
                            Home
                        </a>

                        <a
                            href="#about"
                            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
                            About
                        </a>

                        <a
                            href="#projects"
                            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
                            Projects
                        </a>

                        <a
                            href="#contact"
                            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">
                            Contact
                        </a>

                        <a
                            href="/#"
                            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer  ml-auto px-2 py-1 border hover:border-gray-100 border-textBase rounded-xl duration-100 ease-in-out">
                            Download
                        </a>
                    </div>

                    <div
                        onClick={() => setIsActive(!isActive)}
                        className="block  md:hidden  ml-auto cursor-pointer">
                        <IoMenu className="text-2xl text-textBase"/>
                    </div>
                    {isActive && (
                        <div
                            className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col justify-evenly items-center gap-6">
                            <a
                                href="#home"
                                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                                onClick={() => setIsActive(false)}>
                                Home
                            </a>

                            <a
                                href="#about"
                                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                                onClick={() => setIsActive(false)}>
                                About
                            </a>

                            <a
                                href="#projects"
                                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                                onClick={() => setIsActive(false)}>
                                Projects
                            </a>

                            <a
                                href="#contact"
                                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                                onClick={() => setIsActive(false)}>
                                Contact
                            </a>

                            <a
                                href="/#"
                                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer  px-2 py-1 border hover:border-gray-100 border-textBase rounded-xl duration-100 ease-in-out"
                                onClick={() => setIsActive(false)}>
                                Download
                            </a>
                        </div>
                    )}
                </div>
            </nav>

            <div className="relative" style={{width: 'inherit'}} id="home">
                <Spline scene={SCENE_OBJECT}/>

                <div className='absolute bottom-10 w-full justify-center items-center flex'>
                    <div className='shadow-md flex p-4 items-center justify-center bg-zinc-900 rounded-3xl'>
                        <p className='text-white'>Press and drag to orbit</p>
                    </div>
                </div>
            </div>

            {/*    Main section*/}
            <main className='w-[80%] mt-5'>
                {/*    About section*/}
                <section id='about' className='w-full grid grid-col-1 md:grid-col-2 gap-4 my-24'>
                    {/*image box*/}
                    <div className='w-full h-420 flex items-center justify-center '>
                        <div className='w-275 h-340 bg-emerald-200 rounded-md relative'>
                            <img src={JAHID}
                                 className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl'
                                 alt='PROFILE'/>
                        </div>

                    </div>
                    {/*Content box*/}
                    <div className=''>

                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
