import React, { useEffect, useState} from 'react'
import { Container, Grid, Paper } from '@material-ui/core'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

export default function Notes({notes, setNotes}) {
  
  useEffect( () => {
    fetch('http://localhost:8001/notes')
    .then(res => res.json())
    .then(data => setNotes(data))    

  }, [])

  const handleDelete = async (id) => {
      await fetch('http://localhost:8001/notes/' + id, {
        method: 'DELETE'
      })

      const newNotes = notes.filter(note => note.id !== id)
      setNotes(newNotes)
  }

  return (
    <Container>
      

      <Grid container spacing={3} >

      {notes.map(note => (
        <Grid item key={note.id} xs={12} md={6} lg={4} >
          <NoteCard note={note} handleDelete={handleDelete} />         
          </Grid>
      ))}

      </Grid>
      
    </Container>
    
  )
}


