import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    //this.onInput = this.onInput.bind(this);
  }

  // onInput(event){
  //   this.setState({ term: event.target.value });
  // }

  //arrow function are automatically binded with this other wise have to define bind function with this in the
  //consturctor
  onInput = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    //when using props in a class based component have to add "this.props"
    //when using props in a function based components can just call "props." directly
    this.props.runWhenSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search </label>
            <input
              type="text"
              onChange={this.onInput}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
