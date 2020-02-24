import React, { Component } from "react";
import Wrapper from "../Wrapper";
import images from "../../pictures.json";
import ClickImage from "../ClickImage";
import Nav from "../Nav";

class Game extends Component {

    state = {
        images,
        score: 0,
        highScore: 0
    }


    clickHandler = () => {
        console.log("Clicked an image");
        const score = this.state.score;
        console.log(score);
        const highScore = this.state;
        var newScore = score + 1;
        console.log(newScore);
        const newTopScore = 0;
        this.setState({
            images: this.shuffle(images),
            score: newScore
        })
    }

    //To shuffle the array I'm using the Fisher-Yates algorithm
    shuffle = images => {
        for (let i = images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const tempImage = images[i];
            images[i] = images[j];
            images[j] = tempImage;
        }
        return images;
    }

    render() {
        return (
            <div>
                <Nav score={this.state.score} highScore={this.state.highScore} />
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
            </div>
        )
    }



}

export default Game;