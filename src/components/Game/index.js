import React, { Component } from "react";
import Wrapper from "../Wrapper";
import images from "../../pictures.json";
import ClickImage from "../ClickImage";

class Game extends Component {

    state = {
        images
    }

    render() {
        return (
            <Wrapper>
                {this.state.images.map(item => (
                    <ClickImage
                        key={images.id}
                        id={images.id}
                        //handleClick={this.handleItemClick}
                        image={item.image}
                    />
                ))}
            </Wrapper>

        )
    }



}

export default Game;