import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./horizontal-header.css";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { connect } from "react-redux";

function TabPanel(props) {
  const { user, children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="nav-bar">
        <Tabs
          value={value}
          TabIndicatorProps={{ style: { background: "none" } }}
          className="tab-anim"
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Link to="/" style={{ color: "white" }}>
            {" "}
            <Tab
              label="CURRENCY CONVERSION"
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: "16px",
                fontWeight: "900",
                letterSpacing: "0.1em",
              }}
              {...a11yProps(0)}
            />
          </Link>
          <Link to="/EXCHANGE" style={{ color: "white" }}>
            {" "}
            <Tab
              label="EXCHANGE RATE"
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: "16px",
                fontWeight: "900",
                letterSpacing: "0.1em",
              }}
              {...a11yProps(0)}
            />
          </Link>
          <Link to="/Signin" style={{ color: "white" }}>
            {" "}
            <Tab
              label="AUTHENTICATION"
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: "16px",
                fontWeight: "900",
                letterSpacing: "0.1em",
              }}
              {...a11yProps(0)}
            />
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});
export default connect(mapStateToProps, null)(SimpleTabs);
