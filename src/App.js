import Navbar from "./coomponents/nav";
import "./coomponents/css/app.css";
import Routerx from "./router";
import Footer from "./coomponents/home/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routerx />
    </div>
  );
}

export default App;
