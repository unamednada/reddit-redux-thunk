import React from 'react';
import { connect } from "react-redux";
import {
  select as selectAction,
  request as requestAction,
  succes as successAction,
  fail as failAction,
  fetchPosts
} from './actions';

function App({ select, selected }) {

  const handleSelect = ({ target: { value } }) => {
    select(value);
  }

  return (
    <div className="App">
      <h1>Subreddit viewer</h1>
      <h2>{ `viewing: ${selected}` }</h2>
      <select onChange={ (e) => handleSelect(e) }>
        <option value="reactjs">React JS</option>
        <option value="frontend">FrontEnd</option>
      </select>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selected: state.defaultReducer.selected,
})

const mapDispatchToProps = (dispatch) => ({
  select: (selected) => dispatch(selectAction(selected)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
