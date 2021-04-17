import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Rating from "@material-ui/lab/Rating";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialFormData = {
  title: "",
  area_rating: "",
  comment: "",
  recommend_to_friend: "",
  landlord_rating: false,
  building_rating: false,
};

export default function ReviewsForm(props) {
  const { recordForEdit } = props
  
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handlePost = (e) => {
    e.preventDefault()
    
    axios(`/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: formData,
    })
      .then(res => res.data)
      .then(window.location.reload())
      .catch(error => {
        throw error;
      });
  }

  const handlePostEdit = (id, e) => {
    e.preventDefault()
    
    axios(`/api/reviews/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      data: formData,
    })
      .then(res => res.data)
      .then(window.location.reload())
      .catch(error => {
        throw error;
      });
  }
 
  const handleSubmit = (e) => {
    if (recordForEdit !== null) {
      handlePostEdit(recordForEdit.id, e)
    } else {
      handlePost(e)
    }
  }

  useEffect(() => {
    console.log(recordForEdit);
    if (recordForEdit !== null)
      updateFormData({
          ...recordForEdit
      })
  }, [recordForEdit])

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Write a review!
        </Typography>
        <form method="POST" autoComplete="off" action="/" onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                value={formData.landlord_rating}
                control={<Checkbox color="primary" />}
                label="Approve the landlord?"
                labelPlacement="end"
                name="landord_rating"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                value={formData.recommend_to_friend}
                control={<Checkbox color="primary" />}
                label="Recommend to friend"
                labelPlacement="end"
                name="recommend_to_friend"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              Building Rating
              <Rating
                type="number"
                value={formData.building_rating}
                name="building_rating"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              Area Rating
              <Rating
                type="number"
                value={formData.area_rating}
                name="area_rating"
                defaultValue={3}
                precision={1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                variant="outlined"
                value={formData.title}
                required
                fullWidth
                name="title"
                label="Title of review"
                id="title"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={formData.comment}
                required
                type="text"
                fullWidth
                multiline
                rows={5}
                rowsMax={10}
                label="Write a review"
                name="comment"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            item
            xs={12}
            type="submit"
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
