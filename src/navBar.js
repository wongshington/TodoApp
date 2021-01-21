import React from "react";
import "./navBar.css";

// import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import MenuIcon from "@material-ui/icons/Menu";
import DoneIcon from "@material-ui/icons/Done";
import TypoGraphy from "@material-ui/core/Typography";

function NavBar(props) {
	return (
		<AppBar>
			<ToolBar className="header">
				<IconButton>
					<MenuIcon className="header-item" />
				</IconButton>
				<TypoGraphy className="header-item" variant="h4">
					Today's
				</TypoGraphy>
				<DoneIcon className="header-item" fontSize="large" />
			</ToolBar>
		</AppBar>
	);
}

export default NavBar;
