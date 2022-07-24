import Header from "./components/Header.jsx";
import Card from "./components/Card";
import "./App.css";
import data from "./data.js";

export default function App() {
  const infoList = data.map((info) => <Card key={info.id} info={info} />);

  return (
    <>
      <Header />
      <main className="card__list">{infoList}</main>
      <footer className="footer">
        Developed by: <a href="https://github.com/lmaero">@lmaero</a>
      </footer>
    </>
  );
}
