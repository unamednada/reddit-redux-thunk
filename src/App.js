import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <h1>Subreddit viewer</h1>
        <h2>viewing: </h2>
        <select>
          <option>React JS</option>
          <option>FrontEnd</option>
        </select>
      </div>
    </Provider>
  );
}

export default App;
