import { useEffect, useState } from 'react';
import axios from 'axios';

const useRecommendedProducts = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8888/products', {
          params: {
            best_seller: true,
            limit: 3
          }
        });

        setRecommendedProducts(response.data.results);
      } catch (error) {
        console.error('Error fetching recommended products:', error);
      }
    };

    fetchRecommendedProducts();
  }, []);

  return recommendedProducts;
};

export default useRecommendedProducts;
