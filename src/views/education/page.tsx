import React from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";
import { Timeline, Row, Col, Image, Grid } from "antd";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Swabi",
    duration: "2016 - 2020",
    icon: GraduationCap,
    logo: "https://upload.wikimedia.org/wikipedia/en/4/40/UOSwabi-Logo.jpeg",
    majors: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Database Systems",
      "Computer Networks",
      "Operating Systems",
      "Web Development",
      "Mobile App Development",
      "Artificial Intelligence",
    ],
    achievements: [
      "Dean's List for Academic Excellence",
      "Final Year Project Award",
      "Programming Competition Winner",
    ],
  },
  {
    degree: "FSc - Pre-Engineering",
    institution: "Jinnah Model School & College Zaida, Swabi",
    duration: "2014 - 2016",
    icon: School,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXi-5SixBHlFklbjPaNRvab-3CcbPS2-aJA&s",
    majors: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    achievements: ["Top 5% in Board Examination", "Science Exhibition Winner"],
  },
  {
    degree: "SSc - Matriculation",
    institution: "Jinnah Model School & College Zaida, Swabi",
    duration: "2013 - 2014",
    icon: BookOpen,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXi-5SixBHlFklbjPaNRvab-3CcbPS2-aJA&s",
    majors: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "English",
      "Urdu",
      "Pakistan Studies",
      "Islamiat",
    ],
    achievements: [
      "Distinction in Science Subjects",
      "Academic Excellence Award",
    ],
  },
];

const { useBreakpoint } = Grid;

const Education = () => {
  const { sm } = useBreakpoint();

  return (
    <Row
      justify="center"
      className="min-h-[80vh] p-2 sm:p-4 md:p-6 lg:p-8 w-full"
    >
      <Col xs={24} lg={16}>
        <Timeline mode={sm ? "alternate" : "right"} className="text-white">
          {educationData.map((edu, index) => (
            <Timeline.Item
              key={index}
              color="white"
              label={
                <span className="text-xs sm:text-sm text-slate-100 font-medium whitespace-nowrap block w-full">
                  {edu.duration}
                </span>
              }
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/30 rounded-2xl px-4 py-4 shadow-xl backdrop-blur-sm transition-all duration-300 group">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                    {edu.institution}
                  </p>
                  <div className="space-y-3 sm:space-y-4 mt-4">
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-blue-400 mb-2">
                        Major Subjects
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {edu.majors.map((major, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-gray-300"
                          >
                            {major}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-purple-400 mb-2">
                        Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-gray-300"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-400 font-semibold mt-2">
                    Duration: {edu.duration}
                  </p>
                </div>
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative">
                  <Image
                    src={edu.logo}
                    width={112}
                    height={112}
                    alt={`${edu.institution} logo`}
                    className="object-contain rounded-full w-full h-full"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                      minHeight: sm ? "96px" : "80px",
                      minWidth: sm ? "96px" : "80px",
                    }}
                  />
                </div>
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </Col>
    </Row>
  );
};

export default Education;
