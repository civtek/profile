import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useState } from "react";

export default function EventRegis() {
  const url = "https://api.civtek.dev/api/gatherings"
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [university, setUniversity] = useState("");
  const [year, setYear] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
        "fullname": fullName,
        "email": email,
        "number": number,
        "university": university, 
        "year": year,

    }

    console.log(data)
    // const data = {
    //   "fullname": "",
    //   "email": "",
    //   "number": "",
    //   "university": "23", 
    //   "year": "234",
    // }
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        "data": data
      })
    };
    try{
      const response = await fetch(url, requestOptions)
      console.log(response)
    } catch(err){
      console.log(err)
    }
  }

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
        <div className="w-screen h-full z-50 flex flex-col items-center justify-center my-20">
          <div className="text-primary text-4xl sm:text-5xl font-light w-3/4 sm:w-1/2 mb-7 text-center">
            <span className="text-white">Meet your fellow </span> techies!
          </div>
          <div className="text-white text-4xl sm:text-5xl font-semibold w-3/4 sm:w-1/2 mb-3 text-center">
            <span className="text-primary">Kick-off Gathering</span> @ Tamar
            Park, Admiralty
          </div>
          <div className="text-white text-4xl sm:text-5xl font-semibold w-3/4 sm:w-1/2 mb-20 text-center">
            October 8, 2022
          </div>
          <div className="w-3/4 sm:w-1/2 h-full border-2 border-primary p-8">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  onChange={(e) => {setFullName(e.target.value)}}
                  type="text"
                  id="email"
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5"
                  placeholder="name@civtek.dev"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => {setNumber(e.target.value)}}
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5"
                  placeholder="+85212345678"
                  required
                />
              </div>
              <div className="mb-6 flex flex-col sm:flex-row justify-between w-full">
                <div className="w-full sm:w-5/6 sm:mb-0 mb-6">
                  <label
                    htmlFor="university"
                    className="block mb-2 text-lg font-medium text-white"
                  >
                    University
                  </label>
                  <select
                    id="university"
                    onChange={(e) => {setUniversity(e.target.value)}}
                    className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5 "
                  >
                    <option className="bg-dark">CUHK</option>
                    <option className="bg-dark">HKUST</option>
                    <option className="bg-dark">HKU</option>
                    <option className="bg-dark">CityU</option>
                    <option className="bg-dark">PolyU</option>
                    <option className="bg-dark">HKBU</option>
                    <option className="bg-dark">Others</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="years"
                    className="block mb-2 text-lg font-medium text-white"
                  >
                    Year of study
                  </label>
                  <select
                    id="years"
                    onChange={(e) => {setYear(e.target.value)}}
                    className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5"
                  >
                    <option className="bg-dark">1</option>
                    <option className="bg-dark">2</option>
                    <option className="bg-dark">3</option>
                    <option className="bg-dark">4</option>
                    <option className="bg-dark">5</option>
                    <option className="bg-dark">6</option>
                  </select>
                </div>
              </div>

              <button
                className="text-white transition-all delay-100 ease-in-out duration-500 bg-dark hover:bg-primary hover:text-black border-2 border-primary font-medium text-lg w-full sm:w-auto px-5 py-2.5 text-center mt-10"
                onClick={(e) => {onSubmit(e)}}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
