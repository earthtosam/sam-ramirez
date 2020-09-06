import React from 'react';
import './stylesheet.css';
import PartnerBubble from './images/section_images/sf_partner_bubbles.png';
import RestaurantBox from './restaurantBox'



function Restaurants() {

    return (
        <div>
            <section class="hero restaurants-hero">
                <div class="hero-container">
                    <img src={PartnerBubble} alt="" />
                    <h1>Find your next meal</h1>
                    <p>SeeFood helps create visual menus for restaurants and customers. See your food before ordering!</p>
                </div>
            </section>

            <div class="restaurants-grid">
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    Here is a list of restaurants menus that will launch with us soon!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <RestaurantBox />
            </div>
        </div >
    );
}

export default Restaurants;