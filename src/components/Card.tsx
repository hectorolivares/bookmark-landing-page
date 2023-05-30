interface CardItem {
  image: string;
  browser: string;
  version: number;
}

export const Card = () => {

  const cards: CardItem[] = [
    {
      image: "logo-chrome.svg",
      browser: "Chrome",
      version: 62,
    },
    {
      image: "logo-firefox.svg",
      browser: "Firefox",
      version: 55,
    },
    {
      image: "logo-opera.svg",
      browser: "Opera",
      version: 46,
    },
  ];

  return (
    <div className="lap:w-3/4 lap:flex lap:justify-between">
      {cards.map(( card, index ) => (
        <div
          key={index}
          className="bg-slate-50 w-[300px] h-[400px] rounded-2xl drop-shadow-lg flex flex-col items-center justify-between p-6 mb-16 last:mb-0"
        >
          <div className="flex flex-col items-center">
            <img className="my-8" src={`/${ card.image }`} alt="" />
            <h3 className="text-xl font-medium">Add To { card.browser }</h3>
            <p className="mt-2 opacity-50">Minimum version { card.version }</p>
          </div>
          <img className="absolute top-[73%]" src="bg-dots.svg" alt="" />
          <button className="bg-bm-blue w-full p-4 rounded-md text-white font-medium drop-shadow-md border-2 border-bm-blue  hover:bg-white hover:text-bm-blue transition ease-out duration-200">
            Add & install Extension
          </button>
        </div>
      ))}
    </div>
  );
};
