import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "../../components/Navbar";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useState } from "react";

export default function Join() {
  const router = useRouter()
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const [loading, setLoading ] = useState(false)

  const [fullname, setFullname ] = useState("")
  const [email, setEmail ] = useState("")
  const [university, setUniversity ] = useState("CUHK")
  const [year, setYear ] = useState(1)
  const [firstchoice, setFirstChoice ] = useState("")
  const [secondchoice, setSecondChoice ] = useState("")
  const [firstquestion, setFirstQuestion ] = useState("")
  const [secondquestion, setSecondQuestion ] = useState("")
  const [commitments, setCommitments ] = useState("")
  const [file, setFile ] = useState("")

  const fullnameHandler = e => {
    setFullname(e.target.value)
  }

  const emailHandler = e => {
    setEmail(e.target.value)
  }

  const yearHandler = e => {
    setYear(e.target.value)
  }

  const universityHandler = e => {
    setUniversity(e.target.value)
  }

  const firstChoiceHandler = e => {
    setFirstChoice(e.target.value)
  }

  const secondChoiceHandler = e => {
    setSecondChoice(e.target.value)
  }
  
  const firstQuestionHandler = e => {
    setFirstQuestion(e.target.value)
  }

  const secondQuestionHandler = e => {
    setSecondQuestion(e.target.value)
  }

  const commitmentsHandler = e => {
    setCommitments(e.target.value)
  }

  const fileHandler = e => {
    setFile(e.target.files[0])
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    const url = "https://api.civtek.dev/api/applicants"
    const data = {}
    const formData = new FormData()

    data["fullname"] = fullname,
    data["email"] = email,
    data["university"] = university,
    data["year"] = year,
    data["firstchoice"] = firstchoice,
    data["secondchoice"] = secondchoice,
    data["firstquestion"] = firstquestion,
    data["secondquestion"] = secondquestion,
    data["commitments"] = commitments

    formData.append('files.resume', file, file.name)
    formData.append('data', JSON.stringify(data))

    setLoading(true)
    await fetch(url, { method: "POST", body: formData })
    setLoading(false)
    await router.push('/complete')

  }

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
          <div className="text-primary text-4xl sm:text-5xl font-semibold w-3/4 sm:w-1/2 mb-20 text-center">
            <span className="text-white">Join our team</span> @ Civtek HQ !
          </div>
          <div className="w-3/4 sm:w-1/2 h-full border-2 border-primary p-8">
            <form onSubmit={submitHandler}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  value={fullname} onChange={fullnameHandler}
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
                  value={email} onChange={emailHandler}
                  type="text"
                  id="email"
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5"
                  placeholder="name@civtek.dev"
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
                    value={university} onChange={universityHandler}
                    id="university"
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
                    value={year} onChange={yearHandler}
                    id="years"
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
              <div className="mb-6">
                <label
                  htmlFor="firstchoice"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  1st Division Choice
                </label>
                <select
                  value={firstchoice} onChange={firstChoiceHandler}
                  id="firstchoice"
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5 "
                >
                  <option className="bg-dark">First Choice</option>
                  <option className="bg-dark">Software Development</option>
                  <option className="bg-dark">Data Science & AI</option>
                  <option className="bg-dark">Product Design</option>
                  <option className="bg-dark">External Affairs</option>
                  <option className="bg-dark">Event & Community</option>
                  <option className="bg-dark">Content Creation</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="secondchoice"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  2nd Division Choice
                </label>
                <select
                  value={secondchoice} onChange={secondChoiceHandler}
                  id="secondchoice"
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5 "
                >
                  <option className="bg-dark">Second Choice</option>
                  <option className="bg-dark">Software Development</option>
                  <option className="bg-dark">Data Science & AI</option>
                  <option className="bg-dark">Product Design</option>
                  <option className="bg-dark">External Affairs</option>
                  <option className="bg-dark">Event & Community</option>
                  <option className="bg-dark">Content Creation</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Why civtek?
                </label>
                <textarea
                  value={firstquestion} onChange={firstQuestionHandler}
                  id="message"
                  rows="6"
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5"
                  placeholder="Explain why you want to join civtek..."
                ></textarea>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Summarize your goal in the next three years, and what you’ve
                  done to accomplish it
                </label>
                <textarea
                  value={secondquestion} onChange={secondQuestionHandler}
                  id="message"
                  rows="6"
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5"
                  placeholder="Describe your current goals and what you have done to achieve them..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-medium text-white"
                >
                  Do you have any other ongoing commitments (e.g. exchange,
                  internship, other organizations, etc.)?
                </label>
                <textarea
                  value={commitments} onChange={commitmentsHandler}
                  id="message"
                  rows="6"
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5"
                  placeholder="Describe your other commitments..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label
                  className="lock mb-2 text-lg font-medium text-white"
                  htmlFor="cv"
                >
                  Upload your CV here (.pdf)
                </label>
                <input
                  onChange={fileHandler}
                  className="bg-transparent focus:outline-none border-2 border-primary text-white text-lg font-medium block w-full p-2.5"
                  aria-describedby="cv"
                  id="cv"
                  type="file"
                />
              </div>
              {
                !loading ? (
                  <button
                    type="submit"
                    className="text-white transition-all delay-100 ease-in-out duration-500 bg-dark hover:bg-primary hover:text-black border-2 border-primary font-medium text-lg w-full sm:w-auto px-5 py-2.5 text-center mt-10"
                  >
                    <div className="lg:w-20">
                      Submit
                    </div>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="text-white group transition-all delay-100 ease-in-out duration-500 bg-dark hover:bg-primary hover:text-black border-2 border-primary font-medium text-lg w-full sm:w-auto px-5 py-2.5 text-center mt-10"
                  >
                    <div className="flex flex-col items-center justify-center lg:w-20">
                      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-primary transition-all delay-100 ease-in-out duration-100 group-hover:border-black"></div>
                    </div>
                  </button>
                )
              }
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
