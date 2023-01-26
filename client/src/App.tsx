import HomeContainer from "./components/HomeContainer";
import "./App.css";

function App() {
  console.log(process.env.REACT_APP_API_BASE_URL);
  return (
    <div className="App">
      <HomeContainer />
    </div>
  );
}

export default App;
