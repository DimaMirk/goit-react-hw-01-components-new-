import { Component } from "react";


class ContactForm extends Component{
  state = {
    name: '',
    number: '',
    }
    
    
handleChange = (ev) => {
    const{name,value} = ev.currentTarget
    this.setState({[name]:value})
}

resetInputState() {
    this.setState({name:'',number:''})
}
    
submitForm = (ev) => {
    const { name, number } = this.state;
    ev.preventDefault()
    this.props.onSubmit({ name, number })
    this.resetInputState()
    }
    
render() {

        return (
        <form onSubmit={this.submitForm }>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onInput={this.handleChange}
              required
            />
          </label>
          <label>
            Number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onInput={this.handleChange}
              required
            />
          </label>
       
          <button type='submit'>Add Contact</button>
        </form>
        )
    }
}

export default ContactForm