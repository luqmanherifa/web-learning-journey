import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import TableComponent from "./TableComponent";
import FormComponent from "./FormComponent";

export default class Pages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: "",
      name: "",
      description: "",
      price: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        items: [
          ...this.state.items,
          {
            id: this.state.items.length + 1,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
          },
        ],
      });
    } else {
      const notChosenitem = this.state.items
        .filter((item) => item.id !== this.state.id)
        .map((filteritem) => {
          return filteritem;
        });

      this.setState({
        items: [
          ...notChosenitem,
          {
            id: this.state.items.length + 1,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
          },
        ],
      });
    }

    this.setState({
      id: "",
      name: "",
      description: "",
      price: 0,
    });
  };

  editData = (id) => {
    const chooseitem = this.state.items
      .filter((item) => item.id === id)
      .map((filteritem) => {
        return filteritem;
      });

    this.setState({
      id: chooseitem[0].id,
      name: chooseitem[0].name,
      description: chooseitem[0].description,
      price: chooseitem[0].price,
    });
  };

  deleteData = (id) => {
    const newitem = this.state.items
      .filter((item) => item.id !== id)
      .map((filteritem) => {
        return filteritem;
      });

    this.setState({
      items: newitem,
    });
  };

  render() {
    return (
      <>
        <NavbarComponent />
        <div className="container mt-5 pb-5">
          <TableComponent
            items={this.state.items}
            editData={this.editData}
            deleteData={this.deleteData}
          />
          <FormComponent
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </>
    );
  }
}
