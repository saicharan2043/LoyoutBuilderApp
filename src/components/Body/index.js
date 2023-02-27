// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const leftNavberCss = showLeftNavbar ? 'left-navber-container' : 'desplay'
      const contentCss = showContent ? 'context-container' : 'desplay'
      const rightNavberCss = showRightNavbar
        ? 'nav-bar-right-container'
        : 'desplay'

      return (
        <div className="container-body">
          <div className={leftNavberCss}>
            <h1 className="heading-left-navbar">Left Navbar Menu</h1>
            <ul className="un-order">
              <li className="list">Item 1</li>
              <li className="list">Item 2</li>
              <li className="list">Item 3</li>
              <li className="list">Item 4</li>
            </ul>
          </div>

          <div className={contentCss}>
            <h1 className="heading-context">Content</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className={rightNavberCss}>
            <h1 className="heading-right-nav">Right Navbar</h1>
            <div className="box-container">
              <div className="box">
                <p className="box-content">Ad 1</p>
              </div>

              <div className="box">
                <p className="box-content">Ad 2</p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
