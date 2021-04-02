import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile} from '@material-ui/core';
import tileData from './tileData';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1000,
      height: 1000,
    },
  }));

  
export default function Landing() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={300}  spacing={30} className={classes.gridList}>
                <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                    
                </GridListTile>
            {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
                ))}
            </GridList>
        </div>
        
    )
}