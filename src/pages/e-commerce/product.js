import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const product = () => {
  return (
    <section className="mx-2.5 h-[100%] bg-gray-200 ">
    
        {/* header */}
        <Navbar />
        <div className="main">
          {/* <div className=" m-6 bg-white flex flex-col md:flex-row gap-2"> */}
          <div className=" m-6 pt-4 bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {/* count 1 */}
            <div className="card shadow-sm gap-2 shadow-gray-400  flex flex-col items-center">
              <img
                className="w-80 rounded-sm h-[350px] p-2 "
                src="https://static-01.daraz.pk/p/69d2768a31963b68e04e964bf685a01f.jpg_750x750.jpg_.webp"
                alt="img 1"
              />
              {/* sm img */}
              <div className="sm-img justify-center">
                <dir className="flex m-0 p-2 gap-2">
                  <div className="arrow pt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <img
                    className="w-14 h-14"
                    src="https://static-01.daraz.pk/p/69d2768a31963b68e04e964bf685a01f.jpg_750x750.jpg_.webp"
                    alt="img1"
                  />
                  <img
                    className="w-14 h-14"
                    src="https://static-01.daraz.pk/p/69d2768a31963b68e04e964bf685a01f.jpg_750x750.jpg_.webp"
                    alt="img2img2"
                  />
                  <img
                    className="w-14 h-14"
                    src="https://static-01.daraz.pk/p/69d2768a31963b68e04e964bf685a01f.jpg_750x750.jpg_.webp"
                    alt="img3"
                  />
                  <img
                    className="w-14 h-14"
                    src="https://static-01.daraz.pk/p/69d2768a31963b68e04e964bf685a01f.jpg_750x750.jpg_.webp"
                    alt="img4"
                  />
                  <div className="arrow pt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </dir>
              </div>
            </div>
            {/* count 2 */}
            <div className=" bg-white ">
              <p className="text-lg font-semibold text-justify">
                Premium Quality Bulbs and Leaves "10"Feet Fairy Light & "6"Feet
                Artificial Leaves Length Luminous Romantic and Aesthetic Look
                for Room and Party Decoration-Indoor and Outdoor-(Cells
                included)-Bedroom Vine Creepers
              </p>
              {/* stars */}
              <div className="flex pt-3">
                <span className="flex list-none items-center ">
                  <span class="text-primary [&>svg]:h-5 [&>svg]:w-5">
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

                  <span class="text-primary [&>svg]:h-5 [&>svg]:w-5">
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
                  <span class="text-primary [&>svg]:h-5 [&>svg]:w-5">
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
                  <span class="text-primary [&>svg]:h-5 [&>svg]:w-5">
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
                  <span class="text-primary [&>svg]:h-5 [&>svg]:w-5">
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
                </span>
                <a className="text-sm text-blue-400">593 Ratings</a>
              </div>
              <div className="flex items-center justify-between">
                <a className="text-sm flex gap-1 pt-1 text-blue-400">
                  <p className="text-black ">Brand: </p>
                  Empires Mart
                </a>

                <div className="w-12 gap-3 flex">
                  <svg
                    class="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <svg
                    class="h-6 w-6 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="p-4">
                <label className="text-red-500 flex font-semibold text-3xl">
                  <p className="">Rs. </p>
                  2000
                </label>

                <div className="flex gap-1 text-sm">
                  <span className="line-through font-light">Rs. 3600</span>
                  <p className="font-semibold">-44%</p>
                </div>
              </div>
              {/* + - */}
              <div className="">
                <span className="flex justify-center gap-5">
                  <label className="font-semibold">Quantity</label>
                  <svg
                    class="h-7 w-7 p-1 bg-slate-300"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  <div className="numbe">1</div>
                  <svg
                    class="h-7 w-7 bg-slate-300 p-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <label className="text-sm">Only 3 items left</label>
                </span>
                <div className="flex gap-3 p-3 justify-center">
                  <button className="bg-sky-400 hover:bg-sky-500 w-56 h-12">
                    Buy Now
                  </button>
                  <button className="bg-orange-400 hover:bg-orange-500 w-56 h-12">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            {/* count 3 */}
            <div className="delivery p-2 bg-white">
              <div className="dev-header">
                <div className="flex justify-between">
                  <label className="text-sm">Delivery</label>
                  <svg
                    class="h-5 w-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="location items-center gap-1 p-2 flex">
                  <svg
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="w-44 text-sm">
                    Islamabad, Islamabad - Banni Gaala, Hill View Road
                  </span>
                  <a className="text-emerald-400">CHANGE</a>
                </div>
              </div>
              <hr className="p-2 " />
              <div className="dev-body">nuhihkg</div>
              <div className="service"></div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default product;
