import React from 'react';
import { connect } from 'react-redux'; 

const ComponentOne = (props) => {
    return(
        <div>
             <h1>Reductor 1</h1>
             <div>
            <h4>Edad 1 : { props.age }</h4>
            <button onClick={ props.onAgeUp }>Aumentar</button>
            <button onClick={ props.onAgeDown }>Disminuir</button>
             </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({type:'ADD'}),
        onAgeDown: () => dispatch({type:'SUBSTRACT'})
    };
}

const mapStateToProps = (state) => {
    return {
        age: state.oneState.age
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);
