import React from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";
import { Row, Col, Image } from "antd";

const educationData = [
  {
    degree: "Master in Information Security",
    institution: "Riphah international University",
    duration: "2025 - 2027",
    icon: GraduationCap,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTny6bf2rM3gLflaD4_fhfnY2eihD764r_RDg&s",
    majors: [
      "Cryptography",
      "Information Privacy & Security",
      "Network Security",
      "Digital Forensics",
      "Application Security",
      "Artificial Intelligence",
      "Professional Ethics"
    ],
    achievements: ["In Progress"
    ],
  },
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
      "Appreciation Awards 🥇",
      "CSS (Conference Submission System) 2019 Year Project Award",
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

const Education:React.FC = () => {

  return (
    <Row
      justify="center"
      className="min-h-[80vh] p-2 sm:p-4 md:p-6 lg:p-8 w-full"
    >
      <Col xs={24} lg={16}>
        <div className="relative">
          {/* Vertical timeline bar */}
          <div
            className="absolute sm:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-400 rounded-full"
          />
          <div className="flex flex-col gap-3">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="flex items-start gap-6 cursor-pointer"
              >
                {/* Timeline Dot with Icon and Duration */}
                <div className="z-10 flex flex-col items-center">
                  <span className="rounded-lg py-1 bg-gradient-to-b from-[#1b1b0f] via-[#0a0a3f] to-[#0a0a1f] flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      {/* Icon */}
                      <edu.icon size={20} className="text-white font-bold" />
                      {/* Duration below Icon */}
                      <span className="mt-1 px-2 py-0.2 text-[10px] sm:text-xs font-bold text-white">
                        {edu.duration}
                      </span>
                    </div>
                  </span>
                  {/* Timeline Bar Extension except for last item */}
                  {index !== educationData.length - 1 && (
                    <div className="w-1 flex-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 mt-1 opacity-30 rounded-full"></div>
                  )}
                </div>
                {/* Card Content, with Logo to the Right */}
                <div className="flex-1 min-w-0 z-10 flex items-start">
                  {/* Main Card */}
                  <div className="flex-1 min-w-0 flex flex-row items-start gap-4 sm:gap-6 md:gap-8 bg-transparent border border-white/10 hover:border-pink-500/40 rounded-2xl px-4 sm:px-6 md:px-8 py-4 md:py-6 shadow-2xl backdrop-blur-xl transition-all duration-400 ease-in-out w-full">
                    <div className="flex-1 min-w-0 z-10 mt-1 w-full">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 drop-shadow-md mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-200 text-base sm:text-lg font-semibold leading-tight mb-2">
                        {edu.institution}
                      </p>
                      <div className="space-y-2 sm:space-y-3 mt-2">
                        <div>
                          <h4 className="text-xs font-semibold text-blue-300 tracking-wide mb-1 uppercase">
                            Major Subjects
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.majors.map((major, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gradient-to-r from-blue-500/30 via-purple-400/30 to-pink-400/20 rounded-full text-[11px] font-medium text-gray-100 shadow-sm border border-white/10"
                              >
                                {major}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-pink-300 tracking-wide mb-1 uppercase">
                            Achievements
                          </h4>
                          <ul className="list-disc pl-4 space-y-1">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-xs text-gray-100/90">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <Image
                      src={edu.logo}
                      className="object-contain rounded-lg"
                      width={120}
                      height={120}
                      style={{ width: 150, height: 150 }}
                      preview={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Education;
