"use client";

import {
  Home,
  Zap,
  Trophy,
  Rocket,
  Briefcase,
  GraduationCap,
  User,
} from "lucide-react";
import { Segmented } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "intro", label: "Intro", icon: User, path: "/bio" },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    path: "/education",
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
    path: "/experience",
  },
  { id: "projects", label: "Projects", icon: Rocket, path: "/projects" },
  { id: "tech-stack", label: "Tech Stack", icon: Zap, path: "/techs" },
  {
    id: "awards",
    label: "Awards and Certifications",
    icon: Trophy,
    path: "/awards",
  },
];

export const BottomMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Find the active segment key based on current pathname
  const activeKey =
    menuItems.find((item) => item.path === location.pathname)?.id || "home";

  return (
      <Segmented
        value={activeKey}
        onChange={(key) => {
          const item = menuItems.find((i) => i.id === key);
          if (item) navigate(item.path);
        }}
        options={menuItems.map((item) => ({
          value: item.id,
          label: (
            <div
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-full cursor-pointer transition-all duration-200 flex-shrink-0
                ${
                  activeKey === item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
                    : "dark:hover:bg-white/10 hover:bg-black/10"
                }
              `}
            >
              <item.icon
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  activeKey === item.id
                    ? "text-white"
                    : "dark:text-white/80 text-gray-700"
                }`}
              />
              <span
                className={`text-xs sm:text-sm font-medium hidden sm:block ${
                  activeKey === item.id
                    ? "text-white"
                    : "dark:text-white/80 text-gray-700"
                }`}
              >
                {item.label}
              </span>
            </div>
          ),
        }))}
        className="segmented p-0 m-0"
        style={{ border: "none", boxShadow: "none", background: "transparent" }}
      />
  );
};
