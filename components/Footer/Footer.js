import React from "react";
import Newsletter from "./Newsletter";
import Signature from "./Signature";
import Social from "./Social";
import MainFooter from "./MainFooter";
const style = {
  wrapper: "bg-[#] pt-24  ",
};

const Footer = () => {
  return (
    <div className="flex  justify-end items-end w-[90%] mx-auto">
      {/* fire1 */}
      <img
        src="https://res.cloudinary.com/shariqcloud/image/upload/v1656325697/Power%20Rangers/fire_zhfuhk.webp"
        alt=""
        srcset=""
        className="hidden lg:flex"
      />
      <div className={style.wrapper}>
        <div className={style.main}>
          <MainFooter />
        </div>
        <div className={style.social}>
          <Social />
        </div>
        <div className={style.signature}>
          <Signature />
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/shariqcloud/image/upload/v1656325697/Power%20Rangers/fire_zhfuhk.webp"
        alt=""
        srcset=""
        className="hidden lg:flex"
      />
    </div>
  );
};

export default Footer;