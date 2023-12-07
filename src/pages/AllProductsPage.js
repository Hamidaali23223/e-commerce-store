import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomRating from "../components/CustomRating";

const AllProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetcData = async () => {
      const res = await fetch("https://jsonserver.reactbd.com/amazonpro", {
        cache: "no-cache",
      });
      if (!res.ok) {
        console.error("Failed to fetch products");
      }
      const data = await res.json();
      setProduct(data);
      console.log("res", data);
    };
    fetcData();
  }, []);

  return (
    <section className="justify-center bg-gray-200 ">
      {/* Header */}
      <Navbar />
      {/* banner */}
      <div className="banner">
        <img
          className=" shadow-md shadow-gray-400 h-[500px]"
          src="https://icms-image.slatic.net/images/ims-web/b9ca343b-c4ed-4830-917a-5ef471b00f00.png"
          alt="img"
        />
      </div>
      {/* main body */}
      <div className="main p-12">
        <label className="h-40 text-3xl font-bold">Just For You</label>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {product?.map((item) => (
            <div className="cards  shadow-md shadow-gray-250 bg-white h-80">
              <div className="flex justify-center items-center">
                <img className="w-48 h-48" src={item.image} alt="" />
              </div>
              <div className="text p-2">
                <span className="">
                  {item.title}
                  <br />
                </span>
                <label className="text-red-500 text-lg">Rs: {item.price}</label>
                <br />
                <div className="flex gap-1 text-sm">
                  <span className="line-through">{item.previousPrice}</span>
                  <p>-44%</p>
                </div>
                <CustomRating />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default AllProducts;
