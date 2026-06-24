"use client";

import React from "react";
import { Image, Typography } from "antd";
import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import MY_IMAGE from "assets/images/waseem.jpeg";

import SundayCode from "assets/images/sundaycode.jpg";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mx-auto md:mx-0 mb-8 md:mb-0">
            <div className="relative w-full aspect-square">
              {/* Animated pulse waves */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-red-500/20 animate-pulse-wave"></div>
                <div
                  className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-br from-blue-500/30 to-red-500/30 animate-pulse-wave"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-500/40 to-red-500/40 animate-pulse-wave"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-500/50 to-red-500/50 animate-pulse-wave"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Spinning gradient rings */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-spin-slow"></div>
                <div
                  className="absolute inset-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full animate-spin-slow"
                  style={{ animationDirection: "reverse" }}
                ></div>
                <div className="absolute inset-8 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full animate-spin-slow"></div>
                <div
                  className="absolute inset-12 bg-gradient-to-br from-blue-500/50 to-purple-500/50 rounded-full animate-spin-slow"
                  style={{ animationDirection: "reverse" }}
                ></div>
              </div>

              {/* Profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={MY_IMAGE}
                  preview={false}
                  width={300}
                  height={300}
                  className="rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-cover"
                  alt="Waseem Javed"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "Hi, I'm Waseem Javed",
                  1000,
                  "Founder of Sunday Code",
                  1000,
                  "Software Engineer",
                  1000,
                  "Offensive Security Specialist",
                  1000,
                  "",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-2">
            <a
              download
              type="pdf"
              href={"/waseemjaved.pdf"}
              className="flex items-center gap-2 px-1 my-auto sm:px-6 py-2 sm:py-3 border-2 dark:border-white/40 border-gray-400 rounded-full text-sm sm:text-base font-medium dark:hover:bg-white/10 hover:bg-gray-100 dark:text-white text-gray-800 transition-all duration-300"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 dark:text-white text-gray-700" />
              <Text className="dark:text-white text-gray-800">Download Resume</Text>
            </a>
            <Link
              to="https://sundaycode.tech"
              target="_blank"
              className="flex bg-white items-center px-1 sm:px-6 border border-white text-[#ef1e25] hover:text-[#ef1e25] hover:border-[#ef1e25] rounded-full text-sm sm:text-base font-medium hover:bg-white transition-colors font-semibold"
            >
              <Image
                preview={false}
                height={24}
                width={24}
                className="h-8 w-8 rounded-full"
                src={SundayCode}
                alt="sundaycode"
              />{" "}
              Sunday Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
