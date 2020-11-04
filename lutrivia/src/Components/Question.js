import React from 'react';
import { Card } from 'semantic-ui-react'

class Question extends React.Component {

    state = {
        choice: '',
        correct: ''
    }

    handleChoice = (e)  => {
        let c = (e.target.value === 'true' ? true : false)
        this.setState({
            choice: c
        })
        // console.log(e.target.value)
        // console.log(this.props.question.answer)
        if(c === this.props.question.answer){
            this.props.addScore()
            this.setState({
                correct: true
            })
            // this.props.addScore()
            // console.log('scored')
        } else {
            this.setState({
                correct: false
            })
        }
    }

    render() {
        return (
            <Card>
                <h1>{this.props.question.text}</h1>
                <div onChange={this.handleChoice}>
                <input type='radio' value={false} name='tf' />False
                <input type='radio' value={true} name='tf' /> True
                </div>
                {this.state.correct === true ? <p>Correct!</p> :
                this.state.correct === false ? <p>Incorrect!</p> : <p></p>}
                
            </Card>
        )
    }

}

export default Question