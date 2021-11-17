import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Button, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router";


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory()
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('')
  const [tarih, setTarih] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)
    

    if (title === ''){
      setTitleError(true)
    }
    if (details === ''){
      setDetailsError(true)
    }
    

    if (title && details) {
      //console.log(title, details, category);
      fetch('http://localhost:8001/notes', {
        method: 'POST',
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({title, details, category, tarih})
      }).then(() => history.push('/'))
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Not Oluştur
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Miktar"
          type="number"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Açıklama"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <TextField
        onChange={(e) => setTarih(e.target.value)}
    id="date"
    label="Tarih"
    type="date"
    
    className={classes.field}
    InputLabelProps={{
      shrink: true,
    }}
  />
        <FormControl className={classes.field} >
        <FormLabel>Categori</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}  >
          <FormControlLabel value="ali-gelir" control={<Radio />} label="Ali Gelir" />
          <FormControlLabel value="ali-gider" control={<Radio />} label="Ali Gider" />
          <FormControlLabel value="murat-gelir" control={<Radio />} label="Murat Gelir" />
          <FormControlLabel value="murat-gider" control={<Radio />} label="Murat Gider" />
        
        </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightOutlinedIcon />}
        >
          Submit
        </Button>
      </form>

      
    </Container>
  );
}
