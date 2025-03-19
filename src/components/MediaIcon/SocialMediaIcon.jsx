import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const SocialMediaIcon = () => {
  return (
    <div className=" mt-6 ">
      <ul className="flex gap-4 text-3xl justify-center lg:justify-normal ">
        <li className="rounded-full bg-[#61746e42]"><a href="" className="">
          <CiFacebook className="" ></CiFacebook>
        </a></li>
        <li className="rounded-full "><a href="">
          <AiFillTwitterCircle className=""></AiFillTwitterCircle>
        </a></li>
        <li className="rounded-full bg-[#61746e42]"><a href="">
          <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
        </a></li>
      </ul>
    </div>
  );
};

export default SocialMediaIcon;