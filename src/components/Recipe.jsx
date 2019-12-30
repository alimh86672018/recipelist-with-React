import React, { Component } from "react";

class Recipe extends Component {
  render() {
    const { image, source, url, label } = this.props.recipe.recipe;
    //const { handleDetails } = this.props;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img src={image} style={{ height: "16rem" }} alt="recipe" />
            <div className="card-body text-capitalized">
              <h6>{label}</h6>
              <h6 className="text-slanted text-warning">
                provided by {source}
              </h6>
            </div>
            <div className="card-footer">
              {/* <button
                type="button"
                className="btn btn-primary"
                //onClick={() => handleDetails(0, recipe_id)}
              >
                Details
              </button> */}
              <a
                href={url}
                target="_blank"
                className="btn btn-primary mx-2"
                rel="noopener noreferrer"
              >
                Recipe Url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Recipe;
