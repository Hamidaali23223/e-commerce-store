import React, { useState } from "react";
import { GrAtm } from "react-icons/gr";
import { Rating, Typography } from "@material-tailwind/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomRating from "../components/CustomRating";
const Product = () => {
  const [rated, setRated] = React.useState(4);
  return (
    <section className="h-[100%] bg-gray-200 ">
      {/* header */}
      <Navbar />
      <div className=" bg-white flex flex-col m-12 md:flex-row">
        {/* <div className=" m-6 pt-4 bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"> */}
        {/* count 1 */}
        <div className="card gap-1 w-96">
          <img
            className="rounded-sm p-2 w-96"
            src="https://static-01.daraz.pk/p/69d2768a31963b68e04e964bf685a01f.jpg_750x750.jpg_.webp"
            alt="img 1"
          />
          {/* sm img */}
          <hr />
          <div className="">
            <dir className="flex p-0 justify-center gap-2 ">
              <div className="arrow mt-3">
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
              <img
                className="w-14 h-14"
                src="https://static-01.daraz.pk/p/69d2768a31963b68e04e964bf685a01f.jpg_750x750.jpg_.webp"
                alt="img4"
              />
              <div className="arrow mt-3">
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
        <div className="flex-1 flex flex-col gap-1 p-2 bg-white pt-2">
          <p className="text-xl tracking-tighter text-justify ">
            K8 Wireless Microphone 2 in 1 Connector Plug & Play USB Type C Plug
            Wireless Lavalier Microphone Mic For Recording Vlog Auto Sync Noise
            Reduction NO APP or Bluetooth Needed
          </p>
          {/* stars */}
          <div className="flex gap-2 pt-3">
            <CustomRating />
            <a className="text-sm mt-1 text-blue-400">593 Ratings</a>
          </div>
          <div className="flex items-center justify-between">
            <a className="text-sm flex gap-1 pt-1 text-blue-400">
              <p className="text-black ">Brand: </p>
              Empires Mart
            </a>

            <div className="w-20 gap-2 flex">
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
          <div className="p-4">
            <label className="flex gap-3 text-sm text-gray-500">
              Color family
              <p className="text-black">Blue</p>
            </label>
            <div className="flex gap-3 justify-center">
              <span className="w-7 h-7 bg-red-500"></span>
              <span className="w-7 h-7 bg-blue-300"></span>
              <span className="w-7 h-7 bg-purple-600"></span>
              <span className="w-7 h-7 bg-pink-200"></span>
              <span className="w-7 h-7 bg-amber-300"></span>
            </div>
          </div>
          {/* + - */}
          <div className="mt-5">
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
            <div className="flex gap-3 mt-2 p-1 justify-center">
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
        <div className="delivery p-2 bg-slate-50 pt-2">
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
            {/* location */}
            <div className="location items-center gap-1 flex">
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
          <hr className="mt-4" />
          <div className="card-body mt-6">
            {/* Delivery mathord */}
            <span className="flex gap-3">
              <svg
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" />{" "}
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />{" "}
                <circle cx="5.5" cy="18.5" r="2.5" />{" "}
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <div className="flex gap-2">
                <label className="text-10 font-bold">Standard Delivery</label>
                <p className="text-sm">16 Dec - 31 Dec</p>
              </div>
            </span>
            <div className="flex justify-between m-2">
              <p className="text-sm">11 - 26 day(s)</p>
              <label className="text-8 font-bold">Rs. 110</label>
            </div>
            {/* Payment mathord */}
            <div className="flex mt-10 gap-3">
              <GrAtm className="w-5 h-5 text-gray-500" />
              <label className="text-6 font-bold">
                Cash on Delivery Available
              </label>
            </div>
          </div>
          <hr className="p-2 mt-4" />
          {/* Service */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <label className="text-sm">Service</label>
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
            {/* return */}
            <div className="flex gap-3">
              <svg
                class="h-5 w-5 pt-1 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="23 4 23 10 17 10" />{" "}
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              <label className="">
                14 days free & easy return
                <p className="text-sm text-gray-400">
                  Change of Mind applicable
                </p>
              </label>
            </div>
            {/* Warranty */}
            <div className="flex gap-3">
              <svg
                class="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />{" "}
                <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />{" "}
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
              <label className="">Warranty not available</label>
            </div>
            {/* verifide */}
            <div className="flex gap-3 mt-4">
              <svg
                class="h-8 w-8 text-blue-900"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 12l2 2l4 -4" />
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              </svg>
              <label className="text-lg font-bold text-blue-900">
                Verified By Empires
              </label>
            </div>
            <hr />
            <div className="">
              <p className="text-sm text-gray-500">Sold by</p>
              <div className="flex justify-between">
                <label className="">Hafstore (Karachi)</label>
                <a className="text-blue-700 font-bold">CHAT</a>
              </div>
              <div className="flex">
                <div className="flex flex-col border justify-between p-1 h-20">
                  <p className="text-sm text-gray-500 w-24">
                    Positive Seller Ratings
                  </p>
                  <label className="text-2xl font-bold w-28">83%</label>
                </div>
                <div className="flex flex-col border justify-between p-1 h-20">
                  <p className="text-sm text-gray-500">Ship on Time</p>
                  <label className="text-2xl font-bold">100%</label>
                </div>
                <div className="flex flex-col border justify-between p-1 h-20">
                  <p className="text-sm text-gray-500 w-24">
                    Chat Response Rate
                  </p>
                  <label className="text-2xl font-bold">91%</label>
                </div>
              </div>
              <a className="flex justify-center mt-2">Visit Store</a>
            </div>
          </div>
          <div className="service"></div>
        </div>
      </div>
      {/* body */}
      <div className=" bg-gray-200 flex m-12">
        <div className=" bg-white mr-4 flex flex-col flex-grow">
          <div className="header bg-slate-200 shadow-md shadow-gray-400">
            <label className="text-sm p-2">Ratings & Reviews</label>
          </div>
          <div className="header-body items-center text-center flex p-4">
            <div className="items-center font-bold text-blue-gray-500">
              <a className="text-3xl">{rated}.7</a>
              <Rating
                value={4}
                className="flex mt-2 text-yellow-400"
                onChange={(value) => setRated(value)}
              />
              <Typography
                color="blue-gray"
                className="font-medium mt-2 text-blue-gray-500"
              >
                Based on 134 Reviews
              </Typography>
            </div>

            {/* Ratings */}
            <div className="flex items-start flex-col p-2">
              {/* Advanced Rating  1 */}
              <div className="flex items-center gap-2">
                <CustomRating />
                <span className="flex rounded-md bg-gray-300 w-52 h-2">
                  <span className="w-32 h-2 rounded-md bg-yellow-500"></span>
                </span>
                <a>120</a>
              </div>
              {/* Advanced Rating  2 */}
              <div className="flex justify-center items-center gap-2">
                <CustomRating />
                <span className="flex rounded-md bg-gray-300 w-52 h-2">
                  <span className="w-52 h-2 rounded-md bg-yellow-500"></span>
                </span>
                <a>60</a>
              </div>
              {/* Advanced Rating  3 */}
              <div className="flex justify-center items-center gap-2">
                <CustomRating />
                <span className="flex rounded-md bg-gray-300 w-52 h-2">
                  <span className="w-12 h-2 rounded-md bg-yellow-500"></span>
                </span>
                <a>16</a>
              </div>
              {/* Advanced Rating  4 */}
              <div className="flex justify-center items-center gap-2">
                <CustomRating />
                <span className="flex rounded-md bg-gray-300 w-52 h-2">
                  <span className="w-28 h-2 rounded-md bg-yellow-500"></span>
                </span>
                <a>47</a>
              </div>
              {/* Advanced Rating  5 */}
              <div className="flex justify-center items-center gap-2">
                <CustomRating />
                <span className="flex rounded-md bg-gray-300 w-52 h-2">
                  <span className="w-40 h-2 rounded-md bg-yellow-500"></span>
                </span>
                <a>2</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="header bg-slate-100 h-12 m-4 shadow-sm shadow-gray-200">
            <label className="text-sm align-bottom inline-block p-2">
              Product details of Drone Camera Remote Control Foldable Drone
              Camera | Foldable Drone Low Price Camera With 480p Wide Angle
              Drone Selfie
            </label>
          </div>
          <div className="justify-start m-8">
            <div className="div-1 justify-between flex">
              <ul className="list-disc mx-4 text-sm">
                <li>Quadrocopter Battery: 3.7V 1600mAh lithium battery</li>
                <li>With foldable arms, it is compact and connect to APP,</li>
                <li>or APK system to take pictures and function,</li>
                <li>you can easily find the way home Fligh</li>
                <li>Charging time: 60 minutes Remote control</li>
                <li>distance：80 to120 meters Motor: 816 coreless motor</li>
                <li>distance：80 to120 meters Motor: 816 coreless motor</li>
                <li>distance：80 to120 meters Motor: 816 coreless motor</li>
                <li>altitude hold mode, WiFi FPV, trajectory flight</li>
              </ul>
              <div className="dev-2">
                <ul className="list-disc mx-4 text-sm">
                  <li>
                    Charging time: 60 minutes Remote control Motor: 816 coreless
                    motor
                  </li>
                  <li>
                    distance：80 to meters Motor: 816 coreless motor Motor: 816
                    coreless motor
                  </li>
                  <li>
                    distance：80 to120 meters Motor: 816 coreless motor Motor:
                    816 coreless motor
                  </li>
                  <li>
                    distance：80 to120 meters Motor: 816 coreless moto Motor:
                    816 coreless motorr
                  </li>
                  <li>
                    altitude hold mode, WiFi FPV, trajectory flight Motor: 816
                    coreless motor
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="header bg-slate-100 h-12 m-4 shadow-sm shadow-gray-200">
            <p className="truncate w-[60rem] p-2">
              Specifications of Drone Camera Remote Control Foldable Drone
              Camera | Foldable Drone Low Price Camera With 480p Wide Angle
              Drone Selfie WIFI Camera - Quadcopter Drone Foldable Camera
            </p>
          </div>
          <div className="flex justify-between tracking-tighter m-6">
            <span className="flex flex-col flex-grow justify-start">
              <p className=" text-gray-400">
                Brand
                <p className="text-black">No Brand</p>
              </p>
              <p className=" text-gray-400">
                Apparel
                <p className="text-black">Casual</p>
              </p>
            </span>
            <span className="flex flex-col justify-start flex-grow">
              <p className=" text-gray-400">
                SKU
                <p className="text-black">350981723_PK-1782342447</p>
              </p>
              <p className=" text-gray-400">
                Age Range
                <p className="text-black">Standard</p>
              </p>
            </span>
          </div>
          <p className="flex gap-10 mx-6 tracking-tighter text-gray-400">
            What’s in the box
            <p className="text-black">1 x hoodie and a trouser</p>
          </p>
          <hr />
          <div className="m-6">
            <p className="tracking-tighter">What people like about it</p>
            <span className="flex m-4 tracking-tighter text-gray-400 justify-between">
              <p className="flex gap-4">
                <a>
                  <CustomRating />
                </a>
                Muhammad K.
              </p>
              <p className="text-sm">1 year ago</p>
            </span>
            <div className="bg-gray-200 rounded-md">
              <p className="text-red-600 flex justify-between tracking-tighter">
                Seller Response
                <a className="text-gray-400 text-sm">1 year ago</a>
              </p>
              <p>Thank you very much for your order :-</p>
            </div>
            <div className="flex flex-col m-3 gap-3">
              <p className="text-sm tracking-tighter">
                quality to bahut acchi lag rahi hai Pasand bhi aaya First time
                Jo order Kiya hai vahi Mila online thanks dear
              </p>
              <div className="flex gap-3">
                <img
                  className="w-20 h-20 rounded-md"
                  src="https://sg-test-11.slatic.net/other/roc/53ef1b73d8a056a9bca51aff046fcb1e.jpg_500x500.jpg_.webp"
                />
                <img
                  className="w-20 h-20 rounded-md"
                  src="https://sg-test-11.slatic.net/other/roc/dfae8240e23cf24bccd8f99e4a044f2d.jpg_500x500.jpg_.webp"
                />
              </div>
            </div>
            <hr />
            {/* respons 2 */}
            <span className="flex mt-2 m-4 tracking-tighter text-gray-400 justify-between">
              <p className="flex gap-4">
                <CustomRating />
                Shahveer K.
              </p>
              <p className="text-sm">1 year ago</p>
            </span>
            <div className="bg-gray-200 rounded-md">
              <p className="text-red-600 flex justify-between tracking-tighter">
                Seller Response
                <a className="text-gray-400 text-sm">1 year ago</a>
              </p>
              <p>Thank you very much for your order :-</p>
            </div>
            <div className="flex flex-col m-3 gap-3">
              <p className="text-sm tracking-tighter">
                quality to bahut acchi lag rahi hai Pasand bhi aaya First time
                Jo order Kiya hai vahi Mila online thanks dear
              </p>
              <div className="flex gap-3">
                <img
                  className="w-20 h-20 rounded-md"
                  src="https://sg-test-11.slatic.net/other/roc/3b16283291de4e7efd176b5f6d569175.jpg_500x500.jpg_.webp"
                />
              </div>
              <div></div>
            </div>
          </div>
          <hr />
        </div>
        {/* items */}
        <div className="flex-shrink">
          <div className="cards shadow-md shadow-gray-250 bg-white h-80">
            <div className="flex justify-center items-center">
              <img
                className="w-48 h-48"
                src="https://static-01.daraz.pk/p/192e64e1b2a7d5c1e17a008be359344e.jpg_188x188.jpg_.webp"
              />
            </div>
            <div className="text w-60 p-2">
              <span className="w-12">
                Drone Camera Remote Control Foldable Drone Camera
              </span>
              <br />
              <label className="text-red-500 text-lg">Rs: 12000</label>
              <br />
              <div className="flex gap-1 text-sm">
                <span className="line-through">15000</span>
                <p>-44%</p>
              </div>
            </div>
          </div>
          <hr />
          {/* card 2 */}
          <div className="cards shadow-md shadow-gray-250 bg-white h-80">
            <div className="flex justify-center items-center">
              <img
                className="w-48 h-48"
                src="https://static-01.daraz.pk/p/192e64e1b2a7d5c1e17a008be359344e.jpg_188x188.jpg_.webp"
              />
            </div>
            <div className="text w-60 p-2">
              <span className="w-12">Drone Camera Remote Control</span>
              <br />
              <label className="text-red-500 text-lg">Rs: 12000</label>
              <br />
              <div className="flex gap-1 text-sm">
                <span className="line-through">15000</span>
                <p>-44%</p>
              </div>
            </div>
          </div>
          <hr />
          {/* card 3 */}
          <div className="cards shadow-md shadow-gray-250 bg-white h-80">
            <div className="flex justify-center items-center">
              <img
                className="w-48 h-48"
                src="https://static-01.daraz.pk/p/192e64e1b2a7d5c1e17a008be359344e.jpg_188x188.jpg_.webp"
              />
            </div>
            <div className="text w-60 p-2">
              <span className="w-12">Drone Camera Remote Control</span>
              <br />
              <label className="text-red-500 text-lg">Rs: 12000</label>
              <br />
              <div className="flex gap-1 text-sm">
                <span className="line-through">15000</span>
                <p>-44%</p>
              </div>
            </div>
          </div>
          <hr />
          {/* card 4 */}
          <div className="cards shadow-md shadow-gray-250 bg-white h-80">
            <div className="flex justify-center items-center">
              <img
                className="w-48 h-48"
                src="https://static-01.daraz.pk/p/192e64e1b2a7d5c1e17a008be359344e.jpg_188x188.jpg_.webp"
              />
            </div>
            <div className="text w-60 p-2">
              <span className="w-12">Drone Camera Remote Control</span>
              <br />
              <label className="text-red-500 text-lg">Rs: 12000</label>
              <br />
              <div className="flex gap-1 text-sm">
                <span className="line-through">15000</span>
                <p>-44%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Product;
