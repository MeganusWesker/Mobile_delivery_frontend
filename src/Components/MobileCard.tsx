
interface CourseCardType {
  _id: string;
  name: string;
  processor: string;
  os: string;
  ram: number;
  image: string;
  price: number;
  rom: number;
}

const MobileCard = ({
  name,
  processor,
  os,
  ram,
  image,
  rom,
  price,
}: CourseCardType) => {
  return (
    <div className="w-[24%] mt-8 hover:-translate-y-1 hover:shadow-[0_0_5px_rgba(15,15,15,.26)] transition duration-300  ease-in-out max-[800px]:w-full">
      <div className="flex justify-center">
      <img
        src={image}
        className=" object-fill w-[90%]"
        alt="poster.png"
      />
      </div>


      <div className="mt-4 flex flex-col justify-between w-[95%] mx-auto">
        <p className="font-bold">{name}</p>
        <div className="flex items-center">
          <p className="font-bold text-sm mr-1">Processor</p>
          <p>{processor}</p>
        </div>
     

        <div className="flex items-center">
          <p className="font-bold text-sm mr-1">OS</p>
          <p>{os}</p>
        </div>

        <div className="flex items-center ">
          <p className="font-bold text-sm mr-1">Ram</p>
          <p>{ram}GB</p>
        </div>

        <p className="font-bold ">Rom-{rom}</p>
        <p className="font-bold ">Price-₹{price}</p>


      </div>
    </div>
  );
};

export default MobileCard