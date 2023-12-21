import Navbar from "../Components/Navbar";
import Mobiles from "./Mobiles";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner">
        <h1 className="text-6xl">Welcome to The Site </h1>
        <p className="text-4xl my-4">FIND AMAZING PRODUCTS BELOW</p>

        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>

      <Mobiles />
    </>
  );
};

export default Home;
