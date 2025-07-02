import React from "react";
import { Trophy, Award, Medal } from "lucide-react";
import { Card, Image, Row, Col } from "antd";
import THM from "assets/images/Thm.png";
import CEH from "assets/images/CEH.png";
import CYTOMATE from "assets/images/cytomate.png";

const { Meta } = Card;

const Awards = () => {
  const awardsData = [
    {
      title: "Certified Ethical Hacker",
      organization: "Ehunar Pakistan",
      date: "2024",
      description:
        "First place in the annual coding competition for developing an AI-powered healthcare solution.",
      icon: Medal,
      image: CEH,
      category: "Certificate",
      type: "card",
    },
    {
      title: "Full Stack Devloper",
      organization: "Cytomate",
      date: "2023",
      description:
        "Recognized for outstanding contributions to open-source projects and innovative solutions.",
      icon: Trophy,
      image: CYTOMATE,
      category: "Letter",
      type: "card",
    },
    {
      title: "Cyber Security Challenges",
      organization: "THM (Advent of Cyber 2023)",
      date: "2023",
      description:
        "Professional certification demonstrating expertise in designing distributed systems on AWS.",
      icon: Award,
      image: THM,
      category: "Certificate",
      type: "card",
    },
    {
      title: "Appreciated Award",
      organization: "University of swabi",
      date: "2019",
      description:
        "Appreciated award for working with head of department and faculty member of computer science to develop a CSS conference submission system with my classmate for 2019 international conference. ",
      icon: Award,
      image: "/certificates/ceh-cert.jpg",
      category: "Certificate",
      type: "row",
    },
  ];

  // Split cards and rows for better alignment
  const cardAwards = awardsData.filter((item) => item.type === "card");
  const rowAwards = awardsData.filter((item) => item.type === "row");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 w-full max-w-7xl mx-auto">
      {/* Card Awards in a grid using antd Row/Col */}
      <Row gutter={[16, 16]} className="w-full mb-8">
        {cardAwards.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            lg={8}
            className="flex"
          >
            <Card
              className="bg-white/5 m-0 p-0 border-white/10 hover:shadow-sm cursor-pointer h-full flex flex-col items-stretch"
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
                    <div className="px-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  }
                  title={
                    <span className="text-lg sm:text-xl font-bold text-white line-clamp-1">
                      {item.title}
                    </span>
                  }
                  description={
                    <>
                      <p className="text-xs sm:text-sm text-gray-400 line-clamp-1 mb-1">
                        {item.organization}
                      </p>
                      <p className="text-sm sm:text-base text-gray-300 mb-2 line-clamp-3">
                        {item.description}
                      </p>
                      <p className="text-xs sm:text-sm text-blue-400 font-semibold">
                        {item.date}
                      </p>
                    </>
                  }
                  className="px-4 pt-4 pb-4"
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Row Awards below the grid, full width, using antd Row/Col */}
      <Row gutter={[16, 16]} className="w-full">
        {rowAwards.map((item, index) => (
          <Col key={index} xs={24} className="flex">
            <Card
              className="bg-white/5 m-0 p-0 border-white/10 hover:shadow-sm cursor-pointer h-full w-full flex flex-col sm:flex-row items-center"
              bodyStyle={{ padding: 0, width: "100%" }}
            >
              <div className="w-full flex flex-col sm:flex-row items-center">
                {/* Image on the left if present */}
                {/* {item.image && (
                  <div className="w-full sm:w-60 h-40 flex-shrink-0 flex items-center justify-center bg-black/10 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full h-full object-cover"
                    />
                  </div>
                )} */}
                <div className="flex-1 w-full">
                  <Meta
                    avatar={
                      <div className="px-2 sm:p-4 rounded-sm bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <item.icon className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
                      </div>
                    }
                    title={
                      <span className="text-lg sm:text-xl font-bold text-white line-clamp-1">
                        {item.title}
                      </span>
                    }
                    description={
                      <>
                        <p className="text-xs sm:text-sm text-gray-400 line-clamp-1 mb-1">
                          {item.organization}
                        </p>
                        <p className="text-sm sm:text-base text-gray-300 mb-2 line-clamp-3">
                          {item.description}
                        </p>
                        <p className="text-xs sm:text-sm text-blue-400 font-semibold">
                          {item.date}
                        </p>
                      </>
                    }
                    className="px-4 py-4"
                  />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Awards;
