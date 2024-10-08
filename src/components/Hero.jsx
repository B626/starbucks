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

  const coffeeNameDouble = useRef()

  const setNextDrink = (drinkName) => {
    if(drinkName === "cappucino"){
      setDrink("pistachio latte")
      coffeeNameText.current.innerHTML = "Pistachio latte";
      coffeeNameTextStroke.current.innerHTML = "Pistachio latte";
      orderBtnRef.current.classList =
        "text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] bg-[#C57C76] duration-[300ms] relative z-[5]";
      coffeeSwitch(coffeeImg2Ref.current, coffeeImgRef.current);
    } else if(drinkName === "pistachio latte") {
      setDrink("berries latte")
      coffeeNameText.current.innerHTML = "Berries latte"
      coffeeNameTextStroke.current.innerHTML = "Berries latte";
      orderBtnRef.current.classList =
        "text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] bg-[#866F92] duration-[300ms] relative z-[5]";
      coffeeSwitch(coffeeImg3Ref.current, coffeeImg2Ref.current);
    } else if(drinkName === "berries latte") {
      setDrink("cappucino")
      coffeeNameText.current.innerHTML = "Cappucino";
      coffeeNameTextStroke.current.innerHTML = "Cappucino";
      orderBtnRef.current.classList =
        "text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] bg-[#23AC72] duration-[300ms] relative z-[5]";
      coffeeSwitch(coffeeImgRef.current, coffeeImg3Ref.current);
    }
  }

  const setPrevDrink = (drinkName) => {
    if (drinkName === "cappucino") {
      setDrink("berries latte");
      coffeeNameText.current.innerHTML = "berries latte";
      coffeeNameTextStroke.current.innerHTML = "berries latte";
      orderBtnRef.current.classList =
        "bg-[#866F92] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]";
      coffeeSwitch(coffeeImg3Ref.current, coffeeImgRef.current);
    } else if (drinkName === "berries latte") {
      setDrink("pistachio latte");
      coffeeNameText.current.innerHTML = "pistachio latte";
      coffeeNameTextStroke.current.innerHTML = "pistachio latte";
      coffeeSwitch(coffeeImg2Ref.current, coffeeImg3Ref.current);
      orderBtnRef.current.classList =
        "bg-[#C57C76] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]";
    } else if (drinkName === "pistachio latte") {
      setDrink("cappucino");
      coffeeNameText.current.innerHTML = "Cappucino";
      coffeeNameTextStroke.current.innerHTML = "Cappucino";
      orderBtnRef.current.classList =
        "bg-[#23AC72] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]";
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
          "bg-[#23AC72] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]";
        coffeeSwitch(coffeeImgRef.current, coffeeImg2Ref.current);
      } else if (drink === "berries latte"){
        setDrink("cappucino")
        coffeeNameText.current.innerHTML = "Cappucino";
        coffeeNameTextStroke.current.innerHTML = "Cappucino";
        orderBtnRef.current.classList =
          "bg-[#23AC72] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]";
        coffeeSwitch(coffeeImgRef.current, coffeeImg3Ref.current);
      }
    } else if (drinkName === "berries latte") {
      if (drink === "pistachio latte") {
        setDrink("berries latte");
        coffeeNameText.current.innerHTML = "berries latte";
        coffeeNameTextStroke.current.innerHTML = "berries latte";
        orderBtnRef.current.classList =
          "bg-[#866F92] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]";
        coffeeSwitch(coffeeImg3Ref.current, coffeeImg2Ref.current);
      } else if (drink === "cappucino") {
        setDrink("berries latte");
        coffeeNameText.current.innerHTML = "berries latte";
        coffeeNameTextStroke.current.innerHTML = "berries latte";
        orderBtnRef.current.classList =
          "bg-[#866F92] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]";
        coffeeSwitch(coffeeImg3Ref.current, coffeeImgRef.current);
      }
    } else if (drinkName === "pistachio latte") {
      if (drink === "berries latte") {
        setDrink("pistachio latte");
        coffeeNameText.current.innerHTML = "pistachio latte";
        coffeeNameTextStroke.current.innerHTML = "pistachio latte";
        orderBtnRef.current.classList =
          "bg-[#C57C76] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]";
        coffeeSwitch(coffeeImg2Ref.current, coffeeImg3Ref.current);
      } else if (drink === "cappucino") {
        setDrink("pistachio latte");
        coffeeNameText.current.innerHTML = "pistachio latte";
        coffeeNameTextStroke.current.innerHTML = "pistachio latte";
        orderBtnRef.current.classList =
          "bg-[#C57C76] text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px] 3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]";
        coffeeSwitch(coffeeImg2Ref.current, coffeeImgRef.current);
      }
    }
  }

  const coffeeSwitch = (newCoffee, prevCoffee) => {
    gsap.fromTo(newCoffee, {opacity: 0,x: 500, duration: 0.7}, {opacity: 1, x: 0, duration:0.7})
    gsap.to(prevCoffee, {x: -500, opacity: 0})
    gsap.fromTo(coffeeNameText.current, {x: 0, opacity: 1}, { x:-200, opacity: 0, duration: 0.3 })
    gsap.fromTo(coffeeNameTextStroke.current, {x: 0, opacity: 1}, { x:-200, opacity: 0, duration: 0.3 });
    gsap.fromTo(coffeeNameText.current, { x: 250, opacity: 0}, { x: 0, opacity: 1, delay: 0.2, duration: 0.4});
    gsap.fromTo(coffeeNameTextStroke.current, { x: 250, opacity: 0 }, { x: 0, opacity: 1, delay: 0.2, duration: 0.4});
  }

  useGSAP(() => {
    gsap.from(mainText.current, {x: -500, duration:0.7})
    gsap.from(coffeImgBgRef.current, { x: 500, duration: 0.7 });
    gsap.from(coffeeImgRef.current, { x: 700, duration: 0.7 });
    gsap.from(coffeePrevs.current, { x: -1000, duration: 1, delay: 0.3 });
  })
   return (
     <section className="relative h-[100vh] mn:pt-[100px] md:pt-[150px] l:pt-[130px] xl:pt-[246px]">
       <div className="max-w-[1350px] mt-0 mb-0 ml-[auto] mr-[auto] pl-[15px] pr-[15px] 2md:flex justify-between">
         <div className="l:w-[100%]">
           <div ref={mainText}>
             <h2
               className={
                 drink === "cappucino"
                   ? "mn:text-[#41CA90] uppercase font-[700] mn:text-[30px] mn:leading-[100%] mn:mb-[5px] 2sm:text-[35px] 3sm:text-[40px] md:text-[50px] duration-[300ms]"
                   : drink === "pistachio latte"
                   ? "mn:text-[#C57C76] uppercase font-[700] mn:text-[30px] mn:leading-[100%] mn:mb-[5px] 2sm:text-[35px] 3sm:text-[40px] md:text-[50px] duration-[300ms]"
                   : drink === "berries latte"
                   ? "mn:text-[#866F92] uppercase font-[700] mn:text-[30px] mn:leading-[100%] mn:mb-[5px] 2sm:text-[35px] 3sm:text-[40px] md:text-[50px] duration-[300ms]"
                   : "mn:text-[#41CA90] uppercase font-[700] mn:text-[30px] mn:leading-[100%] mn:mb-[5px] 2sm:text-[35px] 3sm:text-[40px] md:text-[50px] duration-[300ms]"
               }
             >
               Tired?
             </h2>
             <h1
               className="mn:text-[#fff] uppercase font-[800] mn:text-[35px] mn:leading-[100%] mn:mb-[15px] 2sm:text-[45px]
             3sm:text-[50px] md:text-[75px] 2md:text-[85px] main-title w-[100%] l:mb-[27px]"
             >
               Drink coffee!
             </h1>
             <p className="text-[#DBDBDB] mn:mb-[30px] md:w-[532px] l:mb-[50px]">
               Coffee isn't just a drink—it's a ritual, a break from the rush of
               life. Each cup brings a moment of warmth and comfort. <br />
               Website was made by Ocean Studio. Inst: @weboceanstudio. tg:
               @browixx.
             </p>
             <Link
               className="text-[#fff] bg-[#23AC72] mn:pt-[12px] mn:pb-[12px] mn:pl-[50px] mn:pr-[50px] 
             inline-block mn:text-[20px] uppercase font-[700] mn:rounded-[170px] mn:mb-[20px]
             3sm:text-[24px] xl:mb-[100px] duration-[300ms] relative z-[5]"
               ref={orderBtnRef}
             >
               Order now
             </Link>
           </div>
           <div
             className="flex mn:flex-col mn:gap-[15px] mn:grid mn:grid-cols-[repeat(2,60px)] mn:grid-rows-[repeat(2,60px)]
           2sm:grid-cols-[repeat(2,80px)] 2sm:grid-rows-[repeat(2,80px)] 3sm:grid-cols-[repeat(3,167px)] 3sm:grid-rows-[repeat(1,100px)] relative z-[30]"
             ref={coffeePrevs}
           >
             <div
               className={
                 drink === "cappucino"
                   ? "bg-[#485B51] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[29px] relative z-[10] duration-[300ms]"
                   : "bg-[#33483C] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[29px] relative z-[10] duration-[300ms]"
               }
               onClick={() => setNewDrink("cappucino")}
             >
               <img
                 src={prev2}
                 className="mn:h-[40px] 3sm:h-[60px] 2md:h-[150px] relative z-[10]"
                 alt=""
               />
             </div>
             <div
               className={
                 drink === "pistachio latte"
                   ? "bg-[#485B51] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[29px] relative z-[10] duration-[300ms]"
                   : "bg-[#33483C] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[29px] relative z-[10] duration-[300ms]"
               }
               onClick={() => setNewDrink("pistachio latte")}
             >
               <img
                 src={prev1}
                 className="mn:h-[40px] 3sm:h-[60px] 2md:h-[150px] relative z-[10]"
                 alt=""
               />
             </div>
             <div
               className={
                 drink === "berries latte"
                   ? "bg-[#485B51] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[29px] relative z-[10] duration-[300ms]"
                   : "bg-[#33483C] mn:w-[60px] mn:h-[60px] flex justify-center items-center hover:bg-[#485B51] 2sm:w-[80px] 2sm:h-[80px] 3sm:w-[100px] 3sm:h-[100px] 2md:w-[167px] 2md:h-[211px] cursor-pointer 2md:rounded-[29px] relative z-[10] duration-[300ms]"
               }
               onClick={() => setNewDrink("berries latte")}
             >
               <img
                 src={prev3}
                 className="mn:h-[40px] 3sm:h-[60px] 2md:h-[150px] relative z-[10]"
                 alt=""
               />
             </div>
           </div>
         </div>
         <div className="w-[100%] sm:h-[100%]">
           <img
             src={img2}
             alt=""
             ref={coffeeImgRef}
             className="absolute mn:bottom-[50px] z-[3] mn:h-[350px] mn:right-[-15px] right-[0px] right-[0px] 2sm:h-[350px]
             2md:h-[500px] 2md:right-[130px] 2md:top-[70%] 2md:translate-y-[-70%] l:h-[700px] l:right-[220px]
             l:top-[60%] l:translate-y-[-60%] coffee-img
             "
           />
           <img
             src={img1}
             alt=""
             ref={coffeeImg2Ref}
             className="absolute mn:bottom-[50px] z-[3] mn:h-[350px] mn:right-[-15px] right-[0px] right-[0px] 2sm:h-[350px]
             2md:h-[500px] 2md:right-[130px] 2md:top-[70%] 2md:translate-y-[-70%] l:h-[700px] l:right-[220px]
             l:top-[65%] l:translate-y-[-65%] opacity-[0] coffee-img
             "
           />
           <img
             src={img3}
             alt=""
             ref={coffeeImg3Ref}
             className="absolute mn:bottom-[50px] z-[3] mn:h-[350px] mn:right-[-15px] right-[0px] right-[0px] 2sm:h-[350px]
             2md:h-[500px] 2md:right-[130px] 2md:top-[70%] 2md:translate-y-[-70%] l:h-[700px] l:right-[220px]
             l:top-[70%] l:translate-y-[-70%] opacity-[0] coffee-img
             "
           />
           <div
             className={
               drink === "cappucino"
                 ? "bg-[#23AC72] rounded-t-[30px] absolute bottom-0 left-0 w-[100%] h-[90px] 2md:right-[0px] 2md:top-[0px] 2md:h-[100vh] 2md:w-[300px] 2md:left-[auto] 2md:rounded-l-[110px] l:w-[404px] duration-[300ms] transition-colors"
                 : drink === "pistachio latte"
                 ? "bg-[#C57C76] rounded-t-[30px] absolute bottom-0 left-0 w-[100%] h-[90px] 2md:right-[0px] 2md:top-[0px] 2md:h-[100vh] 2md:w-[300px] 2md:left-[auto] 2md:rounded-l-[110px] l:w-[404px] duration-[300ms] transition-colors"
                 : drink === "berries latte"
                 ? "bg-[#866F92] rounded-t-[30px] absolute bottom-0 left-0 w-[100%] h-[90px] 2md:right-[0px] 2md:top-[0px] 2md:h-[100vh] 2md:w-[300px] 2md:left-[auto] 2md:rounded-l-[110px] l:w-[404px] duration-[300ms] transition-colors"
                 : "bg-[#23AC72] rounded-t-[30px] absolute bottom-0 left-0 w-[100%] h-[90px] 2md:right-[0px] 2md:top-[0px] 2md:h-[100vh] 2md:w-[300px] 2md:left-[auto] 2md:rounded-l-[110px] l:w-[404px] duration-[300ms] transition-colors"
             }
             ref={coffeImgBgRef}
           >
             <div ref={coffeeNameDouble}>
               <p
                 className="uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[20px] text-center
             md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name 2md:top-[0px] 2md:z-[3] 2md:text-[70px]
             2md:right-[60px] xl:right-[115px] "
                 ref={coffeeNameText}
               >
                 Cappuccino
               </p>
               <p
                 className={
                   drink === "cappucino"
                     ? "uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name hero__coffee-name_two 2md:top-[0px] 2md:z-[3] 2md:text-[70px] 2md:visible 2md:text-[#23AC72] 2md:left-[auto] 2md:right-[5px] xl:right-[60px] transition-colors duration-[300ms]"
                     : drink === "pistachio latte"
                     ? "uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name hero__coffee-name_two 2md:top-[0px] 2md:z-[3] 2md:text-[70px] 2md:visible 2md:text-[#C57C76] 2md:left-[auto] 2md:right-[5px] xl:right-[60px] transition-colors duration-[300ms]"
                     : drink === "berries latte"
                     ? "uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name hero__coffee-name_two 2md:top-[0px] 2md:z-[3] 2md:text-[70px] 2md:visible 2md:text-[#866F92] 2md:left-[auto] 2md:right-[5px] xl:right-[60px] transition-colors duration-[300ms]"
                     : "uppercase text-[#fff] font-[700] absolute bottom-[15px] left-[15px]  mn:text-[30px] text-center md:text-[40px] md:bottom-[5px] md:[writing-mode: tb-rl] hero__coffee-name hero__coffee-name_two 2md:top-[0px] 2md:z-[3] 2md:text-[70px] 2md:visible 2md:text-[#23AC72] 2md:left-[auto] 2md:right-[5px] xl:right-[60px] transition-colors duration-[300ms]"
                 }
                 ref={coffeeNameTextStroke}
               >
                 Cappuccino
               </p>
             </div>

             <div
               className="flex mn:gap-[10px] absolute w-[100%] bottom-[5px] flex justify-center
             2md:bottom-[60px] l:bottom-[30px] l:right-[70px]"
             >
               <Link
                 to={"/"}
                 className={
                   drink === "cappucino "
                     ? "w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] mn:rounded-[10px] absolute bottom-[5px] hover:bg-[#283E32] mn:left-[75%] mn:translate-x-[-75%] z-[5]"
                     : drink === "pistachio latte"
                     ? "w-[49px] h-[49px] flex items-center justify-center bg-[#C57C76] mn:rounded-[10px] absolute bottom-[5px] hover:bg-[#283E32] mn:left-[75%] mn:translate-x-[-75%] z-[5]"
                     : drink === "berries latte"
                     ? "w-[49px] h-[49px] flex items-center justify-center bg-[#866F92] mn:rounded-[10px] absolute bottom-[5px] hover:bg-[#283E32] mn:left-[75%] mn:translate-x-[-75%] z-[5]"
                     : "w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] mn:rounded-[10px] absolute bottom-[5px] hover:bg-[#283E32] mn:left-[75%] mn:translate-x-[-75%] z-[5]"
                 }
                 onClick={() => setPrevDrink(drink)}
               >
                 <img src={arrowLeft} alt="<" />
               </Link>
               <Link
                 to={"/"}
                 className={
                   drink === "cappucino"
                     ? "w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] mn:rounded-[10px] absolute bottom-[5px] right-[15px] hover:bg-[#23AC72] z-[5] bg-[#283E32]"
                     : drink === "pistachio latte"
                     ? "w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] mn:rounded-[10px] absolute bottom-[5px] right-[15px] hover:bg-[#C57C76] z-[5] bg-[#283E32]"
                     : drink === "berries latte"
                     ? "w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] mn:rounded-[10px] absolute bottom-[5px] right-[15px] hover:bg-[#866F92] z-[5] bg-[#283E32]"
                     : "w-[49px] h-[49px] flex items-center justify-center bg-[#23AC72] mn:rounded-[10px] absolute bottom-[5px] right-[15px] hover:bg-[#23AC72] z-[5] bg-[#283E32]"
                 }
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