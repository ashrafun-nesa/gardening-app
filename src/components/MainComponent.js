import React, {Component} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";


class MainComponent extends Component {
    
    
    render() { 
        return (  
            <div>
               <Header/>
               <Body/>
               <Footer/>
            </div>
        );
    }
}
 
export default MainComponent;