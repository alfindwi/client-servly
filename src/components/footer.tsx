import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="w-full px-10 text-gray-600 font-sans">
      <div className="max-w-full mx-auto py-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          <div className="flex flex-col justify-center py-6">
            <a href="#" className="flex items-center mb-4">
              <img
                src="./src/assets/logo.png"
                className=" w-45 mr-2"
                alt="Logo"
              />
            </a>

            <div className="flex text-2xl text-black  gap-3 mt-4">
              <div className="flex gap-3 border p-2 rounded-md border-[#0170b9]">
                <a
                  href="https://www.linkedin.com/in/alfin-dwi-wadani/"
                  target="_blank"
                >
                  <FaLinkedin className="text-[#0e76bc] cursor-pointer" />
                </a>
              </div>
              <div className="flex gap-3 border p-2 rounded-md border-[#0170b9]">
                <a href="https://www.instagram.com/alvindvvi" target="_blank">
                  <AiFillInstagram className="text-[#0e76bc] cursor-pointer" />
                </a>
              </div>
              <div className="flex gap-3 border p-2 rounded-md border-[#0170b9]">
                <a
                  href="https://open.spotify.com/user/alvindvvi"
                  target="_blank"
                >
                  <FaDiscord className="text-[#0e76bc] cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#272343] font-semibold text-base mt-2 mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2 text-md">
                <li>
                  <a
                    href="/"
                    className=" hover:underline transform duration-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className=" hover:underline transform duration-800"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="/how-it-works"
                    className=" hover:underline transform duration-800"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="/providers"
                    className=" hover:underline transform duration-800"
                  >
                    For Providers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-[#272343] font-semibold text-base mt-2 mb-4">
              Let's talk
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <IoMail className="w-4 h-4 text-[#0e76bc]" />
                Servly@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="w-4 h-4 text-[#0e76bc]" />
                +628123456789
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#272343] font-semibold text-base mt-2 mb-4">
              Find Us
            </h3>

            <div className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-[#0e76bc]" />

              <a
                href="https://maps.app.goo.gl/S31K5UDynniK7MFw6"
                target="_blank"
                className="hover:underline"
              >
                <p className="text-sm text-[#272343]/80 leading-relaxed">
                  Marchand Hype Station, <br />
                  Jl. Emerald Boulevard, Parigi, <br /> Kec. Pd. Aren, Kota
                  Tangerang Selatan,
                  <br />
                  Banten 15227
                </p>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 my-6" />

        <div className="text-center flex flex-col gap-1 text-xs text-[#646464] mt-4">
          <span>
            Copyright © 2025 Servly. All Rights Reserved. Made with ❤️ by{" "}
            <span className="font-semibold">Alfin Dwi</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
