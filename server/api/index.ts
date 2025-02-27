import express from 'express';
import { setupVite } from '../vite';
import { registerRoutes } from '../routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register routes
await registerRoutes(app);

// Setup error handling
app.use((err: any, _req: any, res: any, _next: any) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Export the Express app
export default app;