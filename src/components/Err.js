import  React from 'react'
import { Segment, Header , Grid } from "semantic-ui-react";

 const Err =()=>{
    return(
        <div>
            <Grid container textAlign='center' style={{ marginTop: '32px' }} verticalAlign='middle'>
                <Grid.Row >
                    <Grid.Column >
                        <Segment>
                            <Header as='h3' color='black' content='Erorr404: Page not found'/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default Err