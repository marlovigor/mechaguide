import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

function Nav(props) {
  return (
    <div>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Link to={"/about"}>
          <Button>About</Button>
        </Link>
        <Link to={"/latest"}>
          <Button>Latest</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}

export default Nav;
