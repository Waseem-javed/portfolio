import React from "react";
import { Timeline, Row, Col, Image, Grid } from "antd";
import { Briefcase, Code, Shield } from "lucide-react";

const experienceData = [
  {
    role: "Research and Development Manager",
    company: "Army Service Corps",
    duration: "Oct 2024 - Present",
    description:
      "Managed a development team using proper Scrum practices, driving digital transformation and process improvements.",
    icon: Shield,
    logo: "https://smartdealer.pk/static/media/Logo.86d2e7bfddc635b690b5.jpg",
  },
  {
    role: "Software and Cyber Engineer",
    company: "Averox",
    duration: "Dec 2024 - May 2025",
    description:
      "Leading development of enterprise applications using React, Node.js, and cloud technologies. Implementing CI/CD pipelines and microservices architecture.",
    icon: Code,
    logo: "https://averox.com/wp-content/uploads/2025/04/Averox-Top-IT-company-in-world.png",
  },
  {
    role: "Full Stack Engineer",
    company: "Cytomate",
    duration: "June 2022 - Sep 2024",
    description:
      "Developed and maintained web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    icon: Briefcase,
    logo: "https://store-images.s-microsoft.com/image/apps.51391.929fdbe9-4567-4649-809c-2c9628e88cee.6e714dd7-4bd7-44e1-ad25-a9f738b83ebc.f66c1511-bfa8-4202-9769-d7f54fa44919",
  },
  {
    role: "Full Stack Developer",
    company: "COMSATS Cyber Lab",
    duration: "June 2021 - May 2022",
    description:
      "Conducted research in cybersecurity and machine learning. Developed tools for network security analysis and threat detection.",
    icon: Shield,
    logo: "https://crystalpng.com/wp-content/uploads/2022/02/COMSATS-University-logo.png",
  },
  {
    role: "React Native Developer",
    company: "Reap Agro",
    duration: "Mar 2021 - May 2021",
    description: `In reapagro as a react native developer to develop a mobile application for
agriculture crops management. Reap Agro is working to improve the lives of small
holder farmers by providing timely interest-free financing to support and facilitate
them, in the form of inputs and easy credit. Overcoming poverty one farmer at a
time, we aim to enable them by decreasing cost, improving yield and managing
disasters through our advisory and technological channels.`,
    icon: Code,
    logo: "https://play-lh.googleusercontent.com/jO90udZr_1E2FU2D1LvOJ3fMGp5ccbqzsMxS1hbh250gU5H08SzIdjvTnP5wk9ekhINw=w1024-h500",
  },
  {
    role: "Web Developer",
    company: "University of Swabi",
    duration: "Feb 2019 - Apr 2019",
    description: `CONFERENCE SUBMISSION SYSTEM (CSS) to provide a platform for researchers
and industry practitioners to share their innovations, ideas, research results and
development experiences in different fields .registered people can check the
status of paper further information check the website yourself link is given below.`,
    icon: Code,
    logo: "https://upload.wikimedia.org/wikipedia/en/4/40/UOSwabi-Logo.jpeg",
  },

  {
    role: "Programmer",
    company: "Army Service Corps",
    duration: "Aug 2018 - Oct 2018",
    description: `I'm working on a desktop application for the Army Service Corps to help manage
plots within their colony. This tool will centralize plot-related information, making it
easier to register new plots, track maintenance, and manage resident records`,
    icon: Briefcase,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Pakistan_Army_Emblem.png/985px-Pakistan_Army_Emblem.png",
  },
];

const { useBreakpoint } = Grid;
const Experience = () => {
  const { sm } = useBreakpoint();
  return (
    <Row justify={"center"} className="min-h-[80vh] p-4 sm:p-6 w-full">
      <Col xs={24} lg={16}>
        <Timeline mode={!sm ? "right" : "alternate"} className="text-white">
          {experienceData.map((exp, index) => {
            return (
              <Timeline.Item
                key={index}
                label={
                  <span className="text-xs sm:text-sm text-slate-100 font-medium whitespace-nowrap block w-full">
                    {exp.duration}
                  </span>
                }
                color="white"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/30 rounded-2xl px-4 py-4 shadow-xl backdrop-blur-sm transition-all duration-300 group">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">
                      {exp.description}
                    </p>
                    <p className="text-xs sm:text-sm text-blue-400 font-semibold mt-2">
                      {exp.duration}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-full sm:w-20 sm:h-20 h-40 sm:h-20 relative">
                    <Image
                      src={exp.logo}
                      width={80}
                      height={80}
                      alt={`${exp.company} logo`}
                      className="object-cover rounded-lg w-full h-full sm:w-20 sm:h-20"
                      style={{
                        objectFit: !sm ? "cover" : "cover",
                        width: !sm ? "100%" : undefined,
                        height: !sm ? "160px" : undefined,
                        maxWidth: !sm ? "100%" : undefined,
                        maxHeight: !sm ? "160px" : undefined,
                        minHeight: !sm ? "120px" : undefined,
                      }}
                    />
                  </div>
                </div>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Col>
    </Row>
  );
};

export default Experience;
