import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import cat from '../assets/cat.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid   className='contact-grid'>
                    <Cell col='{6}'>
                        <h2>Tanya Lytovchenko</h2>
                        <img src={cat} 
                            // style={{ height: '250px' }}
                            alt="avatar" className='avatar-img' />
                        <p>Lorem ipsum dolor amet fingerstache butcher tbh dreamcatcher 
                        raw denim. YOLO tote bag irony, salvia selvage raw denim butcher 
                        bespoke seitan put a bird on it franzen everyday carry woke art party. 
                        </p>
                    </Cell>
                    <Cell col='{6}'>half page</Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;