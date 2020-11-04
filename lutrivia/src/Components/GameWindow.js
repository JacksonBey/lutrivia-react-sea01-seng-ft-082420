import React from 'react';
import Info from './Info'
import QuestionContainer from './QuestionContainer'
import ScoreForm from './ScoreForm'
import { Container } from 'semantic-ui-react'

class GameWindow extends React.Component {

    state = {
        score: 0
    }

    addScore = () => {
        let nScore = this.state.score +1
        this.setState({
            score: nScore
        })
    }



    render() {
        return (
            <Container>
                <h1>Truth Game</h1>
                <br />
            <Info />
        <h2>Score: {this.state.score}</h2>
            <br />
            <QuestionContainer  addScore ={this.addScore}/>
            <br />
            <ScoreForm />
            </Container>
        )
    }

}

export default GameWindow