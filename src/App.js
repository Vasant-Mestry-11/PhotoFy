import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  console.log(process.env.REACT_APP_ACCESS_KEY);
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
