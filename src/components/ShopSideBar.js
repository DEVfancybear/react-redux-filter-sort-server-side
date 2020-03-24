import React, { Component } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchDataToFilter, fetchDataToServer, search } from "../actions/index";
class ShopSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  filterByName = event => {
    const filter = event.target.value;
    let name = "";
    if (event.target.checked === false) {
      // console.log(event.target.checked);
      this.props.fetchDataToServer();
    } else if (filter === "Appetizer - Lobster Phyllo Roll") {
      name = "Appetizer - Lobster Phyllo Roll";
    } else if (filter === "Bread - Dark Rye, Loaf") {
      name = "Bread - Dark Rye, Loaf";
    } else if (filter === "Carbonated Water - Lemon Lime") {
      name = "Carbonated Water - Lemon Lime";
    } else if (filter === "Flour - Bran, Red") {
      name = "Flour - Bran, Red";
    } else if (filter === "Lettuce - Romaine, Heart") {
      name = "Lettuce - Romaine, Heart";
    }
    this.props.fetchDataToFilter(name);
  };
  onChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };
  onSearch = e => {
    e.preventDefault();
    this.props.search(this.state.keyword);
  };
  render() {
    return (
      <div>
        <div className="leftbar p-r-20 p-r-0-sm">
          <h4 className="m-text14 p-b-7">Filter By Name</h4>
          <ul className="p-b-54" onChange={this.filterByName}>
            <li className="p-t-4">
              <Form.Check
                value="Appetizer - Lobster Phyllo Roll"
                label="Appetizer - Lobster Phyllo Roll"
                type="checkbox"
              />
            </li>
            <li className="p-t-4">
              <Form.Check
                value="Bread - Dark Rye, Loaf"
                label="Bread - Dark Rye, Loaf"
                type="checkbox"
              />
            </li>
            <li className="p-t-4">
              <Form.Check
                value="Carbonated Water - Lemon Lime"
                label="Carbonated Water - Lemon Lime"
                type="checkbox"
              />
            </li>
            <li className="p-t-4">
              <Form.Check
                value="Flour - Bran, Red"
                label="Flour - Bran, Red"
                type="checkbox"
              />
            </li>
            <li className="p-t-4">
              <Form.Check
                value="Lettuce - Romaine, Heart"
                label="Lettuce - Romaine, Heart"
                type="checkbox"
              />
            </li>
          </ul>

          <h4 className="m-text14 p-b-32">Search</h4>
          <div className="filter-price p-t-22 p-b-50">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                name="keyword"
                value={this.state.keyword}
                onChange={e => this.onChange(e)}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={this.onSearch}>
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataToFilter: name => {
      dispatch(fetchDataToFilter(name));
    },
    fetchDataToServer: () => {
      dispatch(fetchDataToServer());
    },
    search: keyword => {
      dispatch(search(keyword));
    }
  };
};
export default connect(null, mapDispatchToProps)(ShopSideBar);
