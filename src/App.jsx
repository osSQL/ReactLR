import logo from './picture/Logo.svg'
import cart from './picture/Cart.svg'
import src from '../src/picture/Search.svg'
import bg_2 from '../src/picture/bg_2.svg'
import './App.css';


function App() {
  return (
    <>
    <div className="header">
        <img src={logo} alt="logo" />
        <p>Organik</p>
        <ul className='heaven'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Pages</a></li>
          <li><a href='#'>Shop</a></li>
          <li><a href='#'>Project</a></li>
          <li><a href='#'>News</a></li>
        </ul>
        <div className='input'>
          <input type='text' />
          <img src={src} className="App-search" alt="src" />
        </div>
        <div>
          <img src={cart} className="App-cart" alt="cart" />
          <p>cart(0)</p>
        </div>
    </div>
    <div>
      <img src={bg_2} alt="bg2"/>
    </div>
    </> 
  );
}

export default App;
