import React, { Component } from "react";
import { recipe } from "../tempDetails";

class Details extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     recipe: recipe,
  //     url: `https://www.food2fork.com/api/get?key=fee02f691c938734495939b46be30b88&rId=${this.props.id}`
  //   };
  // }

  // async componentDidMount() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipe: jsonData.recipe
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  state = {
    recipe: recipe
  };

  // async componentDidMount() {
  //   const id = this.props.id;
  //   const url = `https://www.food2fork.com/api/get?key=fee02f691c938734495939b46be30b88&rId=${id}`;
  //   try {
  //     const data = await fetch(url);
  //     const jsonData = await data.json();
  //     this.setState(
  //       (state, props) => {
  //         return { recipe: jsonData.recipe };
  //       },
  //       () => {}
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    const {
      image,
      ingredientLines,
      source,
      url,
      label,
      calories
    } = this.state.recipe;

    const { handleIndex } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                typ="button"
                className="btn btn-warning mb-5 text-capitalize"
                onClick={() => handleIndex(1)}
              >
                back to recipe list
              </button>
              <img
                src={image}
                className="d-block"
                style={{ height: "24rem" }}
                alt="recipe"
              />
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{label}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                provided by {source}
              </h6>
              {/* <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2 text-capitalize"
              >
                publisher webpage
             </a> */}
              <div className="row">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success mx-2 mt-2 text-capitalize col-3"
                >
                  recipe url
                </a>
                <h6 className="text-primary mx-4 mt-3 text-capitalize col-6 font-weight-bold">
                  calories: {calories}
                </h6>
              </div>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredientLines.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
