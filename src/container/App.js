import React from 'react';
import SimpleBar from 'simplebar-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'helpers';
import CoverAndMain from './CoverAndMain';
import CanvasInterface from './CanvasInterface';
import Mytickets from './Mytickets';
import Projects from './Projects';
import Navbar from '../navigationBarComponents/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Homepage from './homepage';
import Sign from './signin-signup-form';


export default function App() {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <ChakraProvider theme={theme}>
        <Router>
          
          <div className="App">
          <Routes>
              <Route path="/" element={< Homepage />}/>
              <Route path="/signin-signup" element={< Sign />} />
          </Routes>
            <Navbar />
            <Routes>
              <Route path="/UserProfile" element={<CoverAndMain />} />
              <Route path="/Canvas" element={<CanvasInterface />} />
              <Route path="/MyTickets" element={<Mytickets />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </div>
        </Router>
      </ChakraProvider>
    </SimpleBar>
  );
}
