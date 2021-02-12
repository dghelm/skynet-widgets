import React from 'react';
import PortalAlternatives from './components/PortalAlternatives';
import DragUploader from './components/DragUploader';
import Base32Subdomain from './components/Base32Subdomain';
import HNSLookup from './components/HNSLookup';
import SkyDB from './components/SkyDB';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      {/* <div className="App-wrapper"> */}
      <Layout style={{ backgroundColor: 'white' }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <Switch>
            <Route path="/upload">
              <DragUploader />
            </Route>
            <Route path="/portals">
              <PortalAlternatives />
            </Route>
            <Route path="/base32-subdomain">
              <Base32Subdomain />
            </Route>
            <Route path="/hns-lookup">
              <HNSLookup />
            </Route>
            <Route path="/skydb">
              <SkyDB />
            </Route>
            <Route path="/">
              {/* <h3>Please Update the URL to choose a widget.</h3>
            <br /> */}
              <h4>
                <Link to="upload">File Upload</Link>
                <br />
                <Link to="portals">Portal Alternatives</Link>
                <br />
                <Link to="base32-subdomain">Base32 Subdomain Link</Link>
                <br />
                <Link to="hns-lookup">HNS Lookup</Link>
                <br />
                <Link to="skydb">SkyDB</Link>
              </h4>
            </Route>
          </Switch>
          {/* </div> */}
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
