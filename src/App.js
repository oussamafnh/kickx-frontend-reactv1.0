import Nav from "./coomponents/nav";
import "./coomponents/css/app.css";
import AuthForm from "./coomponents/Authform";
import Carousel from "./coomponents/home/carousel";
import Sec2 from "./coomponents/home/sec2";


function App() {
  return (
    <div className="app-container">
      <div><Nav /></div>
      <div><Carousel /></div>
      <div><Sec2 /></div>

      <div className="ccc">

      </div>
      {/* <AuthForm /> */}
    </div>
  );
}

export default App;
