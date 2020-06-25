/****
 * Index route
 **/

const React = require("react");
const Layout = require("./components/Layout.jsx");

const Index = (props) => {
  return (
    <Layout>
      <div style={{ minHeight: "330px" }}>
        <img
          src="https://i.imgur.com/9gpJQ5a.png"
          style={{ display: "block", margin: "auto", width: "75%" }}
        ></img>
        <br />
        <br />
        <br />
        <div className="container-fluid row" style={{ width: "100%" }}>
          {props.products.map((value, index) => {
            return (
              <div
                key={value._id}
                className="card"
                style={{ width: "25%", backgroundColor: "#232323" }}
              >
                <div className="card-img-top">
                  <a href={`/products/${value._id}`}>
                    <iframe
                      width="100%"
                      alt={value.title}
                      src={"https://www.youtube.com/embed/" + value.link} 
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe> {/* Embedding route */}
                  </a>
                </div>
                <div className="card-body" style={{ padding: "1em" }}>
                  <div
                    className="container row justify-content-between align-items-center"
                    style={{
                      margin: "1em 0 0 0",
                      padding: "0",
                      fontSize: "1.25em",
                      fontWeight: "bold",
                    }}
                  >
                    <a href={`/products/${value._id}`}> {/* Show route */}
                      <div style={{ color: "#1ed760" }}>{value.title}</div>
                    </a>
                  </div>
                  <div
                    className="card-text"
                    style={{ marginTop: "1em", fontSize: ".8em" }}
                  >
                    {value.artist}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <a href="/products/new" className="btn btn-secondary">
          Add New Item
        </a>
        <a href="/products/seed" className="btn btn-warning">
          Seed Store
        </a>
        <a href="/products/clear" className="btn btn-danger">
          Clear Store
        </a>
        <br />
        <br />
      </div>
    </Layout>
  );
};

module.exports = Index;
