import { Baseet, Star } from "../ui/Icons";

function Header() {
  return (
    <>
      <div className="relative h-36 flex justify-center items-center">
        {/* Baseet icons */}
        <Baseet
          width={100}
          height={100}
          className="absolute top-4 left-[-35px] sm:top-6 sm:left-[-45px]"
        />
        <Baseet
          width={100}
          height={100}
          className="absolute bottom-4 right-[-35px] sm:bottom-6 sm:right-[-45px]"
        />

        {/* Header nav */}
        <nav className="relative w-full max-w-[95%] sm:max-w-[490px] border-4 border-black h-12 sm:h-16 font-bold capitalize bg-white flex text-xs xs:text-sm sm:text-lg md:text-xl shadow-xl">
          {/* Corner squares */}
          <div className="absolute top-[-6px] left-[-6px] w-2.5 h-2.5 sm:w-4 sm:h-4 bg-white border-4 border-black" />
          <div className="absolute top-[-6px] right-[-6px] w-2.5 h-2.5 sm:w-4 sm:h-4 bg-white border-4 border-black" />
          <div className="absolute bottom-[-6px] left-[-6px] w-2.5 h-2.5 sm:w-4 sm:h-4 bg-white border-4 border-black" />
          <div className="absolute bottom-[-6px] right-[-6px] w-2.5 h-2.5 sm:w-4 sm:h-4 bg-white border-4 border-black" />

          {/* Logo section */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 border-r-4 border-black w-30">
            <Star className="w-4 h-4 sm:w-6 sm:h-6" />
            <span>Znis</span>
          </div>

          {/* Links */}
          <div className="flex-1 flex justify-around items-center text-[10px] xs:text-xs sm:text-base ">
            <span className="w-full border-r-4 border-black h-full flex items-center justify-center">
              About//
            </span>
            <span className="w-full border-r-4 border-black h-full flex items-center justify-center">
              Portfolio
            </span>
            <span className="w-full h-full flex items-center justify-center">
              Hire Me
            </span>
          </div>
        </nav>
      </div>

      <hr className="border-black border-b-4 sm:border-b-5" />
    </>
  );
}

export default Header;
