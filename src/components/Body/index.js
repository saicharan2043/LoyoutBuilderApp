// Write your code here

import './index.css'

const Body = () => (
  <div className="container-body">
    <div className="left-navber-container">
      <h1 className="heading-left-navbar">Left Navbar Menu</h1>
      <ul className="un-order">
        <li className="list">Item 1</li>
        <li className="list">Item 2</li>
        <li className="list">Item 3</li>
        <li className="list">Item 4</li>
      </ul>
    </div>

    <div className="context-container">
      <h1 className="heading-context">Content</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>

    <div className="nav-bar-right-container">
      <h1 className="heading-right-nav">Right Navbar</h1>
      <div className="box">
        <p className="box-content">Ad 1</p>
      </div>

      <div className="box">
        <p className="box-content">Ad 2</p>
      </div>
    </div>
  </div>
)

export default Body
