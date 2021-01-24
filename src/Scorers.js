import React, { Component } from 'react';
import axios from 'axios';

class Scorers extends Component {
    state = {
        scorers: []
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://football98.p.rapidapi.com/premierleague/scorers',
            headers: {
                'x-rapidapi-key': 'd77a7cb77bmshf35440d3b58cfa7p135577jsn17d016cae8fd',
                'x-rapidapi-host': 'football98.p.rapidapi.com'
            }
        };
        
        axios.request(options).then(response => {
            this.setState({ scorers: response.data });
        }).catch(function (error) {
            console.error(error);
        });
    }

    render() { 
        const scorersTemplate = this.state.scorers.length ? (
            this.state.scorers.map((scorer) => {
                return (
                    <div className="si-item" key={scorer.player_position}>
                        <div className="scorer-name">{scorer.player_name} <span className="scorer-team">({scorer.player_squad})</span></div>
                        <div className="scorer-stats">
                            <div className="stat-cont">Position: <span className="main-stat">{scorer.player_role}</span></div>
                            <div className="stat-cont">Goals: <span className="main-stat">{scorer.player_goals} <span>[{scorer.player_penalties}]</span></span></div>
                        </div>
                    </div>
                )
            })
        ) : (<div className="loading">Loading...</div>);

        return (
            <div className="scorers-panel-fixed">
                <div className="scorer-title">Top Scorers</div>
                <div className="scorers-list">
                    {scorersTemplate}
                </div>
            </div>
        );
    }
}
 
export default Scorers;