import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <div className="info">
        Ta strona jest w budowie. Jeśli coś zepsujesz, zgłoś to na{" "}
        <a href="https://github.com/trublesomeban/ezp-strona/issues/new">
          stronie projektu
        </a>
        .
      </div>
      <div>
      </div>
      <footer>
        <div className="warning">
          ⚠ European authorities suspect this site of being used for money
          laundering.{" "}
          <a href="https://eur-lex.europa.eu/EN/legal-content/glossary/money-laundering.html">
            Learn more
          </a>
        </div>
      </footer>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="nav">
      <a className="nav-item" href="/#">
        Burze
      </a>
      <a className="nav-item" href="/#">
        Powodzie
      </a>
      <a className="nav-item" href="/#">
        Cyklony
      </a>
      <a className="nav-item" href="/#">
        Tornada
      </a>
      <a className="nav-item" href="/#">
        Śnieżyce
      </a>
    </nav>
  );
};

export default App;
