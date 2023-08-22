import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>W-Aff - Link On Bio untuk Produk Affiliate</title>
      </Helmet>
      <Navbar />
      <div className="flex-grow flex items-center mt-20 flex-col mb-20">
        <div className="flex items-center flex-col">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-center max-w-4xl leading-[1.15]">
            <span className="text-orange-600">
              Tingkatkan Penghasilan {" "}
            </span>
            <br />
            Online Anda
          </h1>
          <p className="mt-2 mx-4 lg:text-lg text-center ">

            Tingkatkan Konversi Anda dengan Landing Page yang Menarik dan Simpel!.
          </p>
          <div className="flex items-center border-2 border-orange-600 rounded-full pr-3 pl-5 py-2 mt-7 md:mt-14">
            <p className="lg:text-xl font-medium">{window.location.origin}/</p>
            <form className="flex" action="/signup">
              <input
                type="text"
                className="lg:text-xl outline-none lg:w-36 w-24"
                placeholder="tokokamu"
                required
                name="name"
              />
              <button
                type="submit"
                className="lg:text-lg font-medium hover:bg-orange-700 py-3 px-6 bg-orange-600 text-white rounded-full"
              >
                Buat Gratis
              </button>
            </form>
          </div>

        </div>
        <p className="mt-4 text-center mr-6">
          <span className="opacity-80">
            Kami memahami betapa pentingnya menarik perhatian audiens Anda sekaligus memberikan informasi yang jelas.
            <br/>
            Gunakan W-Aff sebagai platform Anda untuk pemasaran produk affiliate dan pamerkan produk affiliate Anda.
            <br />
          </span>

        </p>
        <div className="mt-6 text-center w-full px-16">
          <h2 className="font-semibold text-2xl lg:text-4xl">
            Satu link buat kumpulan produk affiliate kamu
          </h2>
          <p className="mt-3 lg:text-lg">
            Mudah atur produk, atur tampilan, analisa pengunjung, dan lain-lain
          </p>
          <div className="grid lg:grid-cols-3 items-center justify-between gap-x-3 w-full mt-10">
            <div className="col-span-1 bg-white text-left p-4 rounded-md shadow-md">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Icon icon="ic:outline-query-stats" width="24" />
                Analisa Pengunjung
              </div>
              <p className="opacity-80 leading-snug text-left mt-2">
                Ketahui pengunjung kamu dengan mudah secara realtime.
              </p>
            </div>

            <div className="col-span-1 bg-white text-left p-4 rounded-md shadow-md">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Icon icon="icon-park:ad-product" width="24" />
                Atur Produk Affiliate
              </div>
              <p className="opacity-80 leading-snug text-left mt-2">
                Atur produk yang ingin dibagikan dengan mudah.
              </p>
            </div>

            <div className="col-span-1 bg-white text-left p-4 rounded-md shadow-md">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Icon icon="fluent:paint-brush-16-regular" width="24" />
                Kostumisasi Tampilan
              </div>
              <p className="opacity-80 leading-snug text-left mt-2">
                W-Aff nyediain berbagai fitur kostumisasi buat toko kamu
              </p>
            </div>
          </div>
          <Link
            to="/signup"
            className="mt-12 p-5 inline-block bg-orange-600 text-white rounded-md hover:bg-orange-700 font-medium text-lg lg:text-xl"
          >
            Coba Sekarang - Gratis!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
