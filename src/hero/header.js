

import './hero.css';


function Header() {
  return(
  <div className='hero-content'>
    <div className='container'>
      <header className='header'>
        <a href='#'><img className='logo' src="/img/logo.svg" alt="" /></a>
        <nav className='header-navigations'>
          <a className='header__navlink' href="#">Home</a>
          <a className='header__navlink' href="#">Courses</a>
          <a className='header__navlink' href="#">Webinar</a>
          <a className='header__navlink' href="#">Pricing</a>
        </nav>
       <div>
        <select className='header__select'>
          <option selected>Eng</option>
          <option value="1">Rus</option>
          <option value="2">Uzb</option>
        </select>
        <button className='header-btn'>Login</button>
       </div>
      </header>
    </div>
  </div>
  )
}

export default Header;




























































