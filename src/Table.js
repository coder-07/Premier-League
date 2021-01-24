import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
    state = {
        standings: []
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://football98.p.rapidapi.com/premierleague/squads',
            headers: {
              'x-rapidapi-key': 'd77a7cb77bmshf35440d3b58cfa7p135577jsn17d016cae8fd',
              'x-rapidapi-host': 'football98.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(response => {
            //   console.log(response.data);
            this.setState({ standings: response.data });
          }).catch(function (error) {
              console.error(error);
          });
    }

    render() {
        const standings = this.state.standings.length ? (
            this.state.standings.map((team, index) => {
                return(
                    <tr>
                        <td className={`pl-tbl-cell small pos ${index < 4 ? 'cl' : ''} ${index === 4 ? 'el' : ''} ${index > 16 ? 'relegate':''}`}>{team.squad_position}</td>
                        <td className="pl-tbl-cell large">{team.squad_name}</td>
                        <td className="pl-tbl-cell small">{team.squad_played}</td>
                        <td className="pl-tbl-cell small green">{team.squad_winned}</td>
                        <td className="pl-tbl-cell small yellow">{team.squad_tie}</td>
                        <td className="pl-tbl-cell small red">{team.squad_loosed}</td>
                        <td className="pl-tbl-cell small blue">{team.squad_points}</td>
                    </tr>
                );
            })
        ) : (
            <div className="loading">Loading</div>
        );

        return (
            <div className="pl-table-body">
                <div className="pl-logo"></div>
                <table className="pl-table">
                    <thead>
                        <tr>
                            <th className="pl-tbl-header small">#</th>
                            <th className="pl-tbl-header large">Team</th>
                            <th className="pl-tbl-header small">MP</th>
                            <th className="pl-tbl-header small green">W</th>
                            <th className="pl-tbl-header small yellow">D</th>
                            <th className="pl-tbl-header small red">L</th>
                            <th className="pl-tbl-header small blue">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Table;