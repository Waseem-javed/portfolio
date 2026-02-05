import React from "react";
import { Trophy, Award } from "lucide-react";
import { Card, Image, Row, Col } from "antd";
import CEH from "assets/images/CEH.png";
import A25 from 'assets/images/A25.png'
import A24 from 'assets/images/A24.png'
import A23 from "assets/images/A23.png";
import WAP from "assets/images/WAP.png";
import JPTHM from "assets/images/JPTHM.png";
import Award19 from "assets/images/Award19.png";
import CYTOMATE from "assets/images/cytomate.png";

const { Meta } = Card;

const Awards = () => {
  const awardsData = [
    {
      title: "Certified Ethical Hacker",
      organization: "Ehunar Pakistan",
      icon: Award,
      image: CEH,
      category: "Certificate",
      type: "card",
    },
    {
      title: "Web Application Pentesting",
      organization: "TryHackMe",
      icon: Award,
      image: WAP,
      category: "Certificate",
      type: "card",
    },
    {
      title: "Junior Pentration Tester",
      organization: "TryHackMe",
      icon: Award,
      image: JPTHM,
      category: "Certificate",
      type: "card",
    },
    {
      title: "Full Stack Devloper",
      organization: "Cytomate",
      icon: Award,
      image: CYTOMATE,
      category: "Letter",
      type: "card",
    },
    {
      title: "Advent of Cyber 2025",
      organization: "TryHackMe",
      icon: Award,
      image: A25,
      category: "Certificate",
      type: "card",
    },
    {
      title: "Advent of Cyber 2024",
      organization: "TryHackMe",
      icon: Award,
      image: A24,
      category: "Certificate",
      type: "card",
    },
    {
      title: "Advent of Cyber 2023",
      organization: "TryHackMe",
      date: "2023",
      icon: Award,
      image: A23,
      category: "Certificate",
      type: "card",
    },
    {
      title: "Appreciation Award",
      organization: "University of swabi",
      date: "2019",
      description:
        "Appreciated award for working with head of department and faculty member of computer science to develop a CSS conference submission system with my classmate for 2019 international conference. ",
      icon: Trophy,
      image: Award19,
      category: "Certificate",
      type: "card",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 w-full max-w-7xl mx-auto">
      <Row gutter={[16, 16]} justify={'center'} className="w-full mb-8">
        {awardsData.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            lg={8}
            className="flex"
          >
            <div className="relative w-full h-full flex">
              <Card
                className="bg-white/5 border-4 border-transparent group-hover:border-transparent h-full flex flex-col items-stretch group cursor-pointer hover:shadow-sm relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-lg before:border-4 before:border-transparent before:bg-[conic-gradient(var(--tw-gradient-stops))] before:from-blue-400 before:via-purple-400 before:to-blue-400 before:animate-spin-slow"
                cover={
                  <div className="w-full h-[200px] flex items-center justify-center bg-black/10 rounded-t-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-t-lg"
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                }
              >
                <div className="flex flex-col flex-1 h-full justify-between">
                  <Meta
                    avatar={
                      <div className="px-2 mt-1 border sm:p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    }
                    title={
                      <span className="text-lg sm:text-xl font-bold text-white line-clamp-1">
                        {item.title}
                      </span>
                    }
                    description={
                      <p className="text-xs sm:text-sm text-gray-400 line-clamp-1">
                        {item.organization}
                      </p>
                    }
                  />
                </div>
                {item.description && (
                  <div
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 bg-opacity-95 text-white px-4 py-6 rounded-lg transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    style={{
                      pointerEvents: "none"
                    }}
                  >
                    <div className="text-sm sm:text-base text-center">
                      {item.description.length > 110
                        ? item.description.slice(0, 110) + "..."
                        : item.description}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Awards;
