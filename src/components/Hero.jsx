import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import prev1 from "/public/hero/previews/1.png";
import prev2 from "/public/hero/previews/2.png";
import prev3 from "/public/hero/previews/3.png";

import img1 from "/public/hero/1.png";
import img2 from "/public/hero/2.png";
import img3 from "/public/hero/3.png";

import arrowLeft from "/public/icons/arrow-left.svg"
import arrowRight from "/public/icons/arrow-right.svg";
import { useRef, useState } from "react";


export const Hero = () => {
  const [drink, setDrink] = useState("cappucino")

  const mainText = useRef()
  const coffeImgBgRef = useRef();
  const coffeeImgRef = useRef();
  const coffeeImg2Ref = useRef();
  const coffeeImg3Ref = useRef();
  const coffeePrevs = useRef()

  const orderBtnRef = useRef()

  const coffeeNameText = useRef()
  const coffeeNameTextStroke = useRef();

  const setNextDrink = (drinkName) => {
    if(drinkName === "cappucino"){
      setDrink("pistachio latte")
      coffeeNameText.current.innerHTML = "Pistachio latte";
      coffeeNameTextStroke.current.innerHTML = "Pistachio latte";
      orderBtnRef.current.classList =
        "text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px] bg-[#C57C76] ";
      coffeeSwitch(coffeeImg2Ref.current, coffeeImgRef.current);
    } else if(drinkName === "pistachio latte") {
      setDrink("berries latte")
      coffeeNameText.current.innerHTML = "Berries latte"
      coffeeNameTextStroke.current.innerHTML = "Berries latte";
      orderBtnRef.current.classList =
        "text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px] bg-[#866F92] ";
      coffeeSwitch(coffeeImg3Ref.current, coffeeImg2Ref.current);
    } else if(drinkName === "berries latte") {
      setDrink("cappucino")
      coffeeNameText.current.innerHTML = "Cappucino";
      coffeeNameTextStroke.current.innerHTML = "Cappucino";
      orderBtnRef.current.classList =
        "text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px] bg-[#23AC72] ";
      coffeeSwitch(coffeeImgRef.current, coffeeImg3Ref.current);
    }
  }

  const setPrevDrink = (drinkName) => {
    if (drinkName === "cappucino") {
      setDrink("berries latte");
      coffeeNameText.current.innerHTML = "berries latte";
      coffeeNameTextStroke.current.innerHTML = "berries latte";
      orderBtnRef.current.classList =
        "bg-[#866F92] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px]";
      coffeeSwitch(coffeeImg3Ref.current, coffeeImgRef.current);
    } else if (drinkName === "berries latte") {
      setDrink("pistachio latte");
      coffeeNameText.current.innerHTML = "pistachio latte";
      coffeeNameTextStroke.current.innerHTML = "pistachio latte";
      coffeeSwitch(coffeeImg2Ref.current, coffeeImg3Ref.current);
      orderBtnRef.current.classList =
        "bg-[#C57C76] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px]";
    } else if (drinkName === "pistachio latte") {
      setDrink("cappucino");
      coffeeNameText.current.innerHTML = "Cappucino";
      coffeeNameTextStroke.current.innerHTML = "Cappucino";
      orderBtnRef.current.classList =
        "bg-[#23AC72] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px]";
      coffeeSwitch(coffeeImgRef.current, coffeeImg2Ref.current);
    }
  };

  const setNewDrink = (drinkName) => {
    if (drinkName === "cappucino") {
      if(drink === "pistachio latte") {
        setDrink("cappucino");
        coffeeNameText.current.innerHTML = "Cappucino";
        coffeeNameTextStroke.current.innerHTML = "Cappucino";
        orderBtnRef.current.classList =
          "bg-[#23AC72] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px]";
        coffeeSwitch(coffeeImgRef.current, coffeeImg2Ref.current);
      } else if (drink === "berries latte"){
        setDrink("cappucino")
        coffeeNameText.current.innerHTML = "Cappucino";
        coffeeNameTextStroke.current.innerHTML = "Cappucino";
        orderBtnRef.current.classList =
          "bg-[#23AC72] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px]";
        coffeeSwitch(coffeeImgRef.current, coffeeImg3Ref.current);
      }
    } else if (drinkName === "berries latte") {
      if (drink === "pistachio latte") {
        setDrink("berries latte");
        coffeeNameText.current.innerHTML = "berries latte";
        coffeeNameTextStroke.current.innerHTML = "berries latte";
        orderBtnRef.current.classList =
          "bg-[#866F92] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px]";
        coffeeSwitch(coffeeImg3Ref.current, coffeeImg2Ref.current);
      } else if (drink === "cappucino") {
        setDrink("berries latte");
        coffeeNameText.current.innerHTML = "berries latte";
        coffeeNameTextStroke.current.innerHTML = "berries latte";
        orderBtnRef.current.classList =
          "bg-[#866F92] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px]";
        coffeeSwitch(coffeeImg3Ref.current, coffeeImgRef.current);
      }
    } else if (drinkName === "pistachio latte") {
      if (drink === "berries latte") {
        setDrink("pistachio latte");
        coffeeNameText.current.innerHTML = "pistachio latte";
        coffeeNameTextStroke.current.innerHTML = "pistachio latte";
        orderBtnRef.current.classList =
          "bg-[#C57C76] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px]";
        coffeeSwitch(coffeeImg2Ref.current, coffeeImg3Ref.current);
      } else if (drink === "cappucino") {
        setDrink("pistachio latte");
        coffeeNameText.current.innerHTML = "pistachio latte";
        coffeeNameTextStroke.current.innerHTML = "pistachio latte";
        orderBtnRef.current.classList =
          "bg-[#C57C76] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] l:mb-[20px]";
        coffeeSwitch(coffeeImg2Ref.current, coffeeImgRef.current);
      }
    }
  }

  const coffeeSwitch = (newCoffee, prevCoffee) => {
    gsap.fromTo(newCoffee, {opacity: 0,x: 500, duration: 0.7}, {opacity: 1, x: 0, duration:0.7})
    gsap.to(prevCoffee, {opacity: 0})
  }

  useGSAP(() => {
    gsap.from(mainText.current, {x: -500, duration:0.7})
    gsap.from(coffeImgBgRef.current, { x: 500, duration: 0.7 });
    gsap.from(coffeeImgRef.current, { x: 700, duration: 0.7 });
    gsap.from(coffeePrevs.current, { x: -1000, duration: 1, delay: 0.3 });
  })
   return (
     <section className="relative h-[100vh] mn:pt-[100px] md:pt-[150px]">
       <div className="max-w-[1350px] mt-0 mb-0 ml-[auto] mr-[auto] pl-[15px] pr-[15px] 2md:flex justify-between">
         <div>
           <div ref={mainText}>
             <h2
               className="mn:text-[#41CA90] uppercase font-[700] mn:text-[30px] mn:leading-[100%] mn:mb-[5px]
             2sm:text-[35px] 3sm:text-[40px] md:text-[50px]"
             >
               Tired?
             </h2>
             <h1
               className="mn:text-[#fff] uppercase font-[800] mn:text-[35px] mn:leading-[100%] mn:mb-[15px] 2sm:text-[45px]
             3sm:text-[50px] md:text-[75px] 2md:text-[85px] main-title"
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
               ref={orderBtnRef}
             >
               Order now
             </Link>
           </div>
           <div
             className="flex mn:flex-col mn:gap-[15px] mn:grid mn:grid-cols-[repeat(2,60px)] mn:grid-rows-[repeat(2,60px)]
           2sm:grid-cols-[repeat(2,80px)] 2sm:grid-rows-[repeat(2,80px)] 3sm:grid-cols-[repeat(3,167px)] 3sm:grid-rows-[repeat(1,100px)]"
             ref={coffeePrevs}
           >
             <div
               className={
                 drink === "cappucino"
                   ? "bg-[#485B51] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[40px]"
                   : "bg-[#33483C] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[40px]"
               }
               onClick={() => setNewDrink("cappucino")}
             >
               <img
                 src={prev1}
                 className="mn:h-[40px] 3sm:h-[60px] 2md:h-[150px]"
                 alt=""
               />
             </div>
             <div
               className={
                 drink === "pistachio latte"
                   ? "bg-[#485B51] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[40px]"
                   : "bg-[#33483C] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[40px]"
               }
               onClick={() => setNewDrink("pistachio latte")}
             >
               <img
                 src={prev2}
                 className="mn:h-[40px] 3sm:h-[60px] 2md:h-[150px]"
                 alt=""
               />
             </div>
             <div
               className={
                 drink === "berries latte"
                   ? "bg-[#485B51] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[40px]"
                   : "bg-[#33483C] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[40px]"
               }
               onClick={() => setNewDrink("berries latte")}
             >
               <img
                 src={prev3}
                 className="mn:h-[40px] 3sm:h-[60px] 2md:h-[150px]"
                 alt=""
               />
             </div>
           </div>
         </div>
         <div className="w-[100%] sm:h-[100%]">
           <img
             src={img1}
             alt=""
             ref={coffeeImgRef}
             className="absolute mn:bottom-[40px] z-[3] mn:h-[290px] right-[0px] right-[0px] 2sm:h-[350px]
             2md:h-[500px] 2md:right-[130px] 2md:top-[70%] 2md:translate-y-[-70%] l:h-[600px] l:right-[220px]
             l:top-[60%] l:translate-y-[-60%]
             "
           />
           <img
             src={img2}
             alt=""
             ref={coffeeImg2Ref}
             className="absolute mn:bottom-[40px] z-[3] mn:h-[290px] right-[0px] right-[0px] 2sm:h-[350px]
             2md:h-[500px] 2md:right-[130px] 2md:top-[70%] 2md:translate-y-[-70%] l:h-[800px] l:right-[220px]
             l:top-[60%] l:translate-y-[-60%] opacity-[0]
             "
           />
           <img
             src={img3}
             alt=""
             ref={coffeeImg3Ref}
             className="absolute mn:bottom-[40px] z-[3] mn:h-[290px] right-[0px] right-[0px] 2sm:h-[350px]
             2md:h-[500px] 2md:right-[130px] 2md:top-[70%] 2md:translate-y-[-70%] l:h-[700px] l:right-[220px]
             l:top-[70%] l:translate-y-[-70%] opacity-[0]
             "
           />
           <div
             className={
               drink === "cappucino"
                 ? "bg-[#23AC72] rounded-t-[30px] absolute bottom-0 left-0 w-[100%] h-[90px] 2md:right-[0px] 2md:top-[0px] 2md:h-[100vh] 2md:w-[300px] 2md:left-[auto] 2md:rounded-l-[110px] l:w-[404px]"
                 : drink === "pistachio latte"
                 ? "bg-[#C57C76] rounded-t-[30px] absolute bottom-0 left-0 w-[100%] h-[90px] 2md:right-[0px] 2md:top-[0px] 2md:h-[100vh] 2md:w-[300px] 2md:left-[auto] 2md:rounded-l-[110px] l:w-[404px]"
                 : drink === "berries latte"
                 ? "bg-[#866F92] rounded-t-[30px] absolute bottom-0 left-0 w-[100%] h-[90px] 2md:right-[0px] 2md:top-[0px] 2md:h-[100vh] 2md:w-[300px] 2md:left-[auto] 2md:rounded-l-[110px] l:w-[404px]"
                 : "bg-[#23AC72] rounded-t-[30px] absolute bottom-0 left-0 w-[100%] h-[90px] 2md:right-[0px] 2md:top-[0px] 2md:h-[100vh] 2md:w-[300px] 2md:left-[auto] 2md:rounded-l-[110px] l:w-[404px]"
             }
             ref={coffeImgBgRef}
           >
             <p
               className="uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center
             md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name 2md:top-[0px] 2md:z-[3] 2md:text-[70px]
             2md:right-[50px] l:right-[125px]"
               ref={coffeeNameText}
             >
               Cappuccino
             </p>
             <p
               className={
                 drink === "cappucino"
                   ? "uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name hero__coffee-name_two 2md:top-[0px] 2md:z-[3] 2md:text-[70px] 2md:right-[30px] 2md:visible 2md:text-[#23AC72] l:right-[60px]"
                   : drink === "pistachio latte"
                   ? "uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name hero__coffee-name_two 2md:top-[0px] 2md:z-[3] 2md:text-[70px] 2md:right-[30px] 2md:visible 2md:text-[#C57C76] l:right-[60px]"
                   : drink === "berries latte"
                   ? "uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name hero__coffee-name_two 2md:top-[0px] 2md:z-[3] 2md:text-[70px] 2md:right-[30px] 2md:visible 2md:text-[#866F92] l:right-[60px]"
                   : "uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name hero__coffee-name_two 2md:top-[0px] 2md:z-[3] 2md:text-[70px] 2md:right-[30px] 2md:visible 2md:text-[#23AC72] l:right-[60px]"
               }
               ref={coffeeNameTextStroke}
             >
               Cappuccino
             </p>
             <div
               className="flex mn:gap-[10px] absolute w-[100%] bottom-[5px] flex justify-center
             2md:bottom-[60px] l:right-[70px]"
             >
               <Link
                 to={"/"}
                 className="w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] 
                 mn:rounded-[10px] absolute bottom-[5px] hover:bg-[#283E32] mn:left-[75%] mn:translate-x-[-75%] z-[5]"
                 onClick={() => setPrevDrink(drink)}
               >
                 <img src={arrowLeft} alt="<" />
               </Link>
               <Link
                 to={"/"}
                 className="w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] 
                 mn:rounded-[10px] absolute bottom-[5px] right-[15px] hover:bg-[#23AC72] z-[5] bg-[#283E32]"
                 onClick={() => setNextDrink(drink)}
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