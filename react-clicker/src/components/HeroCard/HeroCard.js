import React from "react";
import "./HeroCard.css";

function clickHandler(props) {
    props.shuffleCards();
    props.clickedHero(props.id);
}

const HeroCard = props => (
    <div className="img-container" onClick={() => clickHandler(props)}>
        <img alt={props.name} src={props.image} />
    </div>
);

export default HeroCard;