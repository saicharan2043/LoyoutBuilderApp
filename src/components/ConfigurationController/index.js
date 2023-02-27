// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value
      const contentCheckBox = event => {
        onToggleShowContent(event.target.checked)
      }

      const leftNavbarCheckBox = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const rightNavbarCheckBox = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="top-container">
          <h1 className="Layout-text">Layout</h1>
          <div className="container-input">
            <input
              type="checkbox"
              className="input"
              id="content"
              onChange={contentCheckBox}
              checked={showContent}
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="container-input">
            <input
              type="checkbox"
              className="input"
              id="Left Navbar"
              onChange={leftNavbarCheckBox}
              checked={showLeftNavbar}
            />
            <label className="label" htmlFor="Left Navbar">
              Left Navbar
            </label>
          </div>
          <div className="container-input">
            <input
              type="checkbox"
              className="input"
              id="Right Navbar"
              onChange={rightNavbarCheckBox}
              checked={showRightNavbar}
            />
            <label className="label" htmlFor="Right Navbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
