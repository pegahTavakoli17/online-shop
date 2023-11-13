import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import ProductSlider from "./ProductSlider";
import SearchBox from "./SearchBox";
export default function ProductsList() {
  let products = useSelector((state) => state.allProducts.products);
  const disPatch = useDispatch();
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [removingSearch, setRemovingSearch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory.value);
  };
  const handleSearch = (event) => {
    setSearchField(event.target.value);
  };
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      doSearch();
    }
  };
  const doSearch = async () => {
    await fetchProducts();
    setRemovingSearch(false);
  };
  const removeSearch = () => {
    setSearchField("");
    disPatch(setProducts([]));
    setRemovingSearch(true);
    doSearch();
  };
  const fetchProducts = async () => {
    setLoading(true);
    let response = await axios.get("https://fakestoreapi.com/products");
    try {
      if (response.status == 200) {
        response.data.map((element) => (element.discounted = false));
        const arr = response.data.splice(11, 5);
        arr.map((element) => (element.discounted = true));
        setDiscountedProducts(arr);
        let selectedProducts = filterProducts(response.data);
        disPatch(setProducts(selectedProducts));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filterProducts = (products) => {
    let filteredProducts = [...products];
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter((item) => {
        return selectedCategory === item.category;
      });
    }
    if (searchField.trim) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.title.toLowerCase().includes(searchField.toLowerCase());
      });
    }
    return filteredProducts;
  };
  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, removingSearch]);
  console.log(discountedProducts);
  return (
    <div className="d-flex flex-column mainPage">
      <div className="customPage d-flex flex-wrap pb-0 pt-0">
        {loading && (
          <div className="d-flex justify-content-center align-items-center w-100">
            <CircleLoader color="#007bff" />
          </div>
        )}
        {!loading && (
          <div className="d-flex flex-column w-100 p-0">
            {/* product slider */}
            <div
              className="w-100 px-0"
              style={{ height: "350px", paddingBottom: "200px" }}
            >
              {!loading && <ProductSlider products={discountedProducts} />}
            </div>
            {/* select and search */}
            <SearchBox
              selectedCategory={selectedCategory}
              handleCategory={handleCategory}
              searchField={searchField}
              handleSearch={handleSearch}
              handleKeyUp={handleKeyUp}
              doSearch={doSearch}
              removeSearch={removeSearch}
            />
            {/* product list */}
            <div className="d-flex flex-wrap">
              {products.length != 0 &&
                products.map((product, index) => {
                  return (
                    <div key={index} className="col-12 col-md-6 col-lg-3 p-3 ">
                      <ProductComponent product={product} offer={false} />
                    </div>
                  );
                })}
            </div>
            {/* no result text */}
            <div
              className="text-center  w-100 h-100 d-flex justify-content-center align-items-center"
              style={{ verticalAlign: "middle" }}
            >
              {products.length == 0 && (
                <span className="text-primary">
                  There is no product available
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
