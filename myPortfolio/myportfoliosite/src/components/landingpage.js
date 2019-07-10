import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img 
                            src="/Users/tesuto/Desktop/ciccc/myPortfolio/myportfoliosite/src/img/resume.jpg"
                            alt="avatar"
                            className="avatar-img"
                            />
                            <div className="banner-text">
                                <h1>Front end developer</h1>

                            </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;