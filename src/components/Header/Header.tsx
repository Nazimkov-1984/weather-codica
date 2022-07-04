import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar, Grid, Typography } from "@mui/material";
import SearchBox from "../SearchPanel/SearchPanel";
import {
  ReactComponent as Logo
} from "../../assets/logo/logo.svg";
import {  useMemo } from "react";
import InfoLogo from "../SearchPanel/InfoLogo/InfoLogo";

const Header: React.FC = () => {

  const matches: boolean = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );
  const today: string = useMemo(() => {
    return new Date().toLocaleDateString();
  }, []);
  return (
    <AppBar data-testid = "header" sx={{ position: "static", bgcolor: "#6499da" }}>
      <Grid
        container
        spacing={{ xs: 2, sm: 1 }}
        sx={{
          py: { xs: 1, sm: 2 },
          px: 2,
          alignItems: "center",
        }}
      >
        <Grid item xs={6} sm={3} sx={{ display: "flex", alignItems: "center" }}>
          <Logo />
          <Typography variant="h5">Weather APP </Typography>
        </Grid>
        {matches && (
          <Grid item xs={12} sm={6}>
            <SearchBox />
          </Grid>
        )}

        <Grid item xs={6} sm={3} sx={{ display: "flex", alignItems: "center", justifyContent:"end" }}>
          <Typography variant="h6" sx={{ textAlign: "end" }}>
            {today}
          </Typography>
          <InfoLogo/>
        </Grid>
        {!matches && (
          <Grid item xs={12} sm={6}>
            <SearchBox />
          </Grid>
        )}
      </Grid>
    </AppBar>
  );
};

export default Header;
