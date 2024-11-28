import { NextApiRequest, NextApiResponse } from 'next';

const products = [
  { id: 1, name: 'Товар 1', price: 1000, description: 'Описание товара 1', image: '/images/product1.jpg' },
  { id: 2, name: 'Товар 2', price: 1500, description: 'Описание товара 2', image: '/images/product2.jpg' },
  { id: 3, name: 'Товар 3', price: 2000, description: 'Описание товара 3', image: '/images/product3.jpg' },
  { id: 4, name: 'Товар 4', price: 2500, description: 'Описание товара 4', image: '/images/product4.jpg' },
  // добавьте больше товаров по аналогии
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Простое кеширование на сервере с использованием памяти
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Метод не поддерживается' });
  }
}
