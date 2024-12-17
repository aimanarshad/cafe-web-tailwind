export default function Contact() {
  return (
    <>
      <div className="mt-9 mb-6 flex flex-col justify-center ml-11 mr-11">
        
      
          <form className="flex flex-col gap-4 border-4 text-black  ">
            <input
              className="h-[90px] text-[40px] bg-gray-900    "
              type="text"
              placeholder="NAME"
            />
            <input
              className=" h-[90px] text-[40px] bg-gray-900  "
              type="text"
              name="people"
              placeholder="How many People"
            />
            <input
              className="h-[90px] text-[40px] bg-gray-900  "
              type="datetime-local"
              value="2020-11-16T20:00"
            />
            <input
              className=" text-black  h-[90px] text-[40px] bg-gray-900 "
              type="text"
              placeholder="Message \ Special requirements"
            />
            <button className="bg-black text-white h-[90px] w-[400px] text-[40px]  ml-[200px]">
              SEND MESSAGE
            </button>
          </form>
        </div>
    </>
  );
}
