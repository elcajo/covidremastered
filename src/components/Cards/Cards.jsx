import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cn from 'classnames';

import cardStyles from './Cards.module.css';

const Cards = ( {data: {confirmed, recovered, deaths, lastUpdate}} ) => {
    
    if(!confirmed){
        return 'Loading ...';
    }
    
    return(
        <div className={ cardStyles.container }>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={cn(cardStyles.card, cardStyles.infected)} >
                    <CardContent>
                        <Typography color="textPrimary">Infected</Typography>
                        <Typography color="textSecondary" gutterBottom>as of {new Date(lastUpdate).toDateString()}:</Typography>
                        <Typography variant="h5" >
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                />
                        </Typography>
                        <Typography variant="body2" >Number of active cases of Covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cn(cardStyles.card, cardStyles.recovered)} >
                    <CardContent>
                        <Typography color="textPrimary">Recoveries</Typography>
                        <Typography color="textSecondary" gutterBottom>as of {new Date(lastUpdate).toDateString()}:</Typography>
                        <Typography variant="h5" >
                        <CountUp 
                                start={0}
                                end={recovered.value}
                                />
                        </Typography>
                        <Typography variant="body2" >Number of recoveries cases of Covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cn(cardStyles.card, cardStyles.deaths)} >
                    <CardContent>
                        <Typography color="textPrimary">Deaths</Typography>
                        <Typography color="textSecondary" gutterBottom>as of {new Date(lastUpdate).toDateString()}:</Typography>
                        <Typography variant="h5" >
                        <CountUp 
                                start={0}
                                end={deaths.value}
                                />
                        </Typography>
                        <Typography variant="body2" >Number of deaths cases of Covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
)
}

export default Cards;