import React from 'react';
import { connect } from 'react-redux';

const ComponentTwo = (props) => {
    return (
        <div>
            <h1>Reductor 2</h1>
            <div>
                <h4>Edad 2 : {props.edad}</h4>
                <button onClick={ props.onAgeUpTwo }>Aumentar edad 2</button>
                <button onClick={ props.onAgeDownTwo }>Disminuir edad 2</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        edad: state.twoState.age
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUpTwo: () => dispatch({ type: 'AGREGAR_EDAD' }),
        onAgeDownTwo: () => dispatch({ type: 'QUITAR_EDAD' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTwo);