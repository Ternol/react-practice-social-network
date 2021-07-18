import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProfileComponent from "./components/ProfileComponent";


const App = () => {
  return (
    <div className="wrapper">
        < Header />
        < Nav />
        < ProfileComponent />
    </div>

  );
}

export default App;
