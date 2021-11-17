import React, {useState} from "react";
import { deepOrange, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import { Badge, Drawer, Typography } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { useHistory, useLocation } from "react-router";
import { AppBar,Toolbar } from "@material-ui/core";
import {format} from 'date-fns'
import { Avatar } from "@material-ui/core";
import { AddCircleOutlined, CallMade, CallReceived, SubjectOutlined, TrendingFlatOutlined } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: theme.spacing(3)
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active:{
      background:deepOrange[200]
  },
  title:{
      padding: theme.spacing(3),
  },
  appbar: {
      width: `calc(100% - ${drawerWidth}px)`
  },
  toolbar: theme.mixins.toolbar,
  date: {
      flexGrow:1,
  },
  avatar:{
    marginLeft:theme.spacing(2)
  }
}));

const Layout = ({ children, notes}) => {
    
  const classes = useStyles();
  const history = useHistory()
  const location = useLocation()

   const aGiderList = [] 
   let aGider = 0
   const aGelirList = [] 
   let aGelir = 0
   const mGiderList = [] 
   let mGider = 0
   const mGelirList = [] 
   let mGelir = 0

   let dGelir = 0
   let dGider = 0
   let dukkan = 0

   notes.map(note => {
     if(note.category === 'ali-gider'){
       aGiderList.push(parseInt(note.title))
     }
     if(note.category === 'ali-gelir'){
      aGelirList.push(parseInt(note.title))
    }
    if(note.category === 'murat-gider'){
      mGiderList.push(parseInt(note.title))
    }
    if(note.category === 'murat-gelir'){
     mGelirList.push(parseInt(note.title))
   }
   })

   for(let i = 0;i<aGiderList.length; i++){
      aGider += aGiderList[i]
   }
   for(let i = 0;i<aGelirList.length; i++){
    aGelir += aGelirList[i]
 }
 for(let i = 0;i<mGiderList.length; i++){
  mGider += mGiderList[i]
}
for(let i = 0;i<mGelirList.length; i++){
mGelir += mGelirList[i]
}

   
   
  
  const menuItems = [
    {
      text: "My Notes",
      icon: <Badge badgeContent={notes.length} color="secondary"> <SubjectOutlined color="secondary" /></Badge>,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
    {
      text: "Tablo",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/tablo",
    },
    {
      text: "Ali Gelir",
      icon: <Badge max={99999999999999999999} badgeContent={aGelir} color="error" showZero > <SentimentSatisfiedAltIcon color="error" /></Badge>,
      path: "/aligelir",
    },
    {
      text: "Ali Gider",
      icon: <Badge max={99999999999999999999} badgeContent={aGider} color="error" showZero > <SentimentVeryDissatisfiedIcon color="error" /></Badge>,
      path: "/aligider",
    },
    {
      text: "Murat Gelir",
      icon: <Badge max={99999999999999999999} badgeContent={mGelir} color="error" showZero > <SentimentSatisfiedAltIcon color="error" /></Badge>,
      path: "/muratgelir",
    },
    {
      text: "Murat Gider",
      icon: <Badge max={99999999999999999999} badgeContent={mGider} color="error" showZero > <SentimentVeryDissatisfiedIcon color="error" /></Badge>,
      path: "/muratgider",
    },
    {
      text: "Gelir",
      icon: <Badge max={99999999999999999999} badgeContent={aGelir + mGelir} color="error" showZero  ><CallMade color="error"  /> </Badge>,
      path: "/toplamgelir",
    },
    {
      text: "Gider",
      icon: <Badge max={99999999999999999999} badgeContent={aGider + mGider} color="error" showZero ><CallReceived color="error" /> </Badge>,
      path: "/toplamgider",
    },
    {
      text: "Mağaza ",
      icon: <Badge max={99999999999999999999} badgeContent={aGelir + mGelir - aGider - mGider} color="error" showZero > <TrendingFlatOutlined color="error"/> </Badge>,
      path: "/toplam",
    },
  ];
  return (
    <div className={classes.root}>
      {/* app bar */}
        <AppBar className={classes.appbar} >
            <Toolbar>
                <Typography className={classes.date} >
                { format(new Date(), 'dd-MM-yyyy') }
                </Typography>
                <Avatar src="/me.png" className={classes.avatar} />
            </Toolbar>
        </AppBar>
      {/* side bar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title} >Alish Place</Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem 
            key={item.text} 
            button 
            onClick={() => history.push(item.path)} 
            className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          
        </List>
      </Drawer>
      <div className={classes.page}>
          <div className={classes.toolbar} ></div>
          {children}
          </div>
    </div>
  );
};

export default Layout;
