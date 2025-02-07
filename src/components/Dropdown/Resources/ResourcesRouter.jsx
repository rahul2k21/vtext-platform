import "./ResourcesRouter.css"

function ResourcesRouter() {
  return (
    <div className="row">
    <div className="col">
      <div className="col-header">
        <span>Learning</span>
      </div>
      <div className="col-content">
        <div className="col-item">
          <p>VTEX Vision Fall'24</p>
          <p>VTEX Vision is the place where we share exciting news about our new product launches and improvements to our platform.</p>
        </div>
        <div className="col-item">
          <p>Resource center</p>
          <p>Learn from a selection of ebooks, videos, reports, and more</p>
        </div>
        <div className="col-item">
          <p>Blog</p>
          <p>Find exclusive content about digital commerce</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="col-header">

        <span>Support</span>
      </div>
      <div className="col-content">
        <div className="col-item">
          <p>Help Center</p>
          <p>Learn how VTEX works with guides, tutorials, and more</p>
        </div>
        <div className="col-item">
          <p>Developer Portal</p>
          <p>Start developing first-class commerce experiences</p>
        </div>
        <div className="col-item">
          <p>VTEX Compliance & Certifications</p>
        </div>

      </div>
    </div>
  </div>
  )
}

export default ResourcesRouter
