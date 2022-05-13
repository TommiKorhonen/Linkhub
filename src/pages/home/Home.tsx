import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import previewImg from "../../assets/previewImg.png";
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[100px] grid lg:grid-cols-2 max-w-[1000px] mx-auto">
        <section className="flex flex-col gap-8 justify-center p-4">
          <h1 className="sm:text-7xl text-4xl font-bold text-gray-700">
            The best & only bio link you need
          </h1>
          <p className=" text-gray-500 text-xl">
            Share your links in one place!
          </p>
          <Link
            to="/signup"
            className=" bg-violet-500 w-96 text-center text-white py-4"
          >
            Join for free!
          </Link>
        </section>
        <section className="lg:flex hidden items-center justify-end">
          <img src={previewImg} alt="" />
        </section>
      </main>
    </>
  );
};

export default Home;
