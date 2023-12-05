import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

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
                  <div className="flex pt-3">
                <span className="flex list-none items-center ">
                  <span class="text-primary [&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      viewBox="0 0 24 24"
                      className="text-yellow-300"
                      fill="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>

                  <span class="text-primary [&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      className="text-yellow-300"
                      fill="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                  <span class="text-primary [&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      className="text-yellow-300"
                      fill="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                  <span class="text-primary [&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      className="text-yellow-300"
                      fill="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                  <span class="text-primary [&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      viewBox="0 0 24 24"
                      className="text-gray-300"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                </span>
                <a className="text-sm text-blue-400">(593)</a>
              </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};
export default AllProducts;
