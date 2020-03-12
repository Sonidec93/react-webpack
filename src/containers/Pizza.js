import React, { Component } from 'react';
import PizzaImage from '../components/PizzaImage/PizzaImg';


class Pizza extends Component {
    render() {
        return (
            <div>
                <PizzaImage {...this.props} />
            </div>
        )
    }
}

export default Pizza;