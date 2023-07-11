import React from 'react'

const Skill = () => {
  return (
    <div id="skill">
    <h1 className="title">SKILL</h1>
    <div className="listSkill">
      <div className="item">
        <div className="name">HTML5</div>
        <div className="evaluate" style={{ "--point": "50%" } as React.CSSProperties}></div>
      </div>
      <div className="item">
        <div className="name">CSS3</div>
        <div className="evaluate" style={{ "--point": "50%" } as React.CSSProperties}></div>
      </div>
      <div className="item">
        <div className="name">Javascript</div>
        <div className="evaluate" style={{ "--point": "50%" } as React.CSSProperties}></div>
      </div>
      <div className="item">
        <div className="name">PHP</div>
        <div className="evaluate" style={{ "--point": "50%" } as React.CSSProperties}></div>
      </div>

      <div className="item">
        <div className="name">React JS</div>
        <div className="evaluate" style={{ "--point": "50%" } as React.CSSProperties}></div>
      </div>
      <div className="item">
        <div className="name">Angular JS</div>
        <div className="evaluate" style={{ "--point": "50%" } as React.CSSProperties}></div>
      </div>

      <div className="item">
        <div className="name">Next JS</div>
        <div className="evaluate" style={{ "--point": "50%" } as React.CSSProperties}></div>
      </div>
      <div className="item">
        <div className="name">Node JS</div>
        <div className="evaluate" style={{ "--point": "50%" } as React.CSSProperties}></div>
      </div>
    </div>
  </div>
  )
}

export default Skill