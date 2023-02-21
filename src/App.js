import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='info'>Ta strona jest w budowie. Jeśli coś zepsujesz, zgłoś to na <a href='https://github.com/trublesomeban/ezp-strona'>stronie projektu</a>.</div>
    </div>
  );
}

const Navbar = () => {
 return <nav className='nav'>
        <a className='nav-item' href="/#">Burze</a>
        <a className='nav-item' href="/#">Powodzie</a>
        <a className='nav-item' href="/#">Cyklony</a>
        <a className='nav-item' href="/#">Tornada</a>
        <a className='nav-item' href="/#">Śnieżyce</a>
  </nav>
}

export default App;
