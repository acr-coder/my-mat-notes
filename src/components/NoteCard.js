import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { blue, deepOrange, green, pink, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'ali-gelir'){
                return yellow[700]
            }
            if (note.category === 'ali-gider'){
                return green[500]
            }
            if (note.category === 'murat-gelir'){
                return pink[700]
            }
            if (note.category === 'murat-gider'){
                return blue[500]
            }
        }
    },
    subColor: {
        color: (note) => {
            if (note.category === 'ali-gelir'){
                return yellow[700]
            }
            if (note.category === 'ali-gider'){
                return green[500]
            }
            if (note.category === 'murat-gelir'){
                return pink[700]
            }
            if (note.category === 'murat-gider'){
                return blue[500]
            }
        }
    }, 
})

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note)
    return (
        <div>
            <Card elevation={1}  >
                <CardHeader
                avatar={
                    <Avatar className={classes.avatar} >
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)} >
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.title}
                subheader={<Typography className={classes.subColor} >{note.category}({note.tarih})</Typography>}
                
                
                 />
                 <CardContent>
                     <Typography variant="body2" color="textSecondary" >
                         {note.details}
                     </Typography>
                 </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
