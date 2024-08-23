import { Link } from "react-router-dom";
import prev1 from "/public/hero/previews/1.png";
import prev2 from "/public/hero/previews/2.png";
import prev3 from "/public/hero/previews/3.png";

import img1 from "/public/hero/1.png";
import img2 from "/public/hero/2.png";
import img3 from "/public/hero/3.png";

import arrowLeft from "/public/icons/arrow-left.svg"
import arrowRight from "/public/icons/arrow-right.svg";


export const Hero = () => {
   return (
     <section className="relative h-[100vh] mn:pt-[100px] md:pt-[150px]">
       <div className="max-w-[1350px] mt-0 mb-0 ml-[auto] mr-[auto] pl-[15px] pr-[15px] 2md:flex justify-between">
         <div>
           <div>
             <h2
               className="mn:text-[#41CA90] uppercase font-[700] mn:text-[30px] mn:leading-[100%] mn:mb-[5px]
             2sm:text-[35px] 3sm:text-[40px] md:text-[50px]"
             >
               Tired?
             </h2>
             <h1
               className="mn:text-[#fff] uppercase font-[800] mn:text-[35px] mn:leading-[100%] mn:mb-[15px] 2sm:text-[45px]
             3sm:text-[50px] md:text-[75px] 2md:text-[85px]"
             >
               Drink coffee!
             </h1>
             <p className="text-[#DBDBDB] mn:mb-[30px] md:w-[532px]">
               Coffee isn't just a drink—it's a ritual, a break from the rush of
               life. Each cup brings a moment of warmth and comfort.
             </p>
             <Link
               className="text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] 
             inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px]
             3sm:text-[24px]"
             >
               Order now
             </Link>
           </div>
           <div
             className="flex mn:flex-col mn:gap-[15px] mn:grid mn:grid-cols-[repeat(2,60px)] mn:grid-rows-[repeat(2,60px)]
           2sm:grid-cols-[repeat(2,80px)] 2sm:grid-rows-[repeat(2,80px)] 3sm:grid-cols-[repeat(3,167px)] 3sm:grid-rows-[repeat(1,100px)]"
           >
             <div
               className="bg-[#33483C] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#43544B] 
             2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[40px]"
             >
               <img
                 src={prev1}
                 className="mn:h-[40px] 3sm:h-[60px] 2md:h-[150px]"
                 alt=""
               />
             </div>
             <div
               className="bg-[#33483C] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#43544B]
             2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[40px]"
             >
               <img
                 src={prev2}
                 className="mn:h-[40px] 3sm:h-[60px] 2md:h-[150px]"
                 alt=""
               />
             </div>
             <div
               className="bg-[#33483C] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#43544B]
             2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[40px]"
             >
               <img
                 src={prev3}
                 className="mn:h-[40px] 3sm:h-[60px] 2md:h-[150px]"
                 alt=""
               />
             </div>
           </div>
         </div>
         <div className="w-[100%]">
           <img
             src={img1}
             alt=""
             className="absolute mn:bottom-[40px] z-[3] mn:h-[290px] right-[0px] right-[0px] 2sm:h-[350px]
             2md:h-[500px] 2md:right-[130px] 2md:top-[70%] 2md:translate-y-[-70%] l:right-[260px]"
           />
           <div
             className="bg-[#23AC72] rounded-t-[30px] absolute bottom-0 left-0 w-[100%] h-[90px] 2md:right-[0px] 2md:top-[0px]
           2md:h-[100vh] 2md:w-[300px] 2md:left-[auto] 2md:rounded-l-[110px] l:w-[404px]"
           >
             <p
               className="uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center
             md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name 2md:top-[0px] 2md:z-[3] 2md:text-[70px]
             2md:right-[50px]"
             >
               Cappuccino
             </p>
             <p
               className="uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center
             md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name hero__coffee-name_two 2md:top-[0px] 2md:z-[3] 2md:text-[70px]
             2md:right-[-15px] 2md:visible 2md:text-[#23AC72]"
             >
               Cappuccino
             </p>
             <div
               className="flex mn:gap-[10px] absolute w-[100%] bottom-[5px] flex justify-center
             2md:bottom-[60px]"
             >
               <Link
                 to={"/"}
                 className="w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] 
                 mn:rounded-[10px] absolute bottom-[5px] hover:bg-[#283E32] mn:left-[75%] mn:translate-x-[-75%] z-[5]"
               >
                 <img src={arrowLeft} alt="<" />
               </Link>
               <Link
                 to={"/"}
                 className="w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] 
                 mn:rounded-[10px] absolute bottom-[5px] right-[15px] hover:bg-[#283E32] z-[5]"
               >
                 <img src={arrowRight} alt=">" />
               </Link>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
}