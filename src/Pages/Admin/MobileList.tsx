import { useEffect } from "react";
import Loader from "../../Components/Loader";
import SideBar from "../../Components/SideBar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {getAllMobilesAdmin} from "../../redux/action/mobileAction"
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const tableHeadingList: string[] = [
  "Id",
  "Image",
  "name",
  "processor",
  "OS",
  "Ram",
  "rom",
  "Price",
  "Actions",
];

interface documentCourse {
  id: string;
  Image: string;
  name: string;
  processor: string;
  ram: number;
  rom: number;
  OS: string;
  price:number;
}

const MobileList = () => {
  const dispatch = useAppDispatch();
  const { loading, mobiles, message } = useAppSelector((state) => state.mobile);

 
  useEffect(() => {
    if (message) {
      console.log(message);
    }
    dispatch(getAllMobilesAdmin());
  }, [dispatch, message]);



  return loading ? (
    <Loader />
  ) : (
    <>

    <Navbar/>
      <div className="grid grid-cols-1fr-5fr max-[1200px]:grid-cols-1fr">
        <SideBar />

        {/* table */}

        <div className="overflow-x-auto">
          <div className="mt-14 w-[98%] grid-cols-table-Content m-auto" id="courseListTable">
            {/* table Heading */}
            <div className="rounded grid grid-cols-table-Content items-center h-8 px-2 bg-mainColor2">
              {tableHeadingList.map((item, i) => (
                <p
                  className={`text-white text-${
                    (i === 1 && "center ") ||
                    (i === tableHeadingList.length - 1 && "center")
                  }`}
                  key={i}
                >
                  {item}
                </p>
              ))}
            </div>

            {mobiles &&
              mobiles.map((item) => (
                <CourseListComponent
                  key={item._id}
                  id={item._id}
                  Image={item.images[0].url}
                  name={item.name}
                  processor={item.processor}
                  OS={item.os}
                  ram={item.ram}
                  rom={item.rom}
                  price={item.price}
                />
              ))}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

const CourseListComponent = ({
  id,
  Image,
  name,
  processor,
  OS,
  ram,
  rom,
  price,
//   deleteHandler,
}: documentCourse) => (
  <div
    key={id}
    className="rounded grid grid-cols-table-Content items-center h-12 px-2 my-3"
  >
    <p className="font-loto">#{id.substring(10)}</p>
    <img
      className="w-12 h-12 rouded object-cover justify-self-center"
      src={Image}
      alt=""
    />
    <p className="font-loto">{name}</p>
    <p className="font-loto">{processor}</p>
    <p className="font-loto">{OS}</p>
    <p className="text-center">{ram}</p>
    <p className="text-center">{rom}</p>
    <p className="text-center">₹{price}</p>

    <div className="flex items-center justify-around">
      <Link to={`/admin/mobile/${id}`}>
        <button className="text-sm bg-mainColor2 border text-white rounded px-2 py-1 group hover:border-maincolor2 hover:bg-white hover:text-mainColor2 hover:border-mainColor2 hover:-translate-y-1  transition duration-300 ease-in-out">
         add Images
        </button>
      </Link>
    </div>
  </div>
);



export default MobileList