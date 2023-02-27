// Write your code here
import './index.css'

const ConfigurationController = () => (
  <div className="top-container">
    <h1 className="Layout-text">Layout</h1>
    <div className="container-input">
      <input type="checkbox" className="input" id="content" />
      <label className="label" htmlFor="content">
        Content
      </label>
    </div>
    <div className="container-input">
      <input type="checkbox" className="input" id="Left Navbar" />
      <label className="label" htmlFor="Left Navbar">
        Left Navbar
      </label>
    </div>
    <div className="container-input">
      <input type="checkbox" className="input" id="Right Navbar" />
      <label className="label" htmlFor="Right Navbar">
        Right Navbar
      </label>
    </div>
  </div>
)

export default ConfigurationController
