import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";
import './logo.css';
const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/YourTube" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <h2 className="logo-heading" style={{color:'white',paddingLeft:'2px'}}>YourTube</h2>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
