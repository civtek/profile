import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        console.log("router query", router.query.scroll);
        if (router.query.scroll) {
            let elem = document.querySelector("#" + router.query.scroll);
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [router]);

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Head>
                <title>civtek</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="overflow-hidden h-full flex flex-col">
                <Navbar></Navbar>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#0E1012",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 40,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div className="h-full z-50 flex flex-col items-center justify-center mx-14 my-48 lg:my-20 lg:mx-20">
                    <div className="text-primary text-4xl sm:text-5xl font-semibold w-3/4 sm:w-1/2 mb-20 h-80 text-center rounded-xl flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-48 h-48 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        <h1 className="">Thank you for registering</h1>
                    </div>
                </div>
            </main>
        </div>
    );
}
