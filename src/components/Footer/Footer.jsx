

const Footer = () => {
  return (
    <div id="footer" className="my-24">
      {/* footer link */}
      <section className=" lg:flex justify-between space-y-6 lg:space-y-0">
        <div className="lg:w-[20%] text-center lg:text-start">
          <div className="flex items-center justify-center lg:justify-normal">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <rect width="32" height="32" fill="#244135" />
                <text x="4" y="24" font-family="Lora, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">FE</text>
              </svg>
            </h3>
            <h3>
              <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="35" font-family="Lora, sans-serif" font-size="30" font-weight="bold" fill="#244135">Futur</text>
                <text x="100" y="35" font-family="Lora, sans-serif" font-size="30" font-weight="bold" fill="#244135">Edge</text>
                <line x1="10" y1="40" x2="180" y2="40" stroke="#FFA500" stroke-width="3" />
              </svg>
            </h3>
          </div>
          <p className="font-roboto-body text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A vero placeat magni harum dolore ipsum ipsa? Rem, voluptatum distinctio! Aspernatur.</p>
        </div>
        <div className="lg:w-[70%] sm:grid sm:grid-cols-2 sm:gap-6  lg:flex lg:justify-between ">
          <div className="sm:text-center lg:text-start">
            <h3 className="font-lora-heading text-base font-semibold mb-3">About</h3>
            <ul className="text-md font-poppins-specialEle font-normal text-gray-500 space-y-2">
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className="sm:text-center lg:text-start">
            <h3 className="font-lora-heading text-base font-semibold mb-3">Pages</h3>
            <ul className="text-md font-poppins-specialEle font-normal text-gray-500 space-y-2">
              <li><a href="">Services</a></li>
              <li><a href="">Register</a></li>
              <li><a href="">Mission</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className="sm:text-center lg:text-start">
            <h3 className="font-lora-heading text-base font-semibold mb-3">Resources</h3>
            <ul className="text-md font-poppins-specialEle font-normal text-gray-500 space-y-2">
              <li><a href="">Get Consultancy</a></li>
              <li><a href="">Recruiters</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className="sm:text-center lg:text-start">
            <h3 className="font-lora-heading text-base font-semibold mb-3">Contact Us</h3>
            <ul className="text-md font-poppins-specialEle font-normal text-gray-500 space-y-2">
              <li><a href="">Social Media</a></li>
              <li><a href="">WhatsApp</a></li>
              <li><a href="">Email</a></li>
            </ul>
          </div>
        </div>
      </section>
      <div className="mt-24 mb-12">
        <hr className="text-gray-400" />
      </div>
      <div className="text-md font-poppins-specialEle font-normal text-gray-500 text-center lg:text-start lg:flex">
        <div className="flex-1 mb-4 lg:mb-0">
          <p>©️ 2025 All Right Reserved.</p>
        </div>
        <ul className="sm:flex sm:justify-around lg:justify-between flex-1 ">
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Term & Conditions</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;