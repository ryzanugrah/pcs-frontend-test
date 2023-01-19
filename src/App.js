import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';

import routes from 'routes.js';

import Sidebar from 'components/Sidebar';
import Navbars from 'components/Navbars';
import Footer from 'components/Footer';

const App = () => {
  const [color, setColor] = useState('red');
  const location = useLocation();
  const mainPanel = useRef(null);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '') {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 768 &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
      var element = document.getElementById('bodyClick');
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <Navbars />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
