import Wilder from "./components/Wilder";
import "./App.css";

import blank_profile from "./assets/avatar.png";

function App() {
  const wilders = [
    {
      name: "John Doe",
      img: blank_profile,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat.`,
      skills: [
        { skill: "HTML", votes: 3 },
        { skill: "CSS", votes: 3 },
        { skill: "TypeScript", votes: 3 },
        { skill: "React", votes: 3 },
        { skill: "Node", votes: 2 },
      ],
    },
    {
      name: "Bob Doe",
      img: blank_profile,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat.`,
      skills: [
        { skill: "HTML", votes: 3 },
        { skill: "CSS", votes: 3 },
        { skill: "TypeScript", votes: 3 },
        { skill: "React", votes: 3 },
        { skill: "Node", votes: 2 },
      ],
    },
    {
      name: "Hello Doe",
      img: blank_profile,
      description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat.`,
      skills: [
        { name: "HTML", votes: 3 },
        { name: "CSS", votes: 3 },
        { name: "TypeScript", votes: 3 },
        { name: "React", votes: 3 },
        { name: "Node", votes: 2 },
      ],
    },
  ];

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder, i) => (
            <Wilder key={i} {...wilder} />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
