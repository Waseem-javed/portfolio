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
import {PEH, CRTA} from "assets/images";
const { Meta } = Card;

const Awards = () => {
  const awardsData = [
    {
      title: "Practical Ethical Hacking",
      organization: "TCM Security",
      icon: Award,
      image: PEH,
      category: "Certificate",
      type: "card",
    },
    {
      title: "Certified Red Team Analyst",
      organization: "Cyberwarfare Labs",
      icon: Award,
      image: CRTA,
      category: "Certificate",
      type: "card",
    },
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
      title: "Full Stack Devloper",
      organization: "Cytomate",
      icon: Award,
      image: CYTOMATE,
      category: "Letter",
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
      <Row gutter={[16, 16]} justify="center" className="w-full mb-8">
        {awardsData.map((item, index) => (
          <Col key={index} xs={24} sm={12} lg={8} className="flex">
            {/* Gradient border wrapper — always full-width, no layout shift */}
            <div
              className="relative w-full p-[1.5px] rounded-xl group cursor-pointer"
              style={{ background: "linear-gradient(135deg,#3b82f6,#a855f7,#ec4899)" }}
            >
              <Card
                className="w-full h-full rounded-xl border-0 overflow-hidden dark:bg-[#0d0d20] bg-white"
                styles={{ body: { padding: 14, background: "transparent" } }}
                cover={
                  /* aspect-video locks height before image loads — eliminates layout shift */
                  <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                    {/* icon placeholder sits behind the image */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                      <item.icon className="w-12 h-12 text-blue-400/30" />
                    </div>
                    {/* wrapperStyle makes the antd span fill the container — fixes layout shift */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      wrapperStyle={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        display: "block",
                        zIndex: 1,
                      }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      className="transition-transform duration-500 group-hover:scale-105"
                      preview={{ maskClassName: "rounded-t-xl" }}
                    />
                  </div>
                }
              >
                <div className="flex flex-col h-full justify-between relative">
                  <Meta
                    avatar={
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                    }
                    title={
                      <span className="text-base font-bold dark:text-white text-gray-900 line-clamp-1">
                        {item.title}
                      </span>
                    }
                    description={
                      <p className="text-xs dark:text-gray-400 text-gray-500 line-clamp-1">
                        {item.organization}
                      </p>
                    }
                  />
                  {item.description && (
                    <div
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/80 text-white px-4 py-6 rounded-xl transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                      style={{ pointerEvents: "none" }}
                    >
                      <p className="text-sm text-center leading-relaxed">
                        {item.description.length > 120
                          ? item.description.slice(0, 120) + "…"
                          : item.description}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Awards;
