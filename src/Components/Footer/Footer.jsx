import { Icon } from '@iconify/react';

function Footer() {

    return <>
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
                    {/* Logo and description */}
                    <div className="flex flex-col items-center lg:items-start space-y-4">
                        <h2 className="text-3xl text-indigo-400 font-bold">Web Hero</h2>
                        <p className="text-center lg:text-left">
                            Crafting magical web experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 text-center lg:text-left">
                        <h3 className="text-xl text-indigo-400 font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="hover:text-indigo-400 transition duration-300">
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-indigo-400 transition duration-300">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-indigo-400 transition duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-indigo-400 transition duration-300">
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="space-y-4">
                        <h3 className="text-xl text-indigo-400 font-semibold">Follow Me</h3>
                        <div className="flex space-x-6 justify-center lg:justify-start">
                            <a href="https://www.linkedin.com/in/sazidbinmostafa/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-400 transition duration-300">
                                <Icon icon="devicon:linkedin" />
                            </a>
                            <a href="https://github.com/SazidBinMostafa" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-400 transition duration-300">
                                <Icon icon="devicon:github-wordmark" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61565202300956" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-400 transition duration-300">
                                <Icon icon="devicon:facebook" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Web Hero. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;