import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from './Box'
import BoxResault from './BoxResault'
import Err from './Err'



class ViewQuestion extends Component {

    render () {
        const {questionId, answerId} = this.props   
        if ( answerId.hasOwnProperty(questionId) === false ) {
            return <Box id={questionId} />
        } else if ( answerId.hasOwnProperty(questionId) === true ) {
            return <BoxResault id={questionId} />
        } else {
            return <Err/>
        }
    
    }
}
function mapStateToProps ({ users, authedUser}, props) {
    const questionId = props.match.params.id
    const answerId = users[authedUser].answers

    return {
        answerId,
        questionId
    }
}
export default connect(mapStateToProps)(ViewQuestion)
