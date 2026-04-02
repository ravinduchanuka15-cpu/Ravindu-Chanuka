import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route for demonstrating Node.js backend integration
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'Node.js Backend is running perfectly!',
    developer: 'Ravindu Chanuka'
  });
});

// Mock Contact Route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required!' });
  }

  // In a real application, you would send an email using NodeMailer here
  console.log(`[Node.js Server] New message received from ${name} (${email})`);
  
  res.status(200).json({ 
    success: true, 
    message: 'Message processed by Node.js server successfully!' 
  });
});

app.listen(PORT, () => {
  console.log(`-----------------------------------------`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`👨‍💻 Developer: Ravindu Chanuka`);
  console.log(`-----------------------------------------`);
});
