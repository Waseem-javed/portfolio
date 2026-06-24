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

          <div className="dark:text-gray-300 text-gray-700">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed text-justify">
              <span>
                I am <span className="font-bold text-blue-400">Waseem Javed</span>, a <span className="font-bold text-pink-400">Software Engineer</span> and <span className="font-bold text-purple-400">Offensive Security Specialist</span>. My journey began at the <span className="font-semibold text-blue-300">University of Swabi</span>, where I studied <span className="font-semibold text-orange-300">Computer Science</span> and worked with the department faculties on the <span className="font-bold text-green-400">CSS (Conference Submission System)</span> project in 2019. After graduation, I started my career at <span className="font-semibold text-blue-400">COMSATS Cyber Lab</span>, working closely with a professor as a <span className="font-bold text-purple-400">Full Stack Engineer</span>.
                <br />
                Together with the team, we developed cybersecurity products like <span className="font-bold text-yellow-400">Breach+</span>, <span className="font-bold text-teal-400">Sarab</span>, and <span className="font-bold text-blue-400">ASM (Attack Surface Management)</span>. <span className="font-semibold text-yellow-400">Breach+</span> later became the foundation for <span className="font-bold text-pink-400">Cytomate</span>, a Qatar-based cybersecurity company. I continued with Cytomate, contributing to the development and enhancement of its core products <span className="font-bold text-yellow-400">Breach+</span>, <span className="font-bold text-teal-400">Sarab</span>, and <span className="font-bold text-blue-400">ASM</span>.
                <br />
                I later joined <span className="font-bold text-green-400">Averox</span> as a <span className="font-bold text-purple-400">Software and Cybersecurity Engineer</span>, where I helped build <span className="font-semibold text-orange-300">real-time messaging</span> and <span className="font-semibold text-orange-300">video calling apps</span> for <span className="font-semibold text-blue-300">mobile and web</span>, while also performing <span className="font-bold text-red-400">security testing</span> on open-source platforms as well as our own web and mobile applications.
                <br />
                Throughout my career, I've worked with several well-established organizations like <span className="font-bold text-yellow-300">Army Service Corps</span>, <span className="font-bold text-green-400">Smartdealer</span>, and others, always focusing on building <span className="font-semibold text-blue-400">secure</span>, <span className="font-semibold text-pink-400">user-friendly applications</span> and contributing to <span className="font-bold text-purple-400">cutting-edge solutions</span> in the <span className="font-bold text-blue-300">cybersecurity</span> and <span className="font-bold text-green-300">software</span> space.
                <br />
                Beyond my professional roles, I have a strong <span className="font-bold text-yellow-400">entrepreneurial vision</span>. I founded <span className="font-bold text-pink-400">SundayCode AI</span> in 2023—an <span className="font-bold text-blue-400">AI-focused company</span> dedicated to developing <span className="font-bold text-red-400">security products</span> and other intelligent software solutions. My goal is to make <span className="font-bold text-pink-400">SundayCode AI</span> a leading name in <span className="font-bold text-blue-400">AI-powered solutions</span>, combining <span className="font-semibold text-green-300">technical excellence</span> with <span className="font-semibold text-orange-300">real-world usability</span>.
                <br />
                When I'm not coding, you'll often find me <span className="font-bold text-cyan-300">exploring emerging tech</span>, <span className="font-bold text-blue-400">freely contributing to anyone's projects</span>, or <span className="font-bold text-purple-300">mentoring aspiring developers</span>. I believe in the power of <span className="font-bold text-yellow-300">collaboration</span>, <span className="font-bold text-lime-400">continuous learning</span>, and using technology to make a <span className="font-semibold text-pink-400">real difference</span>. If you're working on something exciting or looking to turn an idea into reality, I'd love to connect and build something extraordinary together.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
