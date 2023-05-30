import { useState } from "react";

interface TabItem {
  title: string;
  content: {
    title: string;
    description: string;
    image: string;
  };
}

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs: TabItem[] = [
    {
      title: "Simple Bookmarking",
      content: {
        title: "Bookmark in one click",
        description:
          "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        image: "illustration-features-tab-1.svg",
      },
    },
    {
      title: "Speedy Searching",
      content: {
        title: "Intelligent search",
        description:
          "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        image: "illustration-features-tab-2.svg",
      },
    },
    {
      title: "Easy Sharing",
      content: {
        title: "Share your bookmarks",
        description:
          "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        image: "illustration-features-tab-3.svg",
      },
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center m-auto lap:flex lap:w-1/2 lap:justify-between lap:items-center">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item text-lg py-4 border-b-2 w-full lap:mb-5 ${
              index === activeTab
                ? "active border-b-4 border-bm-red"
                : "border-b-4"
            }`}
            onClick={() => handleTabClick(index)}
          >
            <h3
              className={`cursor-pointer hover:text-bm-red hover:opacity-100 transition duration-200 ease-in-out ${
                index === activeTab ? "opacity-100" : "opacity-50"
              }`}
            >
              {tab.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center lap:text-start lap:place-items-center lap:grid lap:grid-cols-2 lap:gap-32 lap:h-full lap:min-h-[500px]">
        <img
          className="lap:w-full lap:max-w-[80%] justify-self-end"
          src={`${tabs[activeTab].content.image}`}
          alt=""
        />
        <div className="w-full lap:flex lap:flex-col lap:justify-center">
          <h2 className="text-2xl font-medium mt-12 lap:mt-0 lap:text-4xl">
            {tabs[activeTab].content.title}
          </h2>
          <p className="opacity-50 mt-3">
            {tabs[activeTab].content.description}
          </p>
        </div>
      </div>
    </div>
  );
};
