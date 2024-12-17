import Image from "next/image";
export default function Where() {
  return (
    <>
    <div className="mt-9 mb-6 flex flex-col justify-center ml-[300px]">
            <h1 className="bg-slate-600 text-white text-[60px] text-center  mt-9 mb-6 w-[800px] ">
              WHERE TO FIND US
            </h1>
            <p className="text-[30px]  text-black ">
              Find us at some address at some place.
            </p>
            <Image
              src="/map2.png" // Path to the image
              alt="cafe" // Alternative text
              width={750} // Width of the image
              height={240} // Height of the image
              className=" mt-9 mb-9 "
            />
            <p className="text-[24px]">
              <span className="font-bold">FYI!</span> We offer full-service catering
              for any event, large or small.
              <br /> We understand your needs and we will cater the food to satisfy
              the
              <br />
              biggerst criteria of them all, both look and taste.
            </p>
            <br />
            <p className="text-[24px]">
              <strong>Reserve</strong> a table, ask for today's special or just send
              us a message:
            </p>
            </div>
    </>
  )
}