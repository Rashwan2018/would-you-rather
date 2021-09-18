import React, { Component } from 'react'
import Leaderboard from './Leaderboard'
import { Container, Header } from 'semantic-ui-react'

class LeaderboardBox extends Component {
    render () {
        return (
                <Container style={{marginTop: '32px', width: 600 }} verticalalign = 'middle' >
                    <Header as='h1' textAlign='center'>Leaderboard</Header>
                    <Leaderboard />
                </Container>
                
        )
    }
}
export default LeaderboardBox