import axios from 'axios';

const API_KEY='a4c1cf674247035e4c79124cd9ca487d';
const imgURL='https://image.tmdb.org/t/p/w160/'
const base_url='https://api.themoviedb.org/3/search/movie?api_key=a4c1cf674247035e4c79124cd9ca487d&language=en-US&page=1&include_adult=true&query='


function createmovie(response) {
  let movieobj= {name:response.title,rating:response.vote_average,popularity:response.popularity,poster:response.poster_path}
  return {
    type: 'WITHDRAW',
	payload:movieobj   
  };
}


export function registermovie(movie){
	return (dispatch)=>{
		const request= axios.get(`baseurl${movie}`)
		request.then(response){
			dispatch(createmovie(response.data.results[0]))
		}
	}
}