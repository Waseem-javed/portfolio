"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <TypeAnimation
                sequence={[
                  "About Me",
                  1000,
                  "My Journey",
                  1000,
                  "My Story",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <div className="text-gray-300">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed text-justify">
              {`I'm a passionate Full Stack Software Engineer with a strong
              background in cybersecurity, with a passion for building clean, secure,
              and scalable applications using advance Technologies. My journey began at the University of Swabi, where I
              studied Computer Science and work with the department faculty member on CSS project which conferen submission system in 2019. After graduation I started my career at COMSATS Cyber
              Lab, working closely with a professor as a Full Stack Engineer.
              Together working with the team, we developed a cybersecurity product called Breach+,
              which later became the foundation for Cytomate, a Qatar-based
              cybersecurity company. I continued with Cytomate, contributing to
              the development and enhancement of its core products — Breach+,
              Sarab, and ASM. I later joined Averox as a Software and
              Cybersecurity Engineer, where I helped build real-time messaging
              and video calling apps for mobile and web, while also performing
              penetration testing on open-source platforms. Throughout my
              career, I've worked with several well-established organization like smartdealer, army service crops and some others organization as well and always
              focusing on building secure, user-friendly applications and
              contributing to cutting-edge solutions in the cybersecurity and
              software space. Beyond my professional roles, I have a strong
              entrepreneurial vision — I'm currently working on building
              SundayCode AI, a company focused on creating intelligent,
              impactful software products. My goal is to make SundayCode AI a
              leading name in AI-powered solutions, combining technical
              excellence with real-world usability. When I'm not coding, you'll
              find me exploring emerging tech, contributing to open-source, or
              mentoring aspiring developers. I believe in the power of
              collaboration, continuous learning, and using technology to make a
              real difference. If you're working on something exciting — or
              looking to turn an idea into reality — I'd love to connect and
              build something extraordinary together.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
