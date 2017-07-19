export default function(state=[],action){
	switch(action.type){
		case 'ADD_MOVIE': return [...state,action.payload]
	}
	return state;
}