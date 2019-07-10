import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://www.w3schools.com/w3images/avatar2.png"
                            alt="avatar"
                            className="avatar-img"
                            />
                            <div className="banner-text">
                                <h1>Front end developer</h1>
                                <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | Node.js | Express | MongoDB | WordPress
                            <br/>
                            PhotoShop | Illustrator | XD | UI/UX</p>

                            </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;