import logo from "./assets/logo.png";
import leaf from "./assets/Leaf.png";
import "./App.css";
import { postagens } from "./posts";

function App() {
	return (
		<div className="App">
			<img className="logo bounce-7" src={logo} alt="Website logo"></img>
			<div className="bg">
				<section className="content">
					{postagens.map((post, i) => (
						<article key={i}>
							<h1 className="title">
								Learning Log {`#` + i + 1} - {post.date}
							</h1>

							<h3>What did I learn today?</h3>

							<p>{post.p1}</p>

							<h3>What did I like the most?</h3>

							<p>{post.p2}</p>

							<h3>What worked well? What did not?</h3>

							<p>{post.p3}</p>

							<h3>How can I apply this knowledge in my English Classes?</h3>

							<p>{post.p4}</p>

							<h3>What is my grade today about participation?</h3>

							<p>{post.p5}</p>
						</article>
					))}
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
