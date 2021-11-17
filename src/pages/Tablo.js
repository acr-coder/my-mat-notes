import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function Tablo({notes}) {
  const classes = useStyles();

  const [mynotes, setMynotes] = useState([])

  
  useEffect( () => {
    fetch('http://localhost:8001/notes')
    .then(res => res.json())
    .then(data => setMynotes(data))    
    

  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">Tarih</TableCell>
            <TableCell align="right">Miktar</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {mynotes.map((note) => (
            <TableRow key={note.id}>
              <TableCell component="th" scope="row">
                {note.category}
              </TableCell>
              <TableCell align="right">{note.tarih}</TableCell>
              <TableCell align="right">{note.title}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}