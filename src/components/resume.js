import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                  <Cell className='resume-left-col' col={4}>Left side</Cell>  
                  <Cell className='resume-right-col' col={8}>Right side</Cell> 
                </Grid>
            </div>
        )
    }
}

export default Resume;