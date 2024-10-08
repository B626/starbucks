import logo from "/public/Logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="mn:pt-[20px] mn:pb-[20px] mn:absolute mn:w-[100%]">
      <div className="max-w-[1350px] mt-0 mb-0 ml-[auto] mr-[auto] pl-[15px] pr-[15px]">
        <div className="flex gap-[52px] items-center mn:gap-[25px]">
          <Link to="/" className="cursor-pointer relative z-[5]">
            <img src={logo} alt="" className="mn:w-[50px]" />
          </Link>
          <nav>
            <ul className="flex gap-[34px] mn:gap-[17px]">
              <li>
                <Link
                  className="text-[15px] text-[#fff] mn:text-[13px] 2sm:text-[15px] relative z-[3] hover:underline"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] text-[#fff] mn:text-[13px] 2sm:text-[15px] relative z-[3] hover:underline"
                  to="/"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] text-[#fff] mn:text-[13px] 2sm:text-[15px] relative z-[3] hover:underline"
                  to="/"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-[15px] text-[#fff] mn:text-[13px] 2sm:text-[15px] relative z-[3] hover:underline"
                  to="/"
                >
                  Giftcards
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
