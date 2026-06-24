import React from "react";
import { Row, Col, Image } from "antd";
import { Clock10 } from "lucide-react";

const experienceData = [
  {
    role: "Founder and CEO",
    company: "Sunday Code AI",
    duration: "Present",
    description:"Founded Sunday Code AI, an innovative startup focused on developing AI-powered solutions for businesses. Leading a team of developers and data scientists to create cutting-edge products that leverage artificial intelligence to solve real-world problems.",
    icon: Clock10,
    logo: "https://sundaycode.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsundaycode.0qyzhzbd8ogo4.jpg&w=384&q=75",
  },
  {
    role: "Research and Development Manager",
    company: "Smart Dealer",
    duration: "Present",
    description:
      "Managed a development team using proper Scrum practices, driving digital transformation and process improvements.",
    icon: Clock10,
    logo: "https://smartdealer.pk/static/media/Logo.86d2e7bfddc635b690b5.jpg",
  },
  {
    role: "Software and Cyber Engineer",
    company: "Averox",
    duration: "Dec 2024 - May 2025",
    description:
      "Leading development of enterprise applications using React, Node.js, and cloud technologies. Implementing CI/CD pipelines and microservices architecture.",
    icon: Clock10,
    logo: "https://averox.com/wp-content/uploads/2026/05/averox-logo-black.png.pagespeed.ce.0HQNtGNhIs.png",
  },
  {
    role: "Full Stack Engineer",
    company: "Cytomate",
    duration: "June 2022 - Sep 2024",
    description:
      "Developed and maintained web applications using React,Node with TypeScript. Collaborated with cross-functional teams to deliver high-quality security products solutions.",
    icon: Clock10,
    logo: "https://store-images.s-microsoft.com/image/apps.51391.929fdbe9-4567-4649-809c-2c9628e88cee.6e714dd7-4bd7-44e1-ad25-a9f738b83ebc.f66c1511-bfa8-4202-9769-d7f54fa44919",
  },
  {
    role: "Full Stack Developer",
    company: "COMSATS Cyber Lab",
    duration: "June 2021 - May 2022",
    description:
      "Conducted research in cybersecurity offensive products. Developed tools for network security analysis and threat detection.",
    icon: Clock10,
    logo: "https://crystalpng.com/wp-content/uploads/2022/02/COMSATS-University-logo.png",
  },
  {
    role: "React Native Developer",
    company: "Reap Agro",
    duration: "Mar 2021 - May 2021",
    description: `In reapagro as a react native developer to develop a mobile application for
agriculture crops management.`,
    icon: Clock10,
    logo: "https://play-lh.googleusercontent.com/jO90udZr_1E2FU2D1LvOJ3fMGp5ccbqzsMxS1hbh250gU5H08SzIdjvTnP5wk9ekhINw=w1024-h500",
  },
  {
    role: "Web Developer",
    company: "University of Swabi",
    duration: "Feb 2019 - Apr 2019",
    description: `CONFERENCE SUBMISSION SYSTEM (CSS) to provide a platform for researchers
and industry practitioners to share their innovations, ideas, research results and
development experiences in different fields.`,
    icon: Clock10,
    logo: "https://upload.wikimedia.org/wikipedia/en/4/40/UOSwabi-Logo.jpeg",
  },

  {
    role: "Programmer",
    company: "Army Service Corps",
    duration: "Aug 2018 - Oct 2018",
    description: `I'm working on a desktop application for the Army Service Corps to help manage
plots within their colony. This tool will centralize plot-related information, making it
easier to register new plots, track maintenance, and manage resident records`,
    icon: Clock10,
    logo: "https://upload.wikimedia.org/wikipedia/en/9/92/Pakistan_Army_Corps_of_Service.jpg",
  },
];

const Experience = () => {

  return (
    <Row justify={"center"} className="min-h-[80vh] p-4 sm:p-6 w-full">
      <Col xs={24} lg={16}>
        <div className="relative">
          <div className="flex flex-col gap-4">
            {experienceData.map((exp, index) => {
              const [startDate, endDate] = exp.duration.split('-')
              return (
                <div
                  key={index}
                  className="relative cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 border border-white/10 hover:border-white/30 rounded-lg px-4 py-4 shadow-xl backdrop-blur-sm transition-all duration-300 group"
                >
                  {/* Timeline Dot and Year (sm and up) */}
                  <div className=" hidden sm:flex flex-col items-center z-10 mr-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg border-2 border-white/80">
                        <exp.icon className="text-white w-4 h-4" />
                    </div>
                    <div className="flex flex-col items-center mt-1 text-[11px] text-blue-200 font-semibold">
                      <span>{endDate?.trim()}</span>
                      <span className="h-3 w-0.5 bg-blue-200 my-0.5 rounded-full" />
                      <span>{startDate?.trim()}</span>
                    </div>
                    
                  </div>

                  {/* Card main content */}
                  <div className=" flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base base line-clamp-2">
                      {exp.description}
                    </p>
                    {/* Responsive: Duration below details on mobile */}
                    <span className="text-xs sm:hidden text-blue-400 font-semibold mt-2 block">
                      {exp.duration}
                    </span>
                  </div>
                  {/* Logo */}
                  <div className=" flex-shrink-0 w-full sm:w-20 relative flex justify-center items-center sm:block">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={80}
                      height={80}
                      className="rounded-lg p-1 bg-white object-contain aspect-square border-4 border-white/10 shadow-md"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Experience;
