import React from "react";
import ReactDOM from "react-dom";
import "./css/style.scss";
import Form from "./components/NewForm";
import EditForm from "./components/EditForm";

const App = (props) => {
  // const addBookmarkPlaceholder = 'Add Bookmark';
  // const EditBookmarkPlaceholder = 'Edit';
  const [bookmarks, setBookmarks] = React.useState(null);
  const [showEditOrCreate, setShowEditOrCreate] = React.useState(false);
  //This is test code, I used to figure out how react works
  const [state, setState] = React.useState({
    hello: "hello world",
    cheese: "gouda",
  });
  //This is test code, I used to figure out how react works
  const [stat1, setStat1] = React.useState({
    id: "999999999",
    title: "blood orange",
    url: "url",
  });
  /////// sets state for editing
  const [editBookmark, setEditBookmark] = React.useState({
    id: "",
    title: "",
    url: "",
  });
  const baseURL = "https://mmgenbk.herokuapp.com";
  const blank = { title: "", url: "" };

  const getInfo = async () => {
    const response = await fetch(`${baseURL}/bookmarks/index`);
    const result = await response.json();
    setBookmarks(result);
  };

  React.useEffect(() => {
    getInfo();
  }, []);

  const handleCreate = async (data) => {
    const response = await fetch(`${baseURL}/bookmarks/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    getInfo();
  };

  const handleSelect = async (bookmark) => {
    setEditBookmark({
      ...editBookmark,
      id: bookmark._id,
      title: bookmark.title,
      url: bookmark.url,
    });
    // console.log("Edit bookmark", editBookmark);
    // console.log("Bookmark", bookmark);
  };

  const handleEdit = async (data) => {
    const response = await fetch(`${baseURL}/bookmarks/update/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //grab the updated list of holidays
    getInfo();
    //We do not want to display the edit route after we have competed an edit.
    //This will toggle back to displaying the create functionality.
    setShowEditOrCreate(!showEditOrCreate);
  };

  const handleDelete = async (data) => {
    const respone = await fetch(`${baseURL}/bookmarks/delete/${data._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    getInfo();
  };

  return (
    <>
      <div className="main">
        <h1>Bookmark'd</h1>
        <h2>Created By James Gathings and Phil Mayo using the MERN stack</h2>
        {/**
         * This toggles to either show the create functionality or show the edit functionality
         */}
        {!showEditOrCreate && (
          <div className="addForm">
            <h3>Add A Bookmark</h3>
            <Form initial={blank} handleSubmit={handleCreate} />
          </div>
        )}
        {/**
         * This toggles to either show the create functionality or show the edit functionality
         */}
        {showEditOrCreate && (
          <div className="editForm">
            <EditForm
              initial={editBookmark}
              handleSubmit={handleEdit}
              resetForm={blank}
            />
          </div>
        )}
        {/**
         * The next couple of lines are test/probing code.
         */}
        {/* <h1>{state.cheese}</h1>
            {showText && <h1>{stat1.id} - {stat1.title} - {stat1.url}</h1>} */}
        <div>
          {bookmarks
            ? bookmarks.map((bookmark, index) => {
                return (
                  <div key={bookmark._id}>
                    <div className="main-list-item">
                      <div className="main-list-item-div main-list-item-div-one">
                        <a href={bookmark.url} target="_blank">
                          <button>{bookmark.title}</button>
                        </a>
                      </div>
                      <div className="main-list-item-div main-list-item-div-two">
                        <button
                          className="main-list-btn"
                          onClick={() => {
                            handleSelect(bookmark);
                            /**
                             * Toggle between displaying edit or create functionality.
                             */
                            setShowEditOrCreate(!showEditOrCreate);
                            // setStat1({...stat1,id:bookmark._id,title:bookmark.title,url:bookmark.url});
                            // setState({...state,cheese:"American"})
                            // console.log("EditBookmark", editBookmark);
                            // console.log("----------");
                          }}
                        >
                          &#9998;
                        </button>
                        <button
                          className="main-list-btn"
                          onClick={() => {
                            handleDelete(bookmark);
                          }}
                        >
                          &#10007;
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : "...Loading"}
        </div>
      </div>
    </>
  );
};

const target = document.getElementById("app");
ReactDOM.render(<App />, target);
