import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Aside from "./components/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Example from "./pages/Example";
import Example2 from "./pages/Example2";
import Example3 from "./pages/Example3";
import Example4 from "./pages/Example4";
import Datepicker from "./pages/Datepicker";



function App() {

  const light = {
    colors: {
      Primary : "orange",
      Secondary : "orangered",
      BgColor : "#e9f1f6"
    }
  }
  const dark = {
    colors: {
      Primary : "#272929",
      Secondary : "#e9e9e9",
      BgColor : "#333"
    }
  }
  
  const [themeConfig, setThemeConfig] = useState("light");
  const DarkMode = themeConfig === 'light' ? light : dark;

  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      
      <ThemeProvider theme={DarkMode}>
        <GlobalStyle/>
        <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig}/>

        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/ex" element={<Example/>}></Route>
          <Route path="/ex2" element={<Example2/>}></Route>
          <Route path="/ex3" element={<Example3/>}></Route>
          <Route path="/ex4" element={<Example4/>}></Route>
          <Route path="/date" element={<Datepicker/>}></Route>
          <Route path="/detail/:seq" element={<Detail/>}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
