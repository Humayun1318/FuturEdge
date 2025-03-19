import Banner from "../../components/Header/Banner";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useContext , useState} from "react";
import { FDataContext } from "../../context/Context"
import USPCard  from "../../components/USPCard/USPCard"



const Home = () => {
  const USPCardData = useContext(FDataContext);
  
  const [UniquePCards, setUniquePCards] = useState(USPCardData?.data?.USP.slice(0, 4) || [])
  
  // console.log(UniquePCards);
  // console.log(USPCardData);

  const handleUSP = () => {
    const UCard = USPCardData?.data?.USP;
    console.log(UCard);
    setUniquePCards([...UCard])
  }

  return (
    <div className="">
      
      {/* Home Banner */}
      <section className="bg-[#244135]">
        <div className="px-6 pt-4 pb-16">
          <Banner></Banner>
        </div>
      </section>

      <section className="mt-16 w-11/12 mx-auto border">
        <div className="flex justify-between items-center mb-20 gap-4">
          <h2 className="text-2xl lg:text-3xl font-lora-heading font-medium ">Our Unique <br />Selling Points </h2>
          <div className="">
            <p className="text-sm text-gray-800 mb-4">
              Personalized guidance tailored to your unique strengths and goals,<br /> ensuring a customized approach to career success.
            </p>
            <button className="text-base font-medium text-gray-500 font-poppins-specialEle cursor-pointer"
              onClick={()=>handleUSP()}
            >
              Explore All Points
              <MdKeyboardDoubleArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </div>

        <div className={`${UniquePCards.length > 4 ? "lg:grid-cols-4 " : " lg:grid-cols-3 "} grid sm:grid-cols-2 gap-6`}>
          {
            UniquePCards.map((SCard) => <USPCard
              key={SCard.id}
              SCard={SCard}
            >
              
            </USPCard>)
          }
        </div>
      </section>


    </div>
  );
};

export default Home;