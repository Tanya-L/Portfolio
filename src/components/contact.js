import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import cat from '../assets/cat.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className='contact-grid'>
                    <Cell col='{6}'>
                        <h2>Tanya Lytovchenko</h2>
                        <img src={cat}
                            // style={{ height: '250px' }}
                            alt="avatar" className='avatar-img' />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor amet fingerstache butcher tbh dreamcatcher
                        raw denim. YOLO tote bag irony, salvia selvage raw denim butcher
                        bespoke seitan put a bird on it franzen everyday carry woke art party.
                        </p>
                    </Cell>
                    <Cell col='{6}'>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Oxygen' }}>
                                        <i className='fa fa-envelope' aria-hidden='true' />
                                        tanya.lytovchenko@gmail.com
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Oxygen' }}>
                                        <i className='fa fa-phone-square' aria-hidden='true' />
                                        (076)O44-7948
                                </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Oxygen' }}>
                                        <i className='fa fa-skype' aria-hidden='true' />
                                        Tanya Lytovchenko
                                </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;