import "./SolutionsRouter.css";

function SolutionsRouter() {
  return (
    <div className="row">
      <div className="col">
        <div className="col-header">
          <span>By use case</span>
        </div>
        <div className="col-content">
          <div className="col-item">
            <p>B2C Commerce</p>
            <p>Transform your B2C commerce into everything you’ve envisioned with VTEX.</p>
          </div>
          <div className="col-item">
            <p>B2B commerce</p>
            <p>Tailor an ecommerce architecture for your B2B business</p>
          </div>
          <div className="col-item">
            <p>Omnichannel</p>
            <p>Get global inventory visibility and multichannel integrations</p>
          </div>
          <div className="col-item">
            <p>Headless Commerce</p>
            <p>The answer for a more efficient and scalable tech stack</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="col-header">
          <span>By industry </span>
        </div>
        <div className="col-content">
          <div className="col-item">
            <p>Consumer Packaged Goods</p>
            <p>Gain agility with a solution that is the whole package</p>
          </div>
          <div className="col-item">
            <p>Grocery</p>
            <p>Ditch legacy and start fresh with a single platform</p>
          </div>
          <div className="col-item">
            <p>Manufacturing</p>
            <p>Optimize your sales and fulfillment operations</p>
          </div>
          <div className="col-item">
            <p>Retail</p>
            <p>Run multiple business models on the same platform</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionsRouter;
