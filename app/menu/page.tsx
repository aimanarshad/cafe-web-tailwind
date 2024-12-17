"use client";
import Image from "next/image";
import { useState } from "react";
export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrinkOpen, setIsDrinkOpen] = useState(false);

  const EatFood = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const DrinkFood = () => {
    setIsDrinkOpen(!isDrinkOpen);
  };
  return (
    <>
      <h1 className="bg-slate-600 text-white text-[60px] text-center mt-9 ">
        THE MENU
      </h1>
      <button
        onClick={EatFood}
        className="bg-slate-900 ml-[400px] text-white w-[200px] h-[50px] py-2 mb-8 rounded text-center text-3xl mt-8  hover:bg-slate-600"
      >
        Eat
      </button>
      {isMenuOpen && (
        <div className="flex flex-col gap-3 ml-[400px] mt-8 mb-8 justify-center text-center border-4 text-xl border-gray-700 bg-gray-300 h-[600px] w-[800px] ">
          <h5 className="font-bold text-xl mb-2">Bread Basket</h5>
          <p className="text-blue-950 mb-4">
            Assortment of fresh baked fruit breads and muffins 5.50
          </p>

          <h5 className="font-bold text-xl mb-2">
            Honey Almond Granola with Fruits
          </h5>
          <p className="text-blue-950 mb-4">
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>

          <h5 className="font-bold text-xl mb-2">Belgian Waffle</h5>
          <p className="text-blue-950 mb-4">
            Vanilla flavored batter with malted flour 7.50
          </p>

          <h5 className="font-bold text-xl mb-2">Scrambled Eggs</h5>
          <p className="text-blue-950 mb-4">
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>

          <h5 className="font-bold text-xl mb-2">Blueberry Pancakes</h5>
          <p className="text-blue-950">
            With syrup, butter and lots of berries 8.50
          </p>
        </div>
      )}
      <button
        onClick={DrinkFood}
        className="bg-slate-900 ml-[200px] text-white w-[200px] h-[50px] py-2 px-4 rounded text-center text-3xl mt-8 hover:bg-slate-600"
      >
        Drink
      </button>
      {isDrinkOpen && (
        <div className="flex flex-col gap-3 ml-[400px] mt-8 mb-8 justify-center text-center border-4 text-xl border-gray-700 bg-gray-300 h-[600px] w-[800px] ">
          <h5 className="font-bold text-xl mb-2">Coffee</h5>
          <p className="text-blue-950 mb-4">Regular coffee 2.50</p>

          <h5 className="font-bold text-xl mb-2">Chocolato</h5>
          <p className="text-blue-950 mb-4">
            Chocolate espresso with milk 4.50
          </p>

          <h5 className="font-bold text-xl mb-2">Corretto</h5>
          <p className="text-blue-950 mb-4">Whiskey and coffee 5.00</p>

          <h5 className="font-bold text-xl mb-2">Iced Tea</h5>
          <p className="text-blue-950 mb-4">Hot tea, except not hot 3.00</p>

          <h5 className="font-bold text-xl mb-2">Soda</h5>
          <p className="text-blue-950">Coke, Sprite, Fanta, etc. 2.50</p>
        </div>
      )}
      <Image
        src="/menu1.png" // Path to the image
        alt="cafe" // Alternative text
        width={1300} // Width of the image
        height={200} // Height of the image
        className="mb-8 mt-9 "
      />
    </>
  );
}
