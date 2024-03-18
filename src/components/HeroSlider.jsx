const HeroSlider = () => {
  return (
    <div>
      <div className="flex w-full px-16 mt-8">
        <div className="text">
          <div className="img1 overflow-hidden border-[1px] border-bleck">
            <img
              className="hover:scale-105 transition duration-300 ease-in-out"
              src="https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/615d9672cc65f12c9ab25f21_thumbnail-small.jpeg"
              alt=""
            />
          </div>
          <div className="heading font-editorial mt-4 flex items-center">
            AVRO | KO
            <span className="ml-2  mb-1 pt-[4px] h-4 flex items-center bg-[#B63B12] font-carnopee text-peach p-[2px] px-1 text-[14px] rounded-sm">
              NEW
            </span>
          </div>
          <p className="font-eLight text-[19px] mt-2">
            AvroKO is an award-winning global design firm, established itself as
            a global leader in interior architecture for hospitality, restaurant
            and bars.
          </p>
        </div>

        <div className="container w-[60rem] border-x-2 border-x-bleck/20 mx-16">
          <div className="text flex flex-col font-editorial justify-center items-center gap-y-8 mt-8">
            <h1 className="font-carnopee text-5xl">All Works!</h1>
            <h1 className="text-3xl px-16 text-center">
              A Featured selection the latest work - <br /> of the year
            </h1>
            <p className="font-eLight">
              <span className="font-carnopee">Tip!</span> Drag side way to
              navigate
            </p>
          </div>
        </div>

        <div className="text">
          <div className="img1 overflow-hidden border-[1px] border-bleck gap-x-8">
            <img
              className="hover:scale-105 transition duration-300 ease-in-out"
              src="https://assets-global.website-files.com/5f9085a4041dd5427c5ac8ae/645b5439577bd35377de8c43_thumbnail-small.webp"
              alt=""
            />
          </div>
          <div className="heading font-editorial mt-4 flex items-center">
            THE ROGER HUB
            <span className="ml-2 mb-1 pt-[4px] h-4 flex items-center bg-[#B63B12] font-carnopee text-peach p-[2px] px-1 text-[14px] rounded-sm">
              NEW
            </span>
          </div>
          <p className="font-eLight text-[19px] mt-2">
            The Roger Hub is an immersive web experience showcasing the
            tennis-inspired 'On' sneakers, a collaboration born out of a
            partnership with the legendary Roger Federer
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
