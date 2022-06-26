// import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

const dataList = data.map((item) => <Card key={item.id} {...item}></Card>);
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="cards-list"> {dataList}</section>
    </div>
  );
}

export default App;
