import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/images/loading.gif"
          alt="loader"
        />
      </div>
    );
  }
}
