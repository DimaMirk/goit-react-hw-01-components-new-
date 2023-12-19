import {Component} from 'react'

class Statistic extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    updateState = (ev) => {
        console.log(ev.currentTarget.name)
        const {name} = ev.currentTarget
       
        this.setState((prevState) => {
            console.log(prevState)
            return {
                [name]:prevState[name] + 1 
            }
        })
    }

    countTotalFeedback() {
        let total = 0;
        const { state } = this;
        for (const property in state) {
           total += state[property]
        }
        return total
    }

    countPositiveFeedbackPercentage() {
        let total = this.countTotalFeedback()
        let percentage = this.state.good/total*100 || 0
        return percentage
    }

    render() {
        return (
            <>
                <h1>Please leave feedback</h1>
                <ul>
                    <li><button name='good' onClick={this.updateState}>Good</button></li>
                    <li><button name='neutral'onClick={this.updateState}>Neutral</button></li>
                    <li><button name='bad' onClick={this.updateState}>Bad</button></li>
                </ul>
                <h1>Statistics</h1>
                <ul>
                    <li>Good :{this.state.good }</li>
                    <li>Neutral :{this.state.neutral }</li>
                    <li>Bad :{this.state.bad}</li>
                    <li>Total :{this.countTotalFeedback()}</li>
                    <li>Positive :{this.countPositiveFeedbackPercentage() }</li>
                </ul>
            </>
        )
    }
}

export default Statistic