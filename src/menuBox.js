import React from 'react';
import './stylesheet.css';
import PartnerLogo1 from "./images/section_images/partner_logo_1.png";
import { db, auth } from './firebase';
import { Link } from 'react-router-dom';



class MenuBox extends React.Component {
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
                    data["id"] = doc.id
                    category.push(data)
                })
                this.setState({ category: category })
                console.log(category)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                {
                    this.state.category &&
                    this.state.category.flatMap(category => {
                        return (
                            <a>
                                <Link to={{
                                    pathname: `/restaurants/${this.props.id}/${category.name}`,
                                    state: {
                                        name: `${category.name}`,
                                        id: `${this.props.id}`,
                                        categoryid: `${category.id}`
                                    }
                                }}>
                                    <div class="menu-category">
                                        <div class="menu-category-info">
                                            <img src={category.image_url} />
                                            <h3>{`${category.name}`}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </a>
                        )
                    })
                }
            </div >
        )
    }
}


export default MenuBox;





