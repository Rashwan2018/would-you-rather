import React, {Component} from 'react'
import { connect } from 'react-redux'

import {Segment, Grid, Container, Button } from 'semantic-ui-react'
import UnansweredQuestions from './UnansweredQuestions'
import AnsweredQ from './AnsweredQ'

class HomePage extends Component {
    state = {
        answerState: false
    }
    
    handleUnansweredQuestions = (e) => {
        e.preventDefault()
        this.setState({answerState: false})
    }

    handleAnsweredQuestions = (e) => {
        e.preventDefault()
        this.setState({answerState: true})
    }       
    render () {
        const { answerState } = this.state
        return (
            <div>
                <Container style={{ marginTop: '32px' ,width:900}}>
                    <Grid columns='equal' >
                        <Grid.Column>
                            <Button.Group color='pink' attached='top' widths={1} inverted >
                                <Button onClick={this.handleUnansweredQuestions} >Unanswered Questions</Button>
                                <Button onClick={this.handleAnsweredQuestions}>Answered Questions</Button>
                            </Button.Group>
                            <Segment attached >
                                { answerState === false 
                                    ? <UnansweredQuestions />
                                    : <AnsweredQ />
                                }
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Container>
           </div>
       )
    }
}



function mapStateToProps ({ users, authedUser}) {
    const answers = !authedUser ? [] : users[authedUser].answers
    
    return {
        answers
    }
}
export default connect(mapStateToProps)(HomePage)