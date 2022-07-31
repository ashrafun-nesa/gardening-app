import React, {Component} from "react";
import Plants from "../../data/Plants";
import MenuItem from "./MenuItem";

class Menu extends Component {
    
    state = { 
        plants: Plants
     }
    render() { 
        const menu = this.state.plants.map(item =>{
            return(
                <MenuItem plants={item} key={item.id}/>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                </div>
            </div>
          );
    }
}
 
export default Menu;