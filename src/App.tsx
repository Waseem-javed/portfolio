import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  Home,
  Intro,
  Education,
  NotFound,
  Experience,
  Projects,
  Skills,
  Awards,
  Techs
} from 'views';

import { Navbar } from 'shared/Header';
import { BottomMenu } from 'shared/BottomMenu';
import { SpaceBackground } from 'shared/SpaceBackground';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
        {/* Glassy Blue Fixed Header */}
        <Header
          className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-sm"
          style={{ padding: 0, margin: 0 }}
        >
            <Navbar />
        </Header>
        {/* Main Content with overflow hidden and proper padding */}
        <Content className="flex-1 overflow-hidden pt-[72px] pb-[72px]">
          <div className="h-full w-full overflow-hidden">
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
          </div>
        </Content>
        {/* Glassy Blue Centered Fixed Footer */}
        <Footer
          className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center bg-transparent backdrop-blur-sm shadow-md w-full max-w-6xl rounded-full"
          style={{ padding: 0, margin: 0 }}
        >
          <BottomMenu />
        </Footer>
        <SpaceBackground />
      </Layout>
    </Router>
  );
}

export default App;
