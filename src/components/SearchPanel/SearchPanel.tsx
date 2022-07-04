import React, { useState, FormEvent, useCallback,  BaseSyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { addCity, setLoading } from "../../redux/actions";
import { TypedDispatch } from "../../redux/store";
import { Search, AddButton, SearchIconWrapper, StyledInputBase } from "./style";

const SearchPanel: React.FC = (): JSX.Element => {
  const dispatch:TypedDispatch = useDispatch<TypedDispatch>();
  const [city, setCity] = useState<string>("");

  const onChangeInputHandler = useCallback(
    (event: React.ChangeEvent<{ value: string }>) => {
      setCity(event.currentTarget.value);
    },
    []
  );

  const addOneCity = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setLoading(-10));
    dispatch(addCity(city));
    setCity("");
  },[city, dispatch]);

  const onBlurInputHandler = useCallback((e: BaseSyntheticEvent)=> {
    e.target.placeholder = "Search city...";
  }, [])
  const onFocusInputHandler = useCallback((e: BaseSyntheticEvent) => {
    e.target.placeholder = "";
  }, []);

  return (
    <div data-testid = "searchpanel">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <Box
          component="form"
          autoComplete="off"
          onSubmit={addOneCity}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <StyledInputBase
            placeholder="Search city..."
            onChange={onChangeInputHandler}
            onBlur = {onBlurInputHandler}
            onFocus= {onFocusInputHandler}
            value={city}
            name="city"
            fullWidth
            required
            error 
          />
          <AddButton>
            <AddIcon />
          </AddButton>
        </Box>
      </Search>
    </div>
  );
};

export default SearchPanel;
