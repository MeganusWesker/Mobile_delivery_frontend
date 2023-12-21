import Navbar from "../Components/Navbar";
import Mobiles from "./Mobiles";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner">
        <h1 className="text-6xl max-[600px]:text-4xl">Welcome to The Site </h1>
        <p className="text-4xl my-4 max-[600px]:text-2xl">FIND AMAZING PRODUCTS BELOW</p>

        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>

      <Mobiles />
    </>
  );
};

export default Home;
