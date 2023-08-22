import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";
import { Helmet } from "react-helmet-async";

const faqItems = [
  {
    title: "Apa itu W-Aff?",
    body: "W-Aff adalah platform bio link khusus untuk produk afiliasi. Dengan W-Aff, Anda dapat membuat halaman khusus yang memungkinkan Anda membagikan berbagai produk afiliasi Anda dalam satu tautan.",
  },
  {
    title: "Apakah W-Aff berbayar?",
    body: "Tidak, penggunaan platform W-Aff sepenuhnya gratis. Kami percaya dalam mendukung para pemasar afiliasi dengan memberikan alat yang berguna tanpa biaya.",
  },
  {
    title: "Apakah saya perlu pengetahuan teknis?",
    body: "Tidak sama sekali. W-Aff dirancang untuk kemudahan penggunaan. Anda hanya perlu memasukkan produk afiliasi Anda dan mengatur tampilannya sesuai preferensi Anda. Teknisitasnya sudah kami tangani.",
  },
  {
    title: "Bagaimana cara mengatur produk dan tata letak tautan?",
    body: "Setelah masuk ke akun Anda sebagai pengelola toko, Anda akan memiliki akses ke tata letak produk dan tautan. Di sana Anda dapat mengelola produk dan tautan yang ingin Anda bagikan kepada pengunjung.",
  },
  {
    title: "Apakah saya bisa menyesuaikan tampilan halaman saya?",
    body: "Tentu saja! Di W-Aff, Anda dapat mengkostumisasi tampilan halaman Anda. Anda bisa menambahkan tautan ke berbagai situs web Anda, menambahkan bio, dan mengatur tema warna sesuai dengan preferensi merek Anda.",
  },
  {
    title: "Apa yang harus saya lakukan jika saya tidak menerima email verifikasi?",
    body: "Jika Anda tidak menemukan email verifikasi di kotak masuk Anda, coba periksa folder spam. Jika masalah masih berlanjut, jangan ragu untuk menghubungi tim kami melalui alamat email W-Affdev@gmail.com.",
  },
  {
    title: "Bagaimana saya dapat menghubungi dukungan jika saya mengalami kesulitan?",
    body: "Anda dapat menghubungi tim dukungan kami melalui email di W-Affdev@gmail.com atau melalui tautan yang tercantum di bagian footer website kami. Kami siap membantu Anda dengan segala pertanyaan atau kendala yang Anda hadapi.",
  },
];


function Faq() {
  return (
    <>
      <Helmet>
        <title>FAQ | W-Aff</title>
      </Helmet>
      <Navbar />
      <div className="flex flex-col items-center mt-8 mb-16">
        <h1 className="font-semibold text-center text-2xl lg:text-4xl">
          Frequently Asked Questions🤔
        </h1>
        <div className="flex flex-col items-start gap-3 mt-8 w-11/12 lg:w-2/3">
          {faqItems.map((faqItem, i) => (
            <Disclosure
              key={i}
              as="div"
              className="border-[1px] border-gray-300 rounded-lg  w-full"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`md:text-lg px-6 py-4 font-semibold w-full text-left flex items-center justify-between ${open && "text-orange-600"
                      }`}
                  >
                    {faqItem.title}
                    {open ? (
                      <Icon icon="akar-icons:minus" width="24" />
                    ) : (
                      <Icon icon="bi:plus" width="32" />
                    )}
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 px-6 pb-4 w-11/12 ">
                      {faqItem.body}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
