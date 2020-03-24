import React from "react";

import ShopSidebar from "../components/ShopSideBar";
import ShopFilter from "../components/ShopFilter";

const Shop = () => {
  return (
    <main>
      <section className="bgwhite p-t-55 p-b-65">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
              {/* <ShopSidebar /> */}
            </div>

            <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
              {/* <ShopFilter totalItems={totalItems} />

                <div className='row'>{productList}</div> */}
              <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                <div className="block2">
                  <div className="block2-img wrap-pic-w of-hidden pos-relative">
                    {/* <img src={product.thumbnail} alt={product.name} /> */}

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
                    {/* <a className="block2-name dis-block s-text3 p-b-5">{product.name}</a> */}

                    {/* <span className='block2-price m-text6 p-r-5'>${product.price}</span> */}
                  </div>
                </div>
              </div>
              ;
              {/* <Pagination
                  currentPage={currentPage}
                  totalItems={totalItems}
                  numberItemsPerPage={limit}
                  sort={sort}
                  order={order}
                /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Shop.getInitialProps = async function({ query }) {
//   const page = query.page || 1;
//   const limit = 12;
//   const sort = query.sort || 'id';
//   const order = query.order || 'desc';
//   const res = await fetch(
//     `${apiProducts}?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`
//   );
//   const data = await res.json();

//   return {
//     products: data,
//     totalItems: res.headers.get('X-Total-Count'),
//     currentPage: page,
//     limit: limit,
//     sort: sort,
//     order: order
//   };
// };

export default Shop;
