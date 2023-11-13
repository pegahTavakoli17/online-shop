import React from "react";
import Select from "react-select";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
export default function SearchBox({
  selectedCategory,
  handleCategory,
  searchField,
  handleSearch,
  handleKeyUp,
  doSearch,
  removeSearch,
}) {
  const options = [
    { value: "all", label: "all" },
    { value: "men's clothing", label: "men's clothing" },
    { value: "women's clothing", label: "women's clothing" },
    { value: "jewelery", label: "jewelery" },
    { value: "electronics", label: "electronics" },
  ];
  return (
    <div
      className="d-flex flex-column flex-sm-row  justify-content-between mt-5"
      style={{ padding: "20px" }}
    >
      <div
        className="col-sm-5 col-12 mt-5 mt-md-0 "
        style={{ minWidth: 314, height: 43 }}
      >
        <Select
          defaultValue={{
            value: selectedCategory,
            label: selectedCategory,
          }}
          onChange={handleCategory}
          options={options}
          name={selectedCategory}
          placeholder={"category"}
          style={{ minWidth: 314, height: 43 }}
          className="border border-3 border-primary rounded-3"
        />
      </div>
      <div className="col-sm-5 col-12 ml-5">
        <Paper
          className="input-style mt-4 mt-sm-0 ml-3 border border-3 border-primary rounded-3"
          sx={{
            minWidth: 314,
            height: 43,
          }}
        >
          <InputBase
            sx={{
              display: "flex",
              alignItems: "center",
              verticalAlign: "middle",
              justifyContent: "center",
              width: "100%",
              height: 36,
            }}
            className="flex-row"
            placeholder="Search..."
            inputProps={{ "aria-label": "search..." }}
            value={searchField}
            onChange={handleSearch}
            onKeyUp={handleKeyUp}
          />
          {searchField !== "" && (
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={removeSearch}
            >
              <CloseIcon style={{ color: "#ccc" }} />
            </IconButton>
          )}
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={doSearch}
          >
            <SearchIcon style={{ color: "#ccc" }} />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}
