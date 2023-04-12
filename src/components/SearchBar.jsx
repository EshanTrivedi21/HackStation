import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({onChange}) {
  return (
    <Container className="!flex !justify-center !items-center">
      <TextField
        id="search"
        type="search"
        label="Search"
        onChange={onChange}
        sx={{ width: "85vw", maxWidth: "500px", height: "50px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{color:"#505050"}} />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}