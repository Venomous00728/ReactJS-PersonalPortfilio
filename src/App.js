import React from "react";
import { Route, Routes } from "react-router-dom";
import TopNavbar from "./components/common/topNavbar";
import Home from "./components/Home";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Footer from "./components/homeComponents/footer";
import FashionAndCatwalk from "./components/FashionAndCatwalk";
import ClientGallery from "./components/ClientGallery";
import Editorial from "./components/Editorial";
import ServicesTab from "./components/ServicesTab";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="scroll-container">
        <TopNavbar />
        <Routes>
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/fashion&catwalk" Component={FashionAndCatwalk} />
          <Route path="/client-gallery" Component={ClientGallery} />
          <Route path="/editorial" Component={Editorial} />
          <Route path="/services" Component={ServicesTab} />
          <Route path="/" exact Component={Home} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
