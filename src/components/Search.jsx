import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField label='Search' variant="standard" type='search' value={value} onChange={onChange} fullWidth/>;
};

export default Search;