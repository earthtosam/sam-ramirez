import React from 'react';
import './stylesheet.css';
import PartnerLogo1 from "./images/section_images/partner_logo_1.png";
import { db, auth } from './firebase';
import MenuBox from './menuBox'
import Restaurants from './restaurantBox'


class Menu extends React.Component {

    render() {
        return (
            <div>

                <section class="menu-hero" style={{ backgroundImage: "url(" + this.props.location.state.storeFrontImage_url + ")" }}>

                    <div class="hero-container">
                        <img src={this.props.location.state.logo_url} alt="" />
                    </div>
                </section>

                <div class="menu-restaurant-info">
                    <a>
                        <h2>{this.props.location.state.name}</h2>
                        <p>{this.props.location.state.street}, {this.props.location.state.zip}</p>
                        <p>{this.props.location.state.city}, {this.props.location.state.state}</p>
                        <div class="button-container">
                            <a href={"tel:" + this.props.location.state.phone + ""}> Call Now </a>
                        </div>
                    </a>
                </div>

                <div class="menu-category-grid">
                    <MenuBox id={this.props.location.state.id} />
                </div>
            </div >
        )
    }
}


export default Menu;