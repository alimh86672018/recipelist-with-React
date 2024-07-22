import React, { Component } from "react";
import RecipeList from "./components/RecipeList";
import Details from "./components/RecipeDetails";
//import { recipes } from "./tempList";
import "./App.css";

class App extends Component {
  state = {
    recipes: [],
    url: "https://api.edamam.com/search?q=chicken&app_id=d0f8c8bf&app_key=aca0a3cb7a847bf9319067f93fd4f8f7",
    pageIndex: 1,
    search: "",
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      // console.log(jsonData);
      this.setState({
        recipes: jsonData.hits,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (
          <RecipeList
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        );
      case 0:
        return (
          <Details id={this.state.details_id} handleIndex={this.handleIndex} />
        );
    }
  };

  handleIndex = (index) => {
    this.setState({ pageIndex: index });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id,
    });
  };

  handleChange = (e) => {
    this.setState(
      { search: e.target.value } //, () => {console.log(this.state.search);}
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;
    const query = search;
    const base_url = `https://api.edamam.com/search?q=${query}&app_id=d0f8c8bf&app_key=aca0a3cb7a847bf9319067f93fd4f8f7`;
    this.setState(
      () => {
        return { url: `${base_url}` };
      },
      () => {
        this.getRecipes();
      }
    );
  };

  render() {
    console.log(this.state.recipes);

    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}

export default App;

//"https://www.food2fork.com/api/search?key=fee02f691c938734495939b46be30b88",
//details_id: 47024
