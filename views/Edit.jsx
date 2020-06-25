/****
 * Edit route
 **/

const React = require("react");
const Layout = require("./components/Layout.jsx");

const Edit = (props) => {
  const product = props.product[0];
  return (
    <Layout>
      <div style={{ height: "330px" }}>
        <br />
        <h1 style={{ color: "#1ed760" }}>{product.title}</h1>
        <br />
        <a href="/products" className="btn btn-primary">
          Home
        </a>
        <br />
        <br />
        <form action={`/products/${product._id}?_method=PUT`} method="POST"> {/* Update route */}
          <input type="text" name="title" defaultValue={product.title} />
          <br />
          <input type="text" name="artist" defaultValue={product.artist} />
          <br />
          <input type="text" name="link" defaultValue={product.link} />
          <br />
          <input
            type="submit"
            name=""
            value="Submit"
            className="btn btn-success"
          />
        </form>
      </div>
      <br />
      <br />
      <br />
      <h2 style={{ color: "#1ed760" }}>Here is how to find the ID</h2>
      <img src="https://qph.fs.quoracdn.net/main-qimg-2bd872b21fc3374147706f6fadbf98d6"></img>
    </Layout>
  );
};

module.exports = Edit;
