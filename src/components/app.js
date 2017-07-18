import React, { Component } from 'react';

export default class App extends Component {
	
constructor(props){
	super(props);
	this.state={movie:''};
}
	
submithandler=(e)={
e.preventDefault();	
//call action creator

this.setState({movie:''});	
}

changehandler=(e)=>{
	this.setState({movie:e.target.value});
}
	
  render() {
    return (
	<form onSubmit={this.submithandler}>
      <input value={this.state.movie} type="text" placeholder="enter the movie that you want to watch" onChange={this.changehandler}/>
	  <button type="submit">Submit</button>
	</form>
    );
  }
}
