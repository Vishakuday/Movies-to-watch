import React, { Component } from 'react';
import * as allactions from '../actions'
import {connect} from 'react-redux'
import Movielist from './movielist';

class App extends Component {
	
constructor(props){
	super(props);
	this.state={movie:''};
}
	
submithandler=(e)=>{
e.preventDefault();
//call action creator.....
this.props.registermovie(this.state.movie);
this.setState({movie:''});
}

changehandler=(e)=>{
	this.setState({movie:e.target.value});
}
	
  render() {
    return (
	<div>
	<form onSubmit={this.submithandler}>
      <input value={this.state.movie} type="text" placeholder="enter the movie that you want to watch" onChange={this.changehandler}/>
	  <button type="submit">Submit</button>
	</form>
	<Movielist />
	</div>
    );
  }
}

export default connect(null,allactions)(App);
