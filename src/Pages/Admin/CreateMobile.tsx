// import Footer from "../../Components/Footer";
import SideBar from "../../Components/SideBar";
import { useState, useEffect,useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { createCourse } from "../../redux/action/courseAction";
import SmallLoader from "../../Components/SmallLoader";
import toast from "react-hot-toast";
import { colorTogglerOnBlur, colorTogglerOnFocused } from "../../utils/toggleFunctions";
import { createMobile } from "../../redux/action/mobileAction";
import {osType,ramMemory,romMemory} from "../../utils/interfaces"
import Navbar from "../../Components/Navbar";
 
const CreateMobile = () => {
  const [name, setName] = useState<string>("");
  const [processor, setProcessor] = useState<string>("");
  const [os, setOs] = useState<string>("");
  const [ram, setRam] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [rom, setRom] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [avatar, setAvatar] = useState<File>();
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const titleInputRef = useRef<HTMLDivElement>(null);
  const descInputRef = useRef<HTMLDivElement>(null);
  const priceInputRef = useRef<HTMLDivElement>(null);
  const typeInputRef = useRef<HTMLDivElement>(null);
  const osInputRef = useRef<HTMLSelectElement>(null);
  const romInputRef = useRef<HTMLSelectElement>(null);
  const ramInputRef = useRef<HTMLSelectElement>(null);
 

  const dispatch = useAppDispatch();
  const { error, message, loading } = useAppSelector((state) => state.mobile);

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    const fileReader = new FileReader();
    setAvatar(file);

    fileReader.onloadend = () => {
      setAvatarPreview(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("processor", processor);
    myForm.append("ram",ram);
    myForm.append("rom", rom);
    myForm.append("os", os);
    myForm.append("type", type);
    myForm.append("price", price);

    if (avatar) {
      myForm.append("file", avatar); // it wil throw an error if it was of type object why bcoz file is a blob type
    }

   dispatch(createMobile(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <>
    <Navbar/>
      <div className="grid grid-cols-1fr-5fr max-[800px]:grid-cols-1fr">
        <SideBar />

        <div>
          <h1 className="font-bold font-roboto text-3xl tracking-wider text-center mt-5">
            Add A Mo<span className="text-mainColor">bile</span>
          </h1>

          <div className="min-h-[30Vw] w-[25%] m-auto mt-5 p-2 max-[800px]:w-4/6">
            <form onSubmit={submitHanlder}>
              <label className="font-semibold block mb-1">Name</label>
              <div
                className={`flex border border-solid border-color3 p-1 rounded`}
                ref={titleInputRef}
              >
                <svg
                  className={`w-7 h-7 text-color3 dark:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <input
                  type="text"
                  name="name"
                  required
                  onFocus={() => colorTogglerOnFocused(titleInputRef)}
                  onBlur={() => colorTogglerOnBlur(titleInputRef)}
                  placeholder="Name"
                  className="outline-none text-base ml-3 font-thin w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <label className="font-semibold block mb-1">Price</label>
              <div
                className={`flex border border-solid border-color3 p-1 rounded`}
                ref={priceInputRef}
              >
                <svg
                  className={`w-7 h-7 text-color3 dark:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <input
                  type="number"
                  name="price"
                  required
                  onFocus={() => colorTogglerOnFocused(priceInputRef)}
                  onBlur={() => colorTogglerOnBlur(priceInputRef)}
                  placeholder="price"
                  className="outline-none text-base ml-3 font-thin w-full"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <label className="font-semibold block mb-1">Type</label>
              <div
                className={`flex border border-solid border-color3 p-1 rounded`}
                ref={typeInputRef}
              >
                <svg
                  className={`w-7 h-7 text-color3 dark:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <input
                  type="text"
                  name="Type"
                  onFocus={() => colorTogglerOnFocused(typeInputRef)}
                  onBlur={() => colorTogglerOnBlur(typeInputRef)}
                  placeholder="Type"
                  className="outline-none text-base ml-3 font-thin w-full"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>


              <label className="font-semibold block mt-2">Processor</label>
              <div className="flex border border-solid border-color3 p-1 rounded"
              ref={descInputRef}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6  text-color3"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

                <input
                  type="text"
                  name="description"
                  placeholder="Processor"
                  required
                  onFocus={() => colorTogglerOnFocused(descInputRef)}
                  onBlur={() => colorTogglerOnBlur(descInputRef)}
                  value={processor}
                  onChange={(e) => setProcessor(e.target.value)}
                  className="outline-none text-base ml-3 font-thin w-full"
                />
              </div>
              <label className="font-semibold block mt-2">Os</label>
         
              <select
                className={`outline-none border border-solid border-color3 p-1 rounded w-full`}
                ref={osInputRef}
                onFocus={() => colorTogglerOnFocused(osInputRef,true)}
                onBlur={() => colorTogglerOnBlur(osInputRef,true)}
                onChange={(e) => setOs(e.target.value)}
              >
                {osType.map((item, i) => (
                  <option className=" outline-none" value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>

              <label className="font-semibold block mt-2">
                Choose Ram Memory:
              </label>

              <select
                className={`outline-none border border-solid border-color3 p-1 rounded w-full`}
                ref={ramInputRef}
                onFocus={() => colorTogglerOnFocused(ramInputRef,true)}
                onBlur={() => colorTogglerOnBlur(ramInputRef,true)}
                onChange={(e) => setRam(e.target.value)}
              >
                {ramMemory.map((item, i) => (
                  <option className=" outline-none" value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>

              
              <label className="font-semibold block mt-2">
                Choose Rom Memory:
              </label>

              <select
                className={`outline-none border border-solid border-color3 p-1 rounded w-full`}
                ref={romInputRef}
                onFocus={() => colorTogglerOnFocused(romInputRef,true)}
                onBlur={() => colorTogglerOnBlur(romInputRef,true)}
                onChange={(e) => setRom(e.target.value)}
              >
                {romMemory.map((item, i) => (
                  <option className=" outline-none" value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>

              <label className="font-semibold block mt-2">Choose Image</label>
              <input
                type="file"
                accept="image/*"
                name="avatar"
                className="w-full p-2 fileUploader"
                onChange={fileHandler}
              />

              {avatarPreview && (
                <div className="w-full h-[50%] rounded  flex justify-center my-2">
                  <img
                    className="object-cover w-[50%] h-[100%] rounded"
                    src={avatarPreview}
                    alt=""
                  />
                </div>
              )}

              <button
                className="flex items-center justify-center w-[100%] group hover:border text-lg  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[12px] py-[6px] rounded font-roboto self-end transition duration-300 ease-in-out"
                disabled={loading}
              >
                {loading ? (
                  <SmallLoader />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white dark:text-white group-hover:text-mainColor2 mr-1"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
                  </svg>
                )}
                Create Mobile
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};


export default CreateMobile