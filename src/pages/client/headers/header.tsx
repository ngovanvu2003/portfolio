const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Vu.</h1>
      </div>
      <div className="navDiv">
        <label htmlFor="menu">
          <i className="fa-solid fa-bars"></i>
        </label>
      </div>
      <input type="checkbox" id="menu" />
      <ul className="nav">
        <label htmlFor="menu">
          <i className="fa-solid fa-xmark"></i>
        </label>
        <li>
          <a className="btna" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="btna" href="#skill">
            Skill
          </a>
        </li>
        <li>
          <a className="btna" href="#project">
            Project
          </a>
        </li>
        <li>
          <a className="btna" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <div id="theme-toggler" className="fas fa-moon"></div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
