import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

import React from 'react'
import { useState } from 'react';

export const Modal = () => {
    const [open, setOpen] = useState(false);
  return (
    <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
    <Modal open={open} onClose={()=>setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
            <Typography>It is a Modal</Typography>
        </Box>
    </Modal>
    <div>Modal</div>
  );
};
