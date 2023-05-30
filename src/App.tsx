import { Accordion } from "./components/Accordion";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";

export const App = () => {
  return (
    <>
      <Header />
      <div className="bg-bm-blue rounded-l-full absolute w-[80%] top-[20%] right-0 h-[25%] -z-10 overflow-x-hidden lap:w-[40%] lap:top-[320px] lap:right-0 lap:h-[42%]"></div>
      <main className="px-8 m-auto w-full lap:max-w-[1464px]">
        <section className="mb-32 mt-32 lap:mt-0 lap:flex lap:flex-row-reverse lap:items-center lap:justify-between">
          <div className="relative inline-block lap:w-full">
            <img className="lap:w-full" src="/illustration-hero.svg" alt="" />
          </div>
          <div className="text-center lap:text-start  lap:w-full">
            <h2 className="text-3xl font-medium mt-12 lap:text-5xl lap:w-[80%]">
              A Simple Bookmark Manager
            </h2>
            <p className="opacity-50 mt-8 lap:w-[80%]">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex justify-around mt-8 lap:justify-start">
              <button className="bg-bm-blue p-3 text-sm lap:text-base rounded-md text-white font-medium drop-shadow-md border-2 border-bm-blue lap:mr-6 hover:bg-white hover:text-bm-blue transition ease-out duration-200">
                Get it on Chrome
              </button>
              <button className="bg-slate-100 p-3 text-sm lap:text-base rounded-md text-bm-blue border-2 border-slate-100 font-medium drop-shadow-md hover:bg-white hover:text-gray-600 hover:border-gray-600 transition ease-out duration-200">
                Get it on Firefox
              </button>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center items-center mb-32 lap:mb-56">
          <h2 className="text-2xl mb-4 font-medium text-center lap:mb-6 lap:text-4xl">
            Feautures
          </h2>
          <p className="opacity-50 text-center mb-8 lap:mb-10 lap:w-1/3">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>

          <div className="bg-bm-blue rounded-r-full absolute w-[100%] top-[58%] right-[30%] h-[22%] -z-10 overflow-x-hidden lap:w-[100%] lap:top-[60%] lap:right-[68%] lap:h-[38%]"></div>
          <Tabs />
        </section>

        <section className="flex flex-col justify-center items-center mb-32">
          <h2 className="text-2xl font-medium text-center lap:mb-6 lap:text-4xl">
            Download the extension
          </h2>
          <p className="opacity-50 text-center mb-12 lap:mb-16 lap:w-1/3 ">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>

          <Card />
        </section>

        <section className="flex flex-col justify-center items-center mb-32 lap:w-2/5 lap:m-auto">
          <h2 className="text-2xl font-medium text-center mb-6 lap:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="opacity-50 text-center mb-10">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>

          <Accordion />

          <button className="bg-bm-blue p-4 mt-12 rounded-md text-white font-medium drop-shadow-md">
            More Info
          </button>
        </section>
      </main>

      <section className="bg-bm-blue py-14 lap:py-24 px-8 text-center lap:mt-32 lap:m-auto">
        <div className="">
          <p className="text-white uppercase text-sm tracking-[4px] mb-2">
            35,000+ Already Joined
          </p>
          <h2 className="text-white text-2xl font-medium mb-8 lap:mb-6">
            Stay up-to-date with what we're doing
          </h2>
        </div>

        <form
          action=""
          id="form"
          className="flex flex-col lap:flex-row lap:justify-center lap:items-center"
        >
          <input
            className="p-4 rounded-md border-2 border-white lap:w-[320px]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
          {/* <p className="bg-red-500 text-white h-[200px] font-medium rounded-b-md text-xs italic p-2 text-start">Whoops, make sure it's a correct email</p> */}
          <button
            className="bg-bm-red p-4 mt-6 lap:mt-0 lap:ml-4 rounded-md text-white font-medium drop-shadow-md border-bm-red border-2 hover:bg-white hover:text-bm-red transition duration-200 ease-in-out"
            type="submit"
          >
            Contact Us
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};
