import React from 'react';
import classes from './PizzaImg.css';
import PizzaImage from '../../assets/pizza.png';

const PizzaImg = (props) => {
    return (
        <div className={classes['pizza-div']}>
            <img src={PizzaImage} className={classes['pizza-img']} alt="Pizza image" />
        </div>
    )
}

export default PizzaImg;