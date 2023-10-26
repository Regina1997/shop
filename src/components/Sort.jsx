import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { fetchItemsByCategory } from "../store/slices/books";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Sort = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const { books } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length > 0) {
      const stuff = [];
      books.map((book) => stuff.push(book.category));
      setCategories([...new Set(stuff)]);
    }
  }, [books]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCategory(value);
    dispatch(fetchItemsByCategory(value));
  };

  return (
    <div>
      <FormControl sx={{ width: 300, mb: "3rem" }} >
        <InputLabel id="demo-multiple-chip-label">Выбрать категорию</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={selectedCategory}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="Выбрать категорию"
            />
          }
          MenuProps={MenuProps}
        >
          {categories.length > 0 &&
            categories.map((category) => (
              <MenuItem
                key={category}
                value={category}        
              >
                {category}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;

