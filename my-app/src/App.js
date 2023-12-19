import { Component } from 'react';
import './App.css';
import Statistic from './components/Statistic'
import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';


class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
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
  
  render() {
    return (
      <>
        <Section title='Statistics'>
          {this.countTotalFeedback() ?
           <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> :
            <h2>There is no feedback</h2>
          }

        </Section>
        <Section title ='Please leave feedback'>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.updateState}/>
        </Section>
      </>  
    )

  };
}

export default App;
