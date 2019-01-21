import React from "react";
import Paper from "@material-ui/core/Paper";
import Root from "./components/Root";
import MenuAppBar from "./components/navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div style={{ height: "100vh", border: "4vh solid #D6DFE4", margin: 0, boxSizing: "border-box" }}>
      <div style={{borderRadius: '15px'}}>
        <MenuAppBar/>
        <Paper style={{height: "72vh"}}>
          <Root/>
        </Paper>
        <Footer/>
      </div>
        
    </div>
  );
};

export default App;
