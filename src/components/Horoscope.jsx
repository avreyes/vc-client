import React, { Component } from 'react';
import styled from 'styled-components';

const signs = require ('../signs.json');

class Horoscope extends Component {
    constructor(props){
        super(props);
        this.state = {
            sign: signs[props.currentSign].sign,
            currentSign: signs[props.currentSign].currentSign,
            yesterday: false,
            today: false,
            tomorrow: false,
            change: false,
            yesterdayRead: '',
            todayRead: '',
            tomorrowRead: '',
        }
    }

    dict = {
        "yesterday":"yesterdayRead",
        "today":"todayRead",
        "tomorrow":"tomorrowRead",
    }

    showHoroscopes(){
        fetch(`https://aztro.sameerkumar.website/?sign=${this.state.sign.toLowerCase()}&day=yesterday`,{
            method: 'POST'
        })
        .then(res => res.json()).then(yesterday => this.setState({yesterdayRead: yesterday}))

        fetch(`https://aztro.sameerkumar.website/?sign=${this.state.sign.toLowerCase()}&day=today`,{
            method: 'POST'
        })
        .then(res => res.json()).then(today => this.setState({todayRead: today}))

        fetch(`https://aztro.sameerkumar.website/?sign=${this.state.sign.toLowerCase()}&day=tomorrow`,{
            method: 'POST'
        })
        .then(res => res.json()).then(tomorrow => this.setState({tomorrowRead: tomorrow}))
    }

    componentDidMount(){
        this.showHoroscopes();
    }

    toggle() {
        document.getElementById('yesterday').classList.remove('clicked');
        document.getElementById('today').classList.remove('clicked');
        document.getElementById('tomorrow').classList.remove('clicked');
        document.getElementById('change').classList.remove('clicked');
    }

    click(e){
        let click = e.currentTarget;

        if (eval(`this.state.${click.id}`) === true){
            document.getElementById("date").textContent = '';
            eval(`this.setState({${click.id}:!this.state.${click.id}}, () => clicked.classList.toggle("click"))`);
        } else {
            this.setState({yesterday: false, today: false, tomorrow: false, change: false}, () => {
                this.toggle();
                document.getElementById("date").textContent = this.state[this.dict[click.id]].current_date;
                eval(`this.setState({${click.id}:true}, () => clicked.classList.toggle("click"))`);
            });
        }
    }

    render() {
        return (
            <div className='card' id='card'>
                <div className='card-text'>
                    <span className='sign'>{`${this.state.sign}`}</span>
                    <p id="date">
                        {`${this.state.text}`}
                    </p>
                </div>
                <div className='change-sign' id='change' onClick={(e) => this.props.changeSign('change')}>
                    Change Sign
                </div>
                <div className='card-stats'>
                    <div className='stat' id='yesterday' onClick={(e) => this.click(e)}>
                        <div className='value'>Yesterday</div>
                    </div>
                    <div className='stat' id='today' onClick={(e) => this.click(e)}>
                        <div className='value'>Today</div>
                    </div>
                    <div className='stat' id='tomorrow' onClick={(e) => this.click(e)}>
                        <div className='value'>Tomorrow</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Horoscope;