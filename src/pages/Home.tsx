import React from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full h-full flex items-center justify-center  text-blue-500 underline text-3xl">
      <Link to="/product">Go to product page</Link>
    </div>
  );
};

export default Home;
