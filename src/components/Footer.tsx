import IonIcon from "@reacticons/ionicons";

export const Footer = () => {
  return (
    <footer className="bg-blue-950 py-10 px-8 m-auto w-full">
      <div className="flex flex-col justify-center m-auto lap:justify-between lap:items-center lap:flex-row lap:max-w-[1464px]">
        <div className="m-auto lap:flex lap:items-center">
          <img
            className="fill-white mb-12 lap:mb-0 lap:w-[50%] lap:mr-14"
            src="/logo-footer.svg"
            alt=""
          />

          <ul className="text-center lap:flex lap:flex-row">
            <li className="mb-8 lap:mb-0 lap:mr-8">
              <a className="text-white uppercase tracking-[4px] text-sm hover:text-bm-red transition duration-200 ease-in-out" href="">
                Features
              </a>
            </li>
            <li className="mb-8 lap:mb-0 lap:mr-8">
              <a className="text-white uppercase tracking-[4px] text-sm hover:text-bm-red transition duration-200 ease-in-out" href="">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-white uppercase tracking-[4px] text-sm hover:text-bm-red transition duration-200 ease-in-out" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="m-auto mt-12 lap:mt-0">
          <a href="#" className="">
            <IonIcon
              className="text-white text-2xl mr-6 hover:text-bm-red transition duration-200 ease-in-out"
              name="logo-facebook"
            />
          </a>

          <a href="#">
            <IonIcon className="text-white text-2xl hover:text-bm-red transition duration-200 ease-in-out" name="logo-twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};
