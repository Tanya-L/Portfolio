import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import cat from '../assets/cat.png';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={cat}
                        alt="avatar" className='avatar-img' />
                        <div className='banner-text'>
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React | Bootstrap | NodeJS | Java | Python | Django </p>
                            <div className='social-links'>

                                {/* LinkedIn */}
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden='true' />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/Tanya-L" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden='true' />
                                </a>

{/* Facebook */}
<a href="https://www.facebook.com/tanya.lytovchenko" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square"  aria-hidden='true' />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;