import { NextPage } from "next"

const About: NextPage = () => {
  return <div className="text-gray-600 body-font">
    <div className="container mx-auto flex p-7 md:py-24 md:flex-row flex-col items-center">
      <div className="mb-10 md:mb-0">
        <img className="object-cover object-center rounded-full h-72 w-72 md:h-96 md:w-96" alt="obi-wan" src="/images/obi-wan.png" />
      </div>
      <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center md:mx-20 text-xl">
        <h1 className="font-bold text-4xl md:text-7xl text-center md:text-left mb-8 md:mb-10">
          I am not the <span className="text-blue-500">Obi-wan</span> you are looking for
				</h1>
        <p className="mb-8 leading-relaxed">Hello there. I am not a legendary Jedi Master who served on the Jedi High Council during the final years of the Republic Era. I also did not serve in the Grand Army of the Republic that fought against the Separatist Droid Army during the Clone Wars.</p>
      </div>
    </div>
  </div>
}

export default About
