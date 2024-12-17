import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="mt-7  mb-8">
        <h1 className="bg-slate-600 text-white text-[60px] text-center px-64">
          About the cafe
        </h1>

        <p className=" text-xl mt-10 ml-9 ">
          The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut
          <br />
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          <br />
          In addition to our full espresso and brew bar menu, we serve fresh
          made-to-order breakfast and lunch sandwiches,
          <br /> as well as a selection of sides and salads and other good
          stuff.
        </p>
        <div className=" text-xl mt-4 border-4 border-gray-500 bg-slate-200  ">
          <p className="italic text-gray-700 ml-9 ">
            "Use products from nature for what it's worth - but never too early,
            nor too late." Fresh is the new sweet.
            <br />
            <br />
            Chef, Coffeeist and Owner: Liam Brown
          </p>
          <Image
            src="/about3.webp" // Path to the image
            alt="cafe" // Alternative text
            layout="responsive"
            width={1000} // Width of the image, adjust according to your image's original aspect ratio
            height={30} // Height of the image, adjust accordingly to maintain aspect ratio
            className="mt-7"
          />
          <br />
          <br />

          <p className="text-2xl ml-9">
            <strong>Opening hours:</strong> everyday from 6am to 5pm.
          </p>
          <br />
          <p className="text-2xl ml-9">
            <strong>Address:</strong> 15 Adr street, 5015, NY
          </p>
        </div>
      </div>
    </>
  );
}
