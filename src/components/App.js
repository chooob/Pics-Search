import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  //two methods to access response from unsplash async/await or .then()

  //setState error
  //original async onSearchSubmit (term) {}
  //Arrow Function is below async keyword has to be placed before the argument
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    //get response passing in function to access the responses logging response in this case
    // .then((reponse) => {
    //   console.log(reponse.data.results);
    // });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar runWhenSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
