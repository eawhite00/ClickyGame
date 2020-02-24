import React, { Component } from "react";
import Wrapper from "../Wrapper";
import images from "../../pictures.json";
import ClickImage from "../ClickImage";

class Game extends Component {

    state = {
        images
    }


    clickHandler = () => {
        console.log("Clicked an image");
        this.setState({
            images: this.shuffle(images)
        })
    }

    //To shuffle the array I'm using the Fisher-Yates algorithm
    shuffle = images => {
        for(let i = images.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i);
            const tempImage = images[i];
            images[i] = images[j];
            images[j] = tempImage;
          }
          return images;
    }

    render() {
        return (
            <Wrapper>
                {this.state.images.map(item => (
                    <ClickImage
                        key={images.id}
                        id={images.id}
                        clickHandler={this.clickHandler}
                        image={item.image}
                    />
                ))}
            </Wrapper>

        )
    }



}

export default Game;