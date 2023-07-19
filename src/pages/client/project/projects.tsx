import React from 'react'

const Projects = () => {
  return (
    <div id="project" >
    <h1 className="title">SELECTED PROJECT</h1>
    <div className="listProject">
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