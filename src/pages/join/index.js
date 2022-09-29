import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Join() {
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
        <div className="w-screen h-full z-50 flex flex-col items-center justify-center my-8">
          <div className="text-primary text-5xl font-bold w-1/2 mb-4">
            Civtek Registration
          </div>
          <div className="w-1/2 h-full bg-white rounded-2xl p-8">
            <form>
              <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium text-primary">Full Name</label>
                <input type="email" id="email" className="bg-gray-50 border text-dark text-sm rounded-lg block w-full p-2.5" placeholder="John Doe" required />
              </div>
              <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium text-primary">Email</label>
                <input type="email" id="email" className="bg-gray-50 border text-dark text-sm rounded-lg block w-full p-2.5" placeholder="name@civtek.dev" required />
              </div>
              <div className="mb-6 flex flex-row justify-between w-full">
                <div className="w-5/6">
                  <label for="university" className="block mb-2 text-sm font-medium text-primary">University</label>
                  <select id="university" className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg block w-full p-2.5 ">
                    <option>CUHK</option>
                    <option>HKUST</option>
                    <option>HKU</option>
                    <option>CityU</option>
                    <option>PolyU</option>
                    <option>HKBU</option>
                  </select>
                </div>
                <div>
                  <label for="years" className="block mb-2 text-sm font-medium text-primary">Year of study</label>
                  <select id="years" className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg block w-full p-2.5 ">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                  <label for="firstchoice" className="block mb-2 text-sm font-medium text-primary">1st Division Choice</label>
                  <select id="firstchoice" className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg block w-full p-2.5 ">
                    <option>Software Development</option>
                    <option>Data Science</option>
                    <option>External Affairs</option>
                    <option>Creative</option>
                    <option>Event and Community</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label for="secondchoice" className="block mb-2 text-sm font-medium text-primary">2nd Division Choice</label>
                  <select id="secondchoice" className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg block w-full p-2.5 ">
                    <option>Software Development</option>
                    <option>Data Science</option>
                    <option>External Affairs</option>
                    <option>Creative</option>
                    <option>Event and Community</option>
                  </select>
                </div>
              <div className="mb-6">
                <label for="message" className="block mb-2 text-sm font-medium text-primary">Why civtek?</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full border text-sm text-dark bg-gray-50 rounded-lg" placeholder="Explain why do you want to join civtek..."></textarea>
              </div>

              <div className="mb-6">
                <label for="message" className="block mb-2 text-sm font-medium text-primary">Summarise your goal in the next three years, what’ve you’ve done to accomplish it...</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full border text-sm text-dark bg-gray-50 rounded-lg" placeholder="Describe your current goals and what have you done to achieve it..."></textarea>
              </div>

              <div className="mb-6">
                <label for="message" className="block mb-2 text-sm font-medium text-primary">Do you have any other ongoing commitments(e.g. exchange, internship, other organization.)? If yes, please explain...</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full border text-sm text-dark bg-gray-50 rounded-lg" placeholder="Describe your other commitments..."></textarea>
              </div>

              <div className="mb-6">
                <label className="lock mb-2 text-sm font-medium text-primary rounded-lg" for="cv">Upload your CV here</label>
                <input className="block w-full text-sm text-dark bg-gray-50 rounded-lg border border-gray-300 cursor-pointer " aria-describedby="cv" id="cv" type="file"/>
              </div>
              <button type="submit" className="text-white bg-dark hover:bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
