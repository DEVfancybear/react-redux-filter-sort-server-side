import ShopSidebar from "../components/ShopSideBar";
import ShopFilter from "../components/ShopFilter";
import { connect } from "react-redux";
import {
  fetchDataToServer,
  fetchDataToFilter,
  fetchDataToPagination
} from "../actions/index";
import React, { Component } from "react";
import Pagination from "react-js-pagination";
import "../App.css";
class Shop extends Component {
  componentDidMount = () => {
    this.props.fetchDataToPagination(1);
    // this.props.fetchDataToFilter();
  };

  render() {
    const productList = this.props.data.products.map((product, index) => (
      <div className="col-sm-12 col-md-6 col-lg-4 p-b-50" key={index}>
        <div className="block2">
          <div className="block2-img wrap-pic-w of-hidden pos-relative">
            <img src={product.thumbnail} alt={product.name} />

            <div className="block2-overlay trans-0-4">
              <a
                href="#"
                className="block2-btn-addwishlist hov-pointer trans-0-4"
              >
                <i
                  className="icon-wishlist icon_heart_alt"
                  aria-hidden="true"
                />
                <i
                  className="icon-wishlist icon_heart dis-none"
                  aria-hidden="true"
                />
              </a>
              <div className="block2-btn-addcart w-size1 trans-0-4">
                <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="block2-txt p-t-20">
            <a className="block2-name dis-block s-text3 p-b-5">
              {product.name}
            </a>
            <span className="block2-price m-text6 p-r-5">${product.price}</span>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <main>
          <section className="bgwhite p-t-55 p-b-65">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                  <ShopSidebar />
                </div>
                <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                  <ShopFilter />
                  <div className="row">{productList}</div>
                </div>
              </div>
            </div>
            <div className="pagination p1">
              <Pagination
                disabledClass={"disabled-navigation"}
                prevPageText={"<"}
                nextPageText={">"}
                hideFirstLastPages
                activePage={this.props.data.page}
                // itemsCountPerPage={this.props.data.numItemsPerPage}
                totalItemsCount={this.props.data.totalItems}
                onChange={this.props.fetchDataToPagination}
              />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.rootReducer
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataToServer: () => {
      dispatch(fetchDataToServer());
    },
    fetchDataToFilter: () => {
      dispatch(fetchDataToFilter());
    },
    fetchDataToPagination: page => {
      dispatch(fetchDataToPagination(page));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
