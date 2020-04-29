import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './index.module.css';
import Countup from 'react-countup';
import cn from 'classnames';

const Cards = (props) => {

    let { confirmed, deaths, recovered, lastUpdate } = props.data;
    if (!confirmed) return <h1>Loading...</h1>

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <Grid item component={Card} xs={12} md={3} className={cn( styles.infected, styles.card)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">Last update: {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={recovered.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">Last update: {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.deaths)} >

                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={deaths.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">Last update: {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;

