const TheGrid = () => {
  return (
    <div>
      <div className="px-8 grid grid-cols-6 font-carnopee relative">
        <div className="grid col-span-2 h-full p-6 border-r-[1px] border-r-black ">
          <div className="flex flex-col">
            <h1 className="text-[6.5rem] uppercase tracking-tighter leading-none">
              INTERACTIVE
              <h1 className="text-[11.8rem] uppercase tracking-tighter m-0">
                ARTIST!
              </h1>
            </h1>

            <img
              className="border-[1px] border-bleck mb-12 mt-4"
              src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg"
              alt=""
            />

            <div className="moreText font-eLight text-[29px] ">
              <img
                className="h-26 rounded-sm mr-3 mb-3 float-left"
                src="https://res.cloudinary.com/dkysrpdi6/image/upload/v1710793904/A_zdtvvy.png"
                alt=""
              />
              <p className="">
                As a multidisciplinary freelancer, I'm passionate about creating
                iconic digital experiences through motion, typography, and
                creative coding for companies and agencies around the creative
                coding world.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================== */}
        <div className="grid col-span-4 h-screen pl-6">
          <div className="conatiner relative flex flex-col">
            <div className="">
              <img
                className="flex mb-12 top-0 border-[1px] border-bleck "
                src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-[7.8rem] uppercase tracking-tighter leading-none">
                DIGITAL ART DIRECTOR INTERACTIVE DESIGNER CREATIVE DEVELOPER
                BASED IN AMSTERDAM, NL.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheGrid;
