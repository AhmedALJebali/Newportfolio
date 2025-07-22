import { ExternalLink } from "lucide-react";

const PortfolioCard = ({
  title = "Portfolio design",
  image = "/path/to/default-image.jpg",
  description = "UI design - User research - webflow develop",
  link = "#",
}) => {
  return (
    <div className="border-[3px] border-black relative p-4 sm:p-6 bg-white w-full mx-auto">
      {/* Custom corner borders */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-black -translate-x-2 -translate-y-2" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-black translate-x-2 -translate-y-2" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-black -translate-x-2 translate-y-2" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-black translate-x-2 translate-y-2" />

      {/* Image */}
      <div className="border-[2px] border-black w-full aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="mt-4">
        <h2 className="text-2xl sm:text-4xl text-black font-bold flex justify-between items-center">
          {title}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-1 w-8 h-8 sm:w-10 sm:h-10 shadow-black shadow-md flex justify-center items-center"
          >
            <ExternalLink className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </h2>
        <p className="text-black mt-2 text-sm sm:text-xl leading-relaxed w-[40%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
