import React, { Component } from 'react';
import Horoscope from './Horoscope';
import Change from './ChangeSign';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentSign:"change"
        }
    }

    changeSign = (sign) => {
        this.setState({currentSign: sign});
    }

    render(){
        return (
            <div className='grid-container'>
                {/* {this.state.currentSign === 'change' ? <Change changeSign={this.changeSign} /> :
                <span><Horoscope currentSign={this.state.currentSign} changeSign={this.changeSign} /></span>
                } */}
                <Horoscope />
            </div>
        )
    }
}
export default Container;