import React, { Component } from 'react'; import { Grid, Cell } from 'react-mdl'; class Landing extends Component { render() { return (
    <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={12}>
                <img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar" className="avatar-img" />
                <div className="banner-text">
                    <h1>Front end developer</h1>
                    <hr/>
                    <p>HTML/CSS | Bootstrap | JavaScript | React | Node.js | Express | MongoDB | WordPress
                        <br/>PhotoShop | Illustrator | XD | UI/UX</p>

                    <div className="social-links">
                        {/* LinkdIn */}
                        <a href="http://google/com" rel="noopenr noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="https://github.com/FromBlueMarble" rel="noopenr noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* FreecodeCamp */}
                        <a href="https://github.com/FromBlueMarble" rel="noopenr noreferrer">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                        </a>
{/*
                        {/* other }
                        <a href="https://github.com/FromBlueMarble" rel="noopenr noreferrer" target="_blank">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                        </a> */}

                    </div>
                </div>
            </Cell>
        </Grid>
    </div>
    ) } } export default Landing;