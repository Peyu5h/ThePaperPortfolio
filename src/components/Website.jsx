const Website = () => {
  return (
    <div>
      <div className="mt-24 grid grid-cols-9 gap-x-2  ">
        <div className="grid col-span-7 mb-16  bg-peach px-8 h-full flex items-center">
          <div className="h-[345px] rounded-sm tracking-tighter bg-bleck text-peach px-4 pt-8 font-carnopee flex items-center justify-center ">
            <h1 className="text-[24rem] uppercase">WEBSITE</h1>
          </div>
        </div>

        <div className="grid col-span-2  bg-peach ">
          <img
            className="h-[380px] mt-4 flex items-center"
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Website;
