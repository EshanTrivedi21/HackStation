import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ onChange, onClick }) {
    let [search, setSearch] = useState("");
    return (
        <Container className="!flex !justify-center !items-center">
            <TextField
                id="search"
                type="search"
                label="Search"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                sx={{ width: "85vw", maxWidth: "500px", height: "50px" }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon
                                sx={{ color: "#505050" }}
                                onClick={(e) => onClick(search)}
                            />
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    );
}
