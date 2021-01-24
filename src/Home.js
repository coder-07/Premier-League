import React, { Component } from 'react';

import Scorers from './Scorers';
import Table from './Table';

class Home extends Component {
    state = {
        
    }

    render() { 
        return (
            <div className="pl-body">
                <div className="pl-table-cont">
                    <Table/>
                </div>
                <div className="pl-scorers-cont">
                    <Scorers/>
                </div>
            </div>
        );
    }
}
 
export default Home;