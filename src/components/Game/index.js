import React, { Component } from "react";
import Wrapper from "../Wrapper";
import images from "../../pictures.json";
import ClickImage from "../ClickImage";
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";

class Game extends Component {

    state = {
        images,
        score: 0,
        highScore: 0
    }

    //Shuffle images when you load the page
    componentDidMount() {
        this.setState({ images: this.shuffle(this.state.images) });
    }


    //This is the main click handler for an image
    clickHandler = id => {
        console.log("clickhandler");
        var clickedNew = false;

        //update the images data to mark the clicked one as clicked 
        var newImageSet = this.state.images.map(item => {
            var currentItem = { ...item };
            if (currentItem.id === id) {
                if (currentItem.clicked === false) {
                    currentItem.clicked = true;
                    clickedNew = true;
                }
            }
            return currentItem;
        });

        //Different handlers for if you've clicked the image before or not
        if (clickedNew){
            this.handleNewItem(newImageSet);
        } else {
            this.handleClickedItem(newImageSet);
        }
    }

    //This is for if you click an image you haven't clicked yet
    handleNewItem = (newImageSet) => {
        //update score and high score first
        const score = this.state.score;
        const highScore = this.state.highScore;
        var newScore = score + 1;
        var newhighScore;

        if (newScore > highScore){
            newhighScore = newScore;
        } else {
            newhighScore = highScore;
        }

        //set the state, reshuffle the images
        this.setState({
            images: this.shuffle(newImageSet),
            score: newScore,
            highScore: newhighScore
        });
    }

    //This handles an image you've clicked before
    handleClickedItem = (newImageSet) => {
        console.log("clicked wrong!");

        //Resets the images data
        var reset = newImageSet.map(item => {
            var currentItem = {...item};
            currentItem.clicked = false;
            return currentItem;
        });

        //resets the game
        this.setState({
            score: 0,
            images: this.shuffle(reset)
        })
    }

    //To shuffle the array I'm using the Fisher-Yates algorithm
    shuffle = items => {
        console.log("we got into shuffle");
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const tempImage = items[i];
            items[i] = items[j];
            items[j] = tempImage;
        }
        console.log(items);
        return items;
    }

    render() {
        return (
            <div>
                <Nav score={this.state.score} highScore={this.state.highScore} />
                <Header />
                <Wrapper>
                    {this.state.images.map(item => (
                        <ClickImage
                            key={item.id}
                            id={item.id}
                            clickHandler={this.clickHandler}
                            image={item.image}
                        />
                    ))}
                </Wrapper>
                <Footer />
            </div>
        )
    }



}

export default Game;