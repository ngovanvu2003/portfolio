import React from 'react'

const Banner = () => {
  return (
    <div className="banner" >
    <div className="content">
      <p className="welcome">WELCOME TO MY PROFILE</p>
      <h1>
        Hi, I'm Ngo Vu <br />
        a
        <div className="gradientText">
          <div className="job" data-job1="Developer." data-job2="FrondEnd."></div>
        </div>
      </h1>
      <p>
        My name is Ngo Van Vu. I'm a frontend developer living in Hanoi,
        Vietnam. I studied at FPT Polytechnic Hanoi and graduated in 2023.
        After I graduate, I want to learn more specialized knowledge and
        find the right company for me and below is some information about me
        and the projects I have worked on.
      </p>
      <div className="cv">
        <a href="./assets/image/avatar.png" className="btn-download" download="Download CV">Download CV</a>
      </div>

      <div className="find">
        <h3>FIND WITH ME</h3>
        <ul>
          <li><i className="fa-brands fa-facebook-f"></i></li>
          <li><i className="fa-brands fa-instagram"></i></li>
          <li><i className="fa-brands fa-twitter"></i></li>
          <li><i className="fa-brands fa-github"></i></li>
        </ul>
      </div>
    </div>
    <div className="avatar">
      <img src="./public/avatar (1).png" alt="" />
    </div>
  </div>
  )
}

export default Banner