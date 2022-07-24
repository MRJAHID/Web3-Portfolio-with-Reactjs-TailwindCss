import Spline from '@splinetool/react-spline';
import {useState} from 'react';
import {IoCodeWorking, IoMenu} from 'react-icons/io5';
import SCENE_OBJECT from './img/scene.spline';
import JAHID from './img/1584257810706.jpg';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Experience} from "./data";


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
                <section id='about' className='w-full flex flex-col md:flex-row gap-4 my-24'>
                    {/*image box*/}
                    <div className='w-full h-420 flex items-center justify-center '>
                        <div className='w-275 h-340 bg-emerald-200 rounded-md relative'>
                            <img src={JAHID}
                                 className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg'
                                 alt='PROFILE'/>
                        </div>

                    </div>
                    {/*Content box*/}
                    <div className='w-full h-420 flex flex-col items-center justify-center '>
                        <p className='text-lg text-textBase text-center'>
                            lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur
                            adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur
                            adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur
                            adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur
                        </p>

                        <button
                            className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                                <span
                                    className="w-full md:w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                  Download
                                </span>
                        </button>
                    </div>
                </section>

                {/*    Timeline  */}
                <section className='w-full flex items-center justify-center'>
                    <VerticalTimeline>
                        {
                            Experience && Experience.map(n => (
                                <VerticalTimelineElement
                                    key={n.id}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{background: 'rgb(21,24,31)', color: '#888'}}
                                    contentArrowStyle={{borderRight: '7px solid  rgb(21,24,31)'}}
                                    date={n.date}
                                    iconStyle={{background: 'rgb(21,24,31)', color: '#888'}}
                                    icon={<IoCodeWorking/>}
                                >
                                    <h3 className="vertical-timeline-element-title">
                                        {n.title}
                                    </h3>
                                    <h4 className="vertical-timeline-element-subtitle">
                                        {n.location}</h4>
                                    <p>
                                        {n.description}
                                    </p>
                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </section>
            </main>
        </div>
    );
}

export default App;
