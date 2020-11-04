
import Data from '../data'
import React from 'react';
import { CardGroup } from 'semantic-ui-react'
import Question from './Question.js'

class QuestionContainer extends React.Component {

    state = {
        questions: Data.question,
        selectedQuestions: []
    }

    genRand = (max) => {

        return  Math.floor(Math.random() * (max))
    }

    // selectQuestions(n) {
        // n = n > 9 ? 
        // this.setState({
        //     selectQuestions: []
        // })
    // }

    render() {
        let qs = Data.questions.slice(0,4)
        console.log(qs)
        return(
        <CardGroup  itemsPerRow={6}>
            {qs.map((q, idx) => <Question key={idx} question={q} addScore={this.props.addScore}/>)}
        </CardGroup>
        )
    }

}

export default QuestionContainer