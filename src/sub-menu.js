import React from 'react';
import './stylesheet.css';
import PartnerLogo1 from "./images/section_images/partner_logo_1.png";
import { db, auth } from './firebase';
import MenuBox from './menuBox'
import MenuItem from './menu-item'
import Restaurants from './restaurantBox'
import Bubble from './images/sf_images/sf_bubble.png';


class SubMenu extends React.Component {

    render() {
        return (
            <div class="menu-items-title">
                <div class="menu-items-header">
                    <img src={Bubble} alt="" />
                    <h2>{this.props.location.state.name}</h2>
                </div>
                <div>
                    <MenuItem id={this.props.location.state.id} />
                </div>
            </div>
        )
    }
}


export default SubMenu;