import { Icon } from '@iconify/react/dist/iconify.js';
import './About.css'

function About() {

    return <>
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
            <div className="max-w-5xl mx-auto p-10 lg:p-20 space-y-12 text-center">
                {/* Fancy heading */}
                <h1 className="text-5xl lg:text-6xl font-extrabold text-indigo-400 tracking-widest animate-pulse">
                    About Me
                </h1>

                {/* Image Section */}
                <div className="relative w-64 h-64 mx-auto">
                    <img
                        src="/Sazid.png"
                        alt="Centered"
                        className="absolute inset-0 w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="border-container">
                            <div className="border-wrapper animate-rotate">
                                <div className="icon top-1 left-1 text-3xl">
                                    <Icon icon="devicon:react" />
                                </div>
                                <div className="icon top-1 right-1 text-3xl">
                                    <Icon icon="devicon:nodejs" />
                                </div>
                                <div className="icon bottom-1 left-1 text-3xl">
                                    <Icon icon="devicon:javascript" />
                                </div>
                                <div className="icon bottom-1 right-1 text-3xl">
                                    <Icon icon="devicon:mongodb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Intro Section */}
                <div className="space-y-4">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Hello, {"I'm"} <span className="text-indigo-400 font-bold">Sazid</span>, a passionate MERN stack developer with a knack for blending creativity and technology to build extraordinary web applications. My goal is to bring a sprinkle of magic into every project I work on!
                    </p>
                </div>

                {/* Skills Section */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-indigo-300 underline decoration-dashed decoration-indigo-400">
                        My Magical Skills
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        I specialize in the MERN stack, where I weave magic into every line of code! With HTML, CSS, and Tailwind CSS as my enchanted tools, I create spellbinding, responsive interfaces. My expertise in JavaScript and React allows me to summon dynamic, interactive single-page applications that captivate users with fluidity and charm.

                        On the backend, I wield the powers of Node.js, Express.js, and MongoDB to craft powerful, scalable solutions, while Firebase adds a touch of real-time magic to my projects. Each application I create is infused with creativity, ensuring that every user experience feels like pure enchantment. Let’s create something truly magical together!
                    </p>
                </div>

                {/* Fancy Divider */}
                <div className="relative flex justify-center">
                    <div className="absolute w-1/2 border-t border-indigo-400 opacity-50"></div>
                    <div className="px-4 bg-gray-800 text-lg text-indigo-400 z-10">
                        ⚡ Crafting Magic with Code ⚡
                    </div>
                </div>

                {/* Mission Section */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold text-indigo-300 underline decoration-wavy decoration-indigo-500">
                        My Mission
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        My mission is to collaborate with passionate businesses and individuals, bringing their ideas to life with modern, responsive, and captivating web solutions. Together, we can turn dreams into digital reality!
                    </p>
                </div>

                {/* Call to Action */}
                <div>
                    <p className="text-xl font-semibold text-indigo-400">
                        Let’s create something magical together!
                    </p>
                    <a target='_blank'
                        href="https://www.linkedin.com/in/sazidbinmostafa/"
                        className="inline-block mt-6 px-6 py-3 rounded-lg text-lg bg-indigo-500 hover:bg-indigo-600 transition duration-300 shadow-lg"
                    >
                        {"Let's Get Connected"}
                    </a>
                </div>
            </div>
        </section>
    </>
}

export default About;