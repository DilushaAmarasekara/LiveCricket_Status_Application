import React, { useState } from "react";
import './MyCard.css';


import {
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Typography,
} from "@material-ui/core";
import { getMatchDetail } from "../Api/Api";

const MyCard = ({ match }) => {
    const [detail, setDatail] = useState({});
    const [open, setOpen] = useState(false);

    const getMatchCard = () => (
        <div class="gridclass">
            <Card class={"cardclass"}
                style={{
                    background: match.matchStarted ? "#ffffff00" : "",
                    marginTop: 15,
                }}
            >

                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item xs={4}>
                            <Typography variant="h5" style={{color:"yellow"}}><b>{match["team-1"]}</b></Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5"><b> </b></Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5" style={{color:"yellow"}}><b>{match["team-2"]}</b></Typography>
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions>
                    <Grid container justify="center">
                        <Button
                            onClick={() => {
                                showDetailBtnClicked(match["unique_id"]);
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Show Detail
                        </Button>
                        <Button
                            style={{ marginLeft: 5 }}
                            variant="contained"
                            color="primary"
                        >
                            Starting time {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );

    const showDetailBtnClicked = (id) => {
        getMatchDetail(id)
            .then((data) => {
                console.log(data);
                setDatail(data);
                handleClickOpen();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {match.type === "Twenty20" ? getMatchCard() : ""}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography>{detail.stat}</Typography>
                        <Typography>
                            Match
                            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                            {match.matchStarted ? " Match is started" : " Still not started"}
                            </span><br/>
                            Toss_winner_team
                            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                            {" "}
                                {match["toss_winner_team"]}
                           </span><br/>
                            Winner_team
                            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                            {" "}
                                {match["winner_team"]}
                           </span>
                        </Typography>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );




};

export default MyCard;
