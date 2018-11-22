import React from "react";

class Card extends React.Component {

    handleClick = () => {
        //just unselected items can be flip
        if (this.props.card.status === 'unselected') {
            this.props.flipCard(this.props.index);
        } else {
            console.log('just unselected items can be flip, status: ' + this.props.card.status);
        }
    };

    render() {
        const {type, status} = this.props.card;
        return (
            <div onClick={this.handleClick}
                 className={`card card--${status}`}>
                <div className="card-container">
                    <div className="card-face card-front">
                    </div>
                    <div className="card-face card-back">
                        <img className="card-img" alt="" src={(`./img/${type}.png`)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
