import React from 'react';
import { connect } from "react-redux";
import {
  select as selectAction,
  fetchPosts as fetchAction,
} from './actions';

function App({ select, selected, fetchPosts, loading, posts }) {

  const handleSelect = ({ target: { value } }) => {
    select(value);
    fetchPosts(value);
  }

  return (
    <div className="App">
      <h1>Subreddit viewer</h1>
      <h2>{ `viewing: ${selected}` }</h2>
      <select onChange={ (e) => handleSelect(e) }>
        <option value="reactjs">React JS</option>
        <option value="frontend">FrontEnd</option>
      </select>
      { !loading && (
          posts.map((post) => (
            <p>{ post.data.title }</p>
          ))
        )}
      { loading && <h1>Loading...</h1> }
    </div>
  );
}

const mapStateToProps = (state) => ({
  selected: state.defaultReducer.selected,
  loading: state.defaultReducer.loading,
  posts: state.defaultReducer.posts,
})

const mapDispatchToProps = (dispatch) => ({
  select: (selected) => dispatch(selectAction(selected)),
  fetchPosts: (selected) => dispatch(fetchAction(selected)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
