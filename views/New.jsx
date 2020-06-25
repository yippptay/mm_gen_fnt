/****
 * New route
 **/

const React = require("react");
const Layout = require("./components/Layout.jsx");

const New = () => {
  return (
    <Layout>
      <div style={{ height: "330px" }}>
        <h1 style={{ color: "#1ed760" }}>Add New Item</h1>
        <br />
        <a href="/products" className="btn btn-primary">
          Home
        </a>
        <br />
        <br />
        <form action="/products/product" method="POST"> {/* Create route */}
          <input type="text" name="title" placeholder="title" />
          <br />
          <input type="text" name="artist" placeholder="artist" />
          <br />
          <input type="text" name="link" placeholder="ID" />
          <br />
          <br />
          <input
            type="submit"
            name=""
            placeholder="Submit"
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

module.exports = New;
