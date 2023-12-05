import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('<h1>Ecommerce de Sergio Rivas!</h1>');
});

export default router;