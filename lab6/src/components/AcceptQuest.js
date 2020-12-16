import React from "react";
import { Card, CardHeader, CardContent, Button, TextField, CardMedia, makeStyles } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
const values = [0, 75, 90, 100];

const useStyles = makeStyles(theme => ({
  cardMedia:{
    paddingTop: "56.25%",
    height: 0
  },
  cardRoot:{
    marginBottom: theme.spacing(2)
  }
}))


const SubmitRequest = (props) => {
  const [percent, setPercent] = React.useState(values[values.length - 1]);
  const [reason, setReason] = React.useState('');
  const classes = useStyles();
  const handleChangePercent = (e, val) =>setPercent(val)

  const handleChange = e => setReason(e.target.value)
  const handleSubmit = e => props.onSubmit({percent, reason})

  return (
    <Card className={classes.cardRoot}>
        <CardHeader title={props.questTitle} subheader={props.questDesc} />
        <CardMedia image={props.imgSrc} className={classes.cardMedia}/>
        <CardContent>
            <ToggleButtonGroup
                color="primary"
                value={percent}
                exclusive
                onChange={handleChangePercent}
            >
                {values.map((value) => ( 
                    <ToggleButton key={value} value={value}>{value}</ToggleButton>
                ))}
            </ToggleButtonGroup>
            {percent < 100 && <TextField multiline rows={5} variant="outlined" fullWidth label="powód" onChange={handleChange}/>}
          <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
            Wyślij
          </Button>

        </CardContent>
    </Card>
  );
};
export default SubmitRequest;