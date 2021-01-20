import React from "react";
import "./navBar.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";

function NavBar(props) {
	return (
		<div>
			<AppBar color="primary" position="static">
				<h1>Todays</h1>
				<Grid container direction="row" justify="flex-end">
					<Grid item>
						<Button variant="outlined">Actions</Button>
					</Grid>
				</Grid>
			</AppBar>
			{/* <List component="nav">
				<ListItem component="div">
					<ListItemText inset className="nav-item">
						<TypoGraphy color="inherit" variant="title">
							Home
						</TypoGraphy>
					</ListItemText>

					<ListItemText inset className="nav-item">
						<TypoGraphy color="inherit" variant="title">
							Tools
						</TypoGraphy>
					</ListItemText>

					<ListItemText inset className="nav-item">
						<TypoGraphy color="inherit" variant="title">
							Settings
						</TypoGraphy>
					</ListItemText>
				</ListItem>
			</List> */}
		</div>
	);
}

export default NavBar;
