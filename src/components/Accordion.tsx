import { useState } from "react";
import IonIcon from "@reacticons/ionicons";

interface AccordionItem {
  title: string;
  content: string;
}

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const data: AccordionItem[] = [
    {
      title: "What is Bookmark?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      title: "How can I request a new browser?",
      content:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      title: "Is there a mobile app?",
      content:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      title: "What about other Chromium browsers?",
      content:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div className="border-b-2 py-5" key={index}>
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <h3 className="">{item.title}</h3>
            <IonIcon
              className={`spin-content text-2xl mr-6 ${
                activeIndex === index ? "text-red-500 active" : "text-blue-600"
              }`}
              name="chevron-down"
            />
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <p className="opacity-50 my-5 leading-loose">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
