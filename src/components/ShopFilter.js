import { connect } from "react-redux";
import { fetchDataToServer } from "../actions/index";

import React, { Component } from "react";

class ShopFilter extends Component {
  sortData = event => {
    const sorting = event.target.value;
    let sort = "";
    let order = "";

    if (sorting === "price-asc") {
      sort = "price";
      order = "asc";
    } else if (sorting === "price-desc") {
      sort = "price";
      order = "desc";
    } else if (sorting === "name-asc") {
      sort = "name";
      order = "asc";
    } else if (sorting === "name-desc") {
      sort = "name";
      order = "desc";
    }

    this.props.fetchDataToServer(sort, order);
  };
  render() {
    return (
      <div>
        <div className="flex-sb-m flex-w p-b-35">
          <div className="flex-w">
            <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
              <select className="selection-2" onChange={this.sortData}>
                <option value="">Default Sorting</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
            </div>
          </div>

          {/* <span className='s-text8 p-t-5 p-b-5'>{totalItems} Items</span> */}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataToServer: (sort, order) => {
      dispatch(fetchDataToServer(sort, order));
    }
  };
};
export default connect(null, mapDispatchToProps)(ShopFilter);
