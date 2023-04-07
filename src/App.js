//import logo from './logo.svg';

import FirstSection from "./Components/FirstSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Iphone from "./Components/Iphone";
//import Iphone from "./Components/Iphone";
//import "./CSS/AppleStyle.css";


function App() {
  return (
    <div className="App">
    <Header />
    <FirstSection/>
    <Iphone/>
    <FirstSection/>
    <Iphone/>
    <FirstSection/>
    <Footer />
    </div>
  );
}

export default App;
