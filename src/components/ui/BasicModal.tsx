import { Box, Typography, Modal, Divider } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import React from 'react';

export const style = {
  wrapper: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  },
  inputFields: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '15px',
    '.MuiInput-root': {
      marginBottom: '20px',
    },
    gap: '1em'

  },
  buttons: {
    display: 'flex',
    justifyContent: 'end',
    gap: 2,
  }
};

interface BasicModalProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  description: string;
  content: React.ReactNode;
  // validate: () => void;
}


const BasicModal = ({ open, onClose, title, description, content }: BasicModalProps) => {
  // const BasicModal = ({ open, onClose, title, description, content, validate }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style.wrapper} onClick={(e) => { e.stopPropagation() }}>
        {/*<div className='flex flex-row justify-between'> */}
        <div className='grid grid-cols-2 gap-1'>
          {/*  justify-self-start*/}
          <Typography id="modal-modal-title" variant="h5" component="h2" className="col-start-1 self-end">
            {title}
          </Typography>

          <IconButton aria-label="close"
            onClick={onClose} className="col-end-auto justify-self-end" // self start
          // sx={{
          //     position:'absolute',
          //     right: 8,
          //     top: 8,
          //     color: 'grey'
          // }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </div>
        <Divider />


        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>

        {content}

        {/* <Box sx={style.buttons}>
            <Button variant="contained" onClick={validate}
            >Submit</Button>
            <Button onClick={onClose}>Cancel</Button>
          </Box> */}

      </Box>
    </Modal>
  )
};
export default BasicModal


// alright i dont want my basic modal to have a submit button, so I'll take that away
// no onClick validate
// onClose 