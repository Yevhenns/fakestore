import {useState} from 'react';

export const useSelectedProduct = () => {
  const [selectedProductId, setSelectedProductId] = useState<
    number | string | null
  >(null);

  const setSelectedProductIdHandler = (id: number | string) => {
    setSelectedProductId(id);
  };

  return {selectedProductId, setSelectedProductIdHandler};
};
