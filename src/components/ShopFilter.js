import React from "react";

const ShopFilter = () => {
  //   function sortData(event) {
  //     const sorting = event.target.value;
  //     let sort = '';
  //     let order = '';

  //     if (sorting === 'price-asc') {
  //       sort = 'price';
  //       order = 'asc';
  //     } else if (sorting === 'price-desc') {
  //       sort = 'price';
  //       order = 'desc';
  //     }

  //     Router.push({
  //       pathname: '/shop',
  //       query: { sort, order }
  //     });
  //   }

  return (
    <div className="flex-sb-m flex-w p-b-35">
      <div className="flex-w">
        <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
          <select className="selection-2">
            <option value="">Default Sorting</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </div>
      </div>

      {/* <span className="s-text8 p-t-5 p-b-5">{totalItems} Items</span> */}
    </div>
  );
};

export default ShopFilter;
