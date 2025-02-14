const ContactComponent = () => {
  return (
    <div className="w-full h-full bg-branco flex flex-col justify-between items-center mt-32 font-poppins">
     
      <div className="flex flex-col justify-center items-center text-center mt-8">
        <h1 className="text-3xl font-semibold">Get In Touch With Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

     
      <div className="w-full flex justify-center ml-48 mt-12 px-8">
        <div className="w-[393px] h-[537px] flex-shrink-0 space-y-12">
          <div>
            <div className="flex">
              <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/local.svg" alt="" />
              <h1>Address</h1>
            </div>
            <p className="text-black font-poppins text-[16px] font-normal leading-normal">
              236 5th SE Avenue, New <br /> York NY10000, United <br /> States
            </p>
          </div>
          <div>
            <div className="flex">
              <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/bxs_phone.svg" alt="" />
              <h1>Phone</h1>
            </div>
            <p className="text-black font-poppins text-[16px] font-normal leading-normal">
              Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
            </p>
          </div>
          <div>
            <div className="flex">
              <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/relogio.svg" alt="" />
              <h1>Working Time</h1>
            </div>
            <p className="text-black font-poppins text-[16px] font-normal leading-normal">
              Monday-Friday: 9:00 - 22:00<br /> Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[635px] h-[923px] flex-shrink-0 p-4 space-y-7">
          <div>
            <label className="text-gray-700 font-medium">Your name</label>
            <input
              type="text"
              className="w-[528px] h-[75px] border border-gray-400 rounded-[10px] bg-white p-3"
              placeholder="Abc"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Email address</label>
            <input
              type="text"
              className="w-[528px] h-[75px] border border-gray-400 rounded-[10px] bg-white p-3"
              placeholder="Abc@def.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Subject</label>
            <input
              type="text"
              className="w-[528px] h-[75px] border border-gray-400 rounded-[10px] bg-white p-3"
              placeholder="This is an optional"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Message</label>
            <input
              type="text"
              className="w-[527px] h-[120px] border border-gray-400 rounded-[10px] bg-white p-3"
              placeholder="Hi! I’d like to ask about"
            />
          </div>

          <button
            type="submit"
            className="mt-11 w-[237px] h-[55px] flex-shrink-0 rounded-md border border-[#B88E2F] bg-[#B88E2F] text-white font-semibold transition hover:bg-opacity-80"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
