import { FaArrowRightLong } from "react-icons/fa6";
import bannerJpg from '../../assets/banner.jpg';
const Banner = () => {
  return (
    <div className='bg-[#e9f3f0] rounded-2xl'>
      <section className='w-11/12 mx-auto py-24'>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="space-y-4">
            <h3>#1 PORTAL FUTUREDGE</h3>
            <h1 className="font-lora-heading text-3xl lg:text-5xl font-extrabold">Shaping Your Future, One Step Ahead.</h1>
            <p className="text-gray-500 text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem repellendus eligendi illum incidunt ex sunt beatae magni temporibus excepturi placeat?</p>

            <button className="flex items-center gap-2 
          bg-[#244135] p-3 font-poppins-specialEle text-lg font-bold text-white rounded-2xl cursor-pointer">Get Started
              <span><FaArrowRightLong></FaArrowRightLong></span></button>
            <p className="text-gray-600"><span className="text-lg font-semibold">FuturEdge:</span> Nurturing Your Potential, Shaping Your Future</p>
          </div>

          <div className="w-full h-full ">
            <img src={bannerJpg} alt="" className="w-full h-full object-cover rounded-2xl"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;