import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";



const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  },[])

  const getCountry=async(url)=>{
    const response = await axios.get(url).then((res)=>{
      setCountryList(res.data.data);
    })
  }

  const values={
    countryList,
    selectedCountry,
    setSelectedCountry
  }
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
