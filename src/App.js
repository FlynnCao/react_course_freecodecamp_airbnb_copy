import logo from './logo.svg';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';

function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<Hero></Hero>
			<Card></Card>
		</div>
	);
}

export default App;
