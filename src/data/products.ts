import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone', count: 15 },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt', count: 25 },
  { id: 'home', name: 'Home & Garden', icon: 'Home', count: 18 },
  { id: 'books', name: 'Books', icon: 'Book', count: 12 },
  { id: 'sports', name: 'Sports', icon: 'Dumbbell', count: 20 },
  { id: 'beauty', name: 'Beauty', icon: 'Sparkles', count: 14 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    rating: 4.8,
    reviews: 2451,
    inStock: true,
    featured: true,
    tags: ['wireless', 'noise-cancelling', 'premium']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'electronics',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    rating: 4.6,
    reviews: 1829,
    inStock: true,
    featured: true,
    tags: ['fitness', 'smartwatch', 'health']
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fashion',
    description: 'Premium leather jacket with modern design and comfortable fit.',
    rating: 4.7,
    reviews: 892,
    inStock: true,
    tags: ['leather', 'designer', 'jacket']
  },
  {
    id: '4',
    name: 'Minimalist Table Lamp',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'home',
    description: 'Modern minimalist design with adjustable brightness and USB charging.',
    rating: 4.5,
    reviews: 634,
    inStock: true,
    tags: ['minimalist', 'lamp', 'modern']
  },
  {
    id: '5',
    name: 'Professional Camera',
    price: 899.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'electronics',
    description: 'Professional DSLR camera with high-resolution sensor and advanced features.',
    rating: 4.9,
    reviews: 1456,
    inStock: true,
    featured: true,
    tags: ['camera', 'professional', 'photography']
  },
  {
    id: '6',
    name: 'Luxury Skincare Set',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'beauty',
    description: 'Complete skincare routine with premium ingredients and natural extracts.',
    rating: 4.6,
    reviews: 723,
    inStock: true,
    tags: ['skincare', 'luxury', 'natural']
  },
  {
    id: '7',
    name: 'Running Shoes',
    price: 159.99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'sports',
    description: 'High-performance running shoes with advanced cushioning and support.',
    rating: 4.7,
    reviews: 1234,
    inStock: true,
    tags: ['running', 'shoes', 'athletic']
  },
  {
    id: '8',
    name: 'Modern Coffee Maker',
    price: 199.99,
    image: 'https://images.pexels.com/photos/4040797/pexels-photo-4040797.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'home',
    description: 'Premium coffee maker with programmable features and sleek design.',
    rating: 4.4,
    reviews: 567,
    inStock: true,
    tags: ['coffee', 'kitchen', 'modern']
  }
];