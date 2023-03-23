import logo from "./assets/logo.png";
import leaf from "./assets/Leaf.png";
import "./App.css";
import Posts from "./Posts";

function App() {
	return (
		<div className="App">
			<img className="logo bounce-7" src={logo} alt="Website logo"></img>
			<div className="bg">
				<section className="content">
					<article>
						<Posts />
					</article>
				</section>
				<footer className="footer">
					<a
						href="https://tozeos.dev.br"
						aria-label="Website"
						target="_blank"
						rel="noopener noreferrer nofollow">
						<img src={leaf}></img>
					</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
