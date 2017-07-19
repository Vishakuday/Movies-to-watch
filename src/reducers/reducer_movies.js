export default function(state=[],action){
	console.log("inside reducer");
	switch(action.type){
		case 'ADDMOVIE': return [...state,action.payload]
	}
	return state;
}