import { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import MobileCard from "../Components/MobileCard";
import toast from "react-hot-toast";
import { loadUser } from "../redux/action/userAction";
import {
  colorTogglerOnBlur,
  colorTogglerOnFocused,
} from "../utils/toggleFunctions";
import { osType, ramMemory, romMemory } from "../utils/interfaces";
import { getAllMobiles } from "../redux/action/mobileAction";
import { Slider } from "@mui/material";
import Loader from "../Components/Loader";

const Mobiles = () => {
  const [name, setName] = useState<string>("");
  const [os, setOs] = useState<string>("");
  const [rom, setRom] = useState<string>("");
  const [ram, setRam] = useState<string>("");
  const [processor, setProcessor] = useState<string>("");

  const [price, setPrice] = useState(200000);

  const priceHandler = (e: Event, newPrice: number | number[]) => {
    console.log(e);
    if (typeof newPrice === "number") {
      setPrice(newPrice);
    }
  };

  const searchInputRef = useRef<HTMLDivElement>(null);
  const processorInputRef = useRef<HTMLDivElement>(null);
  const osInputRef = useRef<HTMLSelectElement>(null);
  const romInputRef = useRef<HTMLSelectElement>(null);
  const ramInputRef = useRef<HTMLSelectElement>(null);

  const { mobiles, message, error, loading } = useAppSelector(
    (state) => state.mobile
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getAllMobiles(name, os, ram, rom, processor, price));
    }, 3000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, name, os, ram, rom, processor, price]);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(loadUser());
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [message, error, dispatch, toast]);

  return (
    <>
      <div className="w-[95%] mx-auto my-6 min-h-[60vh]" id="container">
        <h1 className="font-bold font-roboto text-3xl tracking-wider mt-5">
          All Mob<span className="text-mainColor">iles</span>
        </h1>

        {/* courses mainContainer */}

        <div className="">
          <label className=" font-medium block mt-4 text-2xl">
            Search You're Mobile
          </label>
          <div className="w-[95%] mx-auto flex max-[450px]:flex-col">
            <div
              className="flex border border-solid border-color3 p-1 rounded w-[50%] mt-1 ml-8 max-[450px]:mb-3"
              ref={searchInputRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-color3"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                type="text"
                name="name"
                placeholder="Search By Name..."
                value={name}
                onFocus={() => colorTogglerOnFocused(searchInputRef)}
                onBlur={() => colorTogglerOnBlur(searchInputRef)}
                onChange={(e) => setName(e.target.value)}
                className="outline-none text-base ml-3 font-thin w-full"
              />
            </div>

            <div
              className="flex border border-solid border-color3 p-1 rounded w-[50%] mt-1 ml-8"
              ref={processorInputRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-color3"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                type="text"
                name="name"
                placeholder="Search By Processor..."
                value={processor}
                onFocus={() => colorTogglerOnFocused(processorInputRef)}
                onBlur={() => colorTogglerOnBlur(processorInputRef)}
                onChange={(e) => setProcessor(e.target.value)}
                className="outline-none text-base ml-3 font-thin w-full"
              />
            </div>
          </div>

          {/* os Container */}

          <div className="flex  max-[800px]:flex-col-reverse max-[800px]:items-center">
            <div className="">
              <label className="font-semibold block mt-2">Os</label>

              <select
                className={`outline-none border border-solid border-color3 p-1 rounded w-full`}
                ref={osInputRef}
                onFocus={() => colorTogglerOnFocused(osInputRef, true)}
                onBlur={() => colorTogglerOnBlur(osInputRef, true)}
                onChange={(e) => setOs(e.target.value)}
              >
                {osType.map((item, i) => (
                  <option className=" outline-none" value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>

              <label className="font-semibold block mt-2">Ram More than:</label>

              <select
                className={`outline-none border border-solid border-color3 p-1 rounded w-full`}
                ref={ramInputRef}
                onFocus={() => colorTogglerOnFocused(ramInputRef, true)}
                onBlur={() => colorTogglerOnBlur(ramInputRef, true)}
                onChange={(e) => setRam(e.target.value)}
              >
                {ramMemory.map((item, i) => (
                  <option className=" outline-none" value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>

              <label className="font-semibold block mt-2">Rom More than:</label>

              <select
                className={`outline-none border border-solid border-color3 p-1 rounded w-full`}
                ref={romInputRef}
                onFocus={() => colorTogglerOnFocused(romInputRef, true)}
                onBlur={() => colorTogglerOnBlur(romInputRef, true)}
                onChange={(e) => setRom(e.target.value)}
              >
                {romMemory.map((item, i) => (
                  <option className=" outline-none" value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>

              <label className="font-semibold block mt-2">Price:</label>

              <Slider
                defaultValue={200000}
                value={price}
                onChange={priceHandler}
                aria-label="Default"
                valueLabelDisplay="auto"
                min={0}
                max={200000}
              />
            </div>
            {/* mobile Card Container */}

            <div
              className={`w-5/6 mx-auto flex flex-wrap mt-7 ${
                mobiles.length >= 3
                  ? "justify-between"
                  : mobiles.length === 2
                  ? "justify-around"
                  : "justify-center"
              } max-[800px]:flex-col-reverse max-[800px]:items-center`}
            >
              {loading ? (
                <Loader />
              ) : (
                mobiles.map((item) => (
                  <MobileCard
                    key={item._id}
                    _id={item._id}
                    name={item.name}
                    processor={item.processor}
                    os={item.os}
                    ram={item.ram}
                    image={item.images[0].url}
                    price={item.price}
                    rom={item.rom}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Mobiles;
