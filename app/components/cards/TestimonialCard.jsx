const TestimonialCard = ({
  testimonial,
  name,
  title,
  company,
  imageSrc,
  index,
}) => {
  return (
    <div className={`relative rotate-[358deg]`}>
      <div className="bg-white border-black border-4 shadow-sm rounded-lg p-4 sm:p-6 flex flex-col space-y-4 relative z-10">
        {/* Testimonial Text */}
        <p className="text-2xl text-black leading-relaxed">"{testimonial}"</p>

        {/* Avatar & Info */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Avatar */}
          <img
            src={imageSrc}
            alt={name}
            className="w-[60px] h-[60px] border-black border-2 rounded-full object-cover"
          />

          {/* Client Info */}
          <div>
            <p className="text-xl font-bold text-black">{name}</p>
            <p className="text-base text-black">
              {title}, {company}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-[-12px] h-6 bg-black z-0 origin-top-left -skew-x-6 rounded-b-lg opacity-10" />
    </div>
  );
};

export default TestimonialCard;
