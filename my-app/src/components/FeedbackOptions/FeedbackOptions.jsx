import { Component } from 'react'

class FeedbackOptions extends Component{
    
    
    render() {
        console.log(this.props)
        const { options, onLeaveFeedback } = this.props;
        console.log( Object.keys(options))
        return (
            <ul>
                {
                    Object.keys(options).map((opt) => (<li key={opt}><button name={opt} onClick={onLeaveFeedback}>{opt}</button></li>))
                }
            </ul>
        )
    }
}

export default FeedbackOptions 

