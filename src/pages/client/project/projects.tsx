import React from 'react'
import SlideShow from './slideShow'

const Projects = () => {
  return (
    <div id="project" >
    <h1 className="title">SELECTED PROJECT</h1>
    <div className="find-category">
        <ul>
          <li><h2>All</h2></li>
          <li><i className="fa-brands fa-css3-alt"></i></li>
          <li><i className="fa-brands fa-php"></i></li>
          <li><i className="fa-brands fa-js"></i></li>
          <li><i className="fa-brands fa-angular"></i></li>
        </ul>
      </div>
    <div className="listProject">
      <div className="item">
        <img className="image" src="../../../../public/img1.jpg" alt="" />
        <div className="middle">
          <div className="name">HPV Real estate</div>
          <div className="box">
            <a href="#m1-o" className="link-1" id="m1-c" > Detail</a>
            <a href="https://vithoang.000webhostapp.com/" className="link-1" id="m1-c">Live</a>
            <div className="modal-container" id="m1-o" style={{"--m-background": "transparent;"} as React.CSSProperties}>
              <div className="modal">
                <h1 className="modal__title">HPV Real estate DA1</h1>
                {/* slideShow */}
                  <SlideShow/>
                {/* slideShow */}
                <p className="modal__text">Trang web nay được làm với nhóm HPV trong vòng 1 , làm trong quá trình dự án 1 của trường </p>
                  <a href="#m1-o" className="link-1" id="m1-c">Detail</a>
                <a href="https://vithoang.000webhostapp.com/" className="link-1" id="m1-c">Live</a>
                <a href="https://vithoang.000webhostapp.com/" className="link-1" id="m1-c">Github</a>
                <a href="#project" className="link-2"></a>
              </div>
            </div>
          </div>
         
        </div>
      </div>    

      <div className="item">
        <img className="image" src="../../../../public/img1.jpg" alt="" />
        <div className="middle">
          <div className="name">Project Name 1</div>
        
          <div className="box">
            <a href="#m1-o" className="link-1" id="m1-c">Modal 1</a>
            <div className="modal-container" id="m1-o" style={{"--m-background": "transparent;"} as React.CSSProperties}>
              <div className="modal">
                <h1 className="modal__title">Modal 1 Title</h1>
                <p className="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta
                  maiores libero minus obcaecati iste optio, eius labore repellendus.</p>

                <a href="#project" className="link-2"></a>
              </div>
            </div>
          </div>
         
        </div>
      </div>    
      <div className="item">
        <img className="image" src="../../../../public/img1.jpg" alt="" />
        <div className="middle">
          <div className="name">Project Name 1</div>
        
          <div className="box">
            <a href="#m1-o" className="link-1" id="m1-c">Modal 1</a>
            <div className="modal-container" id="m1-o" style={{"--m-background": "transparent;"} as React.CSSProperties}>
              <div className="modal">
                <h1 className="modal__title">Modal 1 Title</h1>
                <p className="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta
                  maiores libero minus obcaecati iste optio, eius labore repellendus.</p>

                <a href="#project" className="link-2"></a>
              </div>
            </div>
          </div>
         
        </div>
      </div>    
      <div className="item">
        <img className="image" src="../../../../public/img1.jpg" alt="" />
        <div className="middle">
          <div className="name">Project Name 1</div>
        
          <div className="box">
            <a href="#m1-o" className="link-1" id="m1-c">Modal 1</a>
            <div className="modal-container" id="m1-o" style={{"--m-background": "transparent;"} as React.CSSProperties}>
              <div className="modal">
                <h1 className="modal__title">Modal 1 Title</h1>
                <p className="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta
                  maiores libero minus obcaecati iste optio, eius labore repellendus.</p>

                <a href="#project" className="link-2"></a>
              </div>
            </div>
          </div>
         
        </div>
      </div> 
      <div className="item">
        <img className="image" src="../../../../public/img1.jpg" alt="" />
        <div className="middle">
          <div className="name">Project Name 1</div>
        
          <div className="box">
            <a href="#m1-o" className="link-1" id="m1-c">Modal 1</a>
            <div className="modal-container" id="m1-o" style={{"--m-background": "transparent;"} as React.CSSProperties}>
              <div className="modal">
                <h1 className="modal__title">Modal 1 Title</h1>
                <p className="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta
                  maiores libero minus obcaecati iste optio, eius labore repellendus.</p>

                <a href="#project" className="link-2"></a>
              </div>
            </div>
          </div>
         
        </div>
      </div> 
            <div className="item">
        <img className="image" src="../../../../public/img1.jpg" alt="" />
        <div className="middle">
          <div className="name">Project Name 1</div>
        
          <div className="box">
            <a href="#m1-o" className="link-1" id="m1-c">Modal 1</a>
            <div className="modal-container" id="m1-o" style={{"--m-background": "transparent;"} as React.CSSProperties}>
              <div className="modal">
                <h1 className="modal__title">Modal 1 Title</h1>
                <p className="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta
                  maiores libero minus obcaecati iste optio, eius labore repellendus.</p>

                <a href="#project" className="link-2"></a>
              </div>
            </div>
          </div>
         
        </div>
      </div> 
    </div>
  </div>
  )
}

export default Projects