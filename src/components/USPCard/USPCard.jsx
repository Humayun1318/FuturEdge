import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const USPCard = ({ SCard }) => {
 


  return (
    <div className="bg-[#e9f3f0] p-8 rounded-xl flex flex-col justify-between gap-4">
      <p className="w-16 h-16">
        <img src={`${SCard?.icon}`} alt={SCard?.title}className="w-full h-full object-cover text-white"/>
      </p>

      <h3 className="my- font-lora-heading text-lg font-medium">{SCard?.title}</h3>
      
      <Link className="text-md text-xs text-gray-500"
       to={`usp-details/${SCard.id}`}
      >Read more
        <MdKeyboardDoubleArrowRight className="inline-block ml-3" />
      </Link>
    </div>
  );
};

export default USPCard;