import { Box, Typography, Modal, Divider } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import React from 'react';

export const styles = {
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
    '.MuiInputRoot': {
      marginBottom: '20px',
    },
    gap: '1em',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'end',
    gap: 4,
    // variant: 'contained',

  },
  input: {
    background: "#ec5990",
    color: 'white',
    padding: '10px',
    borderRadius: '6px',
  }

};

interface BasicModalProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  description: string;
  content: React.ReactNode;
  children?: React.ReactNode;
  // validate: () => void;
}


const BasicModal = ({ open, onClose, title, description, content }: BasicModalProps) => {

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.wrapper} onClick={(e) => { e.stopPropagation() }}>
        <div className='grid grid-cols-2 gap-1'>
          <Typography id="modal-modal-title" variant="h5" component="h2" className="col-start-1 self-end">
            {title}
          </Typography>

          <IconButton aria-label="close"
            onClick={onClose} className="col-end-auto justify-self-end"
          >
            <CloseRoundedIcon />
          </IconButton>
        </div>
        <Divider />

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>

        {content}

      </Box>
    </Modal>
  )
};
export default BasicModal
