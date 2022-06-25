// import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
function App() {
  const colors = ["Red", "Orange", "Purple", "Yellow", "Green"];
  const targetColor = colors.map((color) => <h3>{color}</h3>);
  return (
    <div className="App">
      <div>{targetColor}</div>
      <NavBar> </NavBar> <Hero> </Hero>{" "}
      <Card
        img="katie-zaferes.png"
        rating={5.0}
        reviewCount={20}
        price={201}
        country="USA"
        title="Life Lessons with Katie Zaferes"
      />
    </div>
  );
}

export default App;
