const { createStore } = require('redux');

const newState = {
    age : 25
};


const myReducer = ( state = newState, action ) => {

    const newState = {...state};
    if( action.type === 'ADD' ) {
        newState.age += action.val;
    }

    if( action.type === 'SUBSTRACT') {
        newState.age -= action.val;
    }

    return newState;
}

const store = createStore(myReducer);

store.subscribe (()=> {
    console.log('Satte Changed' + JSON.stringify( store.getState() ));
})
// action
//console.log('Before add' + JSON.stringify( store.getState() ));

store.dispatch({type:'ADD', val :10});
//console.log('After add' + JSON.stringify( store.getState() ));

store.dispatch({type:'SUBSTRACT', val : 5});

//console.log('After SUBSTRACT' + JSON.stringify( store.getState()));
