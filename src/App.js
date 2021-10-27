import React from 'react';
import { connect } from "react-redux";
import { select as selectAction } from './actions';

function App({ select }) {

  const handleSelect = ({ target: { value } }) => {
    select(value);
  }

  return (
    <div className="App">
      <h1>Subreddit viewer</h1>
      <h2>viewing: </h2>
      <select onChange={ (e) => handleSelect(e) }>
        <option value="reactjs">React JS</option>
        <option value="frontend">FrontEnd</option>
      </select>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  select: (selected) => dispatch(selectAction(selected)),
})

export default connect(null, mapDispatchToProps)(App);
