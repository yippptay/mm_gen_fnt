/****
 * Template
 **/

const React = require("react");

const Layout = (props) => {
  return (
    <html>
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Spotify?</title>
      </head>
      <body>
        <main>{props.children}</main>
      </body>
    </html>
  );
};

module.exports = Layout;
