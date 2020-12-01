import FilterComponent from "./components/FilterComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">SpaceX Launch Programs</header>
        <div className="mainContainer">
            <FilterComponent />
        </div>
        <div className="row">
          <div className="col-12 col-m-12 col-lg-12 center-text">
            <span className="bold-text">Developed by : </span><span>Radhika Radhakrishnan</span>
          </div>
        </div>
    </div>
  );
}

export default App;
