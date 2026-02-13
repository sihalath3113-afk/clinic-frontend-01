import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          ยินดีต้อนรับสู่ระบบบริหารคลินิก
        </Typography>
        <Typography variant="body1">
          เข้าสู่ระบบสำเร็จ!
        </Typography>
      </Paper>
    </Container>
  );
}

export default Dashboard;