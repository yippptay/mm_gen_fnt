/****
 * Show route
 **/

const React = require("react");
const Layout = require("./components/Layout.jsx");

const Show = (props) => {
  const product = props.product[0];
  return (
    <Layout>
      <div style={{ height: "330px" }}>
        <br />
        <a href={"https://www.youtube.com/watch?v=" + product.link}> {/* Splice link for unique id */}
          <div style={{ color: "#1ed760", fontSize: "16px" }}>
            {product.title}
          </div>
        </a>
        <br />
        <br />
        <div className="container-fluid row">
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + product.link}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> {/* Splice link for embed */}
          <div className="col">
            <br />
            <br />
            <div className="container row">
              <a href="/products" className="btn btn-secondary">
                Home
              </a>
              <form action={`/products/${product._id}/edit`} method="GET"> {/* Edit route */}
                <input type="submit" value="Edit" className="btn btn-warning" />
              </form>
              <form
                action={`/products/${product._id}?_method=DELETE`}
                method="POST"
              > {/* Delete route */}
                <input
                  type="submit"
                  value="Delete"
                  className="btn btn-danger"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

module.exports = Show;
