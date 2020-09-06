import React from 'react';
import './stylesheet.css';
import PartnerLogo1 from "./images/section_images/partner_logo_1.png";
import { db, auth } from './firebase';
import MenuBox from './menuBox'
import Restaurants from './restaurantBox'

class MenuItem extends React.Component {

    state = {
        category: null,
    }

    componentDidMount() {
        console.log('mounted')
        db.collection('restaurants').doc(`${this.props.id}`).collection("categories")
            .get()
            .then(snapshot => {
                const category = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    category.push(data)
                })
                this.setState({ category: category })
                console.log(category)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div class="menu-items-grid">
                {
                    this.state.category &&
                    this.state.category.flatMap(category => {
                        return (
                            <a>
                                <div class="menu-item">
                                    <div class="menu-item-info">
                                        <div class="menu-item-top">
                                            <h3>{category.categories[0].items[0].name}</h3>
                                            <p>${category.categories[0].items[0].price}</p>
                                        </div>
                                        <p>{category.categories[0].items[0].description}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }




}

export default MenuItem;