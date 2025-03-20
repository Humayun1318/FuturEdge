import Banner from "../../components/Header/Banner";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useContext, useState } from "react";
import { FDataContext } from "../../context/Context"
import USPCard from "../../components/USPCard/USPCard"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
import SliderCard from "../../components/SliderCard/SliderCard";



const Home = () => {
  const fakeData = useContext(FDataContext);

  const [UniquePCards, setUniquePCards] = useState(fakeData?.data?.USP.slice(0, 5) || [])

  // console.log(UniquePCards);
  // console.log(USPCardData);

  const handleUSP = () => {
    const UCard = fakeData?.data?.USP;
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
      {/* Unique selling points */}
      <section className="relative top-48 w-11/12 mx-auto">
        <div className="flex justify-between items-center mb-20 gap-4">
          <h2 className="text-2xl lg:text-3xl font-lora-heading font-medium ">Our Unique <br />Selling Points </h2>
          <div className="">
            <p className="text-sm text-gray-800 mb-4">
              Personalized guidance tailored to your unique strengths and goals,<br /> ensuring a customized approach to career success.
            </p>
            <button className="text-base font-medium text-gray-500 font-poppins-specialEle cursor-pointer"
              onClick={() => handleUSP()}
            >
              Explore All Points
              <MdKeyboardDoubleArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </div>

        <div className={`${UniquePCards.length > 5 ? "lg:grid-cols-4 " : " lg:grid-cols-5 "} grid sm:grid-cols-2 gap-6`}>
          {
            UniquePCards.map((SCard) => <USPCard
              key={SCard.id}
              SCard={SCard}
            >

            </USPCard>)
          }
        </div>
      </section>

      {/* slider */}
      <section className="py-16 mt-48 bg-[#244135]  mx-6 rounded-2xl relative -bottom-52">
        <SliderCard></SliderCard>
      </section>

      {/*  Services */}
      <section className="pt-96 pb-32 border bg-[#e9f3f0]">
        <div className="w-11/12 mx-auto">
          <div className="text-center space-y-6">
            <h2 className="font-lora-heading text-2xl lg:text-4xl font-bold">Services Offered By FuturEdge</h2>
            <p className="text-base font-medium text-gray-600">Our expert advisors empower individual to make informed decisions and achieve success in their professional endeavors.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {
              fakeData?.data?.services.map(service => <ServiceCard
                key={service.id}
                service={service}
              ></ServiceCard>)
            }
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;