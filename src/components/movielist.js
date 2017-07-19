import React, { Component } from 'react';
import * as allactions from '../actions'
import {connect} from 'react-redux'



class Movielist extends Component {
	
	rendermovies(){
		return this.props.movies.map(function(movie){
			return <li>{movie.name}</li>
		})
	}
	
	render(){
		console.log(this.props.movies);
		if(this.props.movies.length!=0){
		return(
		<ul>
		{this.rendermovies()}
		</ul>
		)}
		else
		return(
	<div>no movies yet</div>
	)
	}
}

function mapStateToProps(state){
	return{
		movies:state.movies
	}
}

export default connect(mapStateToProps,allactions)(Movielist);