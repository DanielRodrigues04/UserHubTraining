import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export const LoadingSpinner: React.FC = () => (
  <Box className="flex justify-center items-center min-h-[200px]">
    <CircularProgress />
  </Box>
);