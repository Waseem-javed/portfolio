import React, { lazy, Suspense, useState, useEffect } from "react";
import { Layout, ConfigProvider, Spin, theme } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "shared/Header";
import { BottomMenu } from "shared/BottomMenu";
import { SpaceBackground } from "shared/SpaceBackground";

const Home = lazy(() => import("views/home/page"));
const Intro = lazy(() => import("views/intro/page"));
const Education = lazy(() => import("views/education/page"));
const Experience = lazy(() => import("views/experience/page"));
const Projects = lazy(() => import("views/projects/page"));
const Skills = lazy(() => import("views/skills/page"));
const Awards = lazy(() => import("views/awards/page"));
const Techs = lazy(() => import("views/techs/page"));
const NotFound = lazy(() => import("views/notFound/page"));

const { Header, Footer, Content } = Layout;
const { darkAlgorithm, defaultAlgorithm } = theme;

function App() {
  const [isDark, setIsDark] = useState<boolean>(
    () => localStorage.getItem("portfolio-theme") !== "light",
  );

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemSelectedBg: "transparent",
            itemHoverBg: "transparent",
            trackBg: "transparent",
            itemSelectedColor: "inherit",
            itemHoverColor: "inherit",
          },
        },
        algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
        token: { colorPrimary: "#6366f1", borderRadius: 12 },
      }}
    >
      <Router>
        <Layout className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
          <Header
            className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm"
            style={{ padding: 0, margin: 0 }}
          >
            <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
          </Header>
          <Content className="flex-1 flex flex-col overflow-y-auto pt-[72px] pb-[72px]">
            <Suspense
                fallback={
                  <div className="flex items-center justify-center h-screen">
                    <Spin size="large" />
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/bio" element={<Intro />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/awards" element={<Awards />} />
                  <Route path="/techs" element={<Techs />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
          </Content>
          <Footer className="py-2 p-0 m-0 fixed bottom-2 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center bg-transparent backdrop-blur-sm shadow-md w-full max-w-6xl rounded-full">
            <BottomMenu />
          </Footer>
          <SpaceBackground isDark={isDark} />
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
