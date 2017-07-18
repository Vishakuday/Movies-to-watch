import React, { Component } from 'react';

export default class App extends Component {
	
	submithandler=(e)={
		e.preventDefault();
	}
	
  render() {
    return (
	<form>
      <input placeholder="enter the movie that you want to watch">
	  <button type="submit">Submit</button>
	</form>
    );
  }
}
