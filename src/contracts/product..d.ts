interface CategoryItemType {
  created_at: string;
  display: string;
  id: number;
  name: string;
  updated_at: string;
}

interface ProductItemType {
  category: CategoryItemType;
  category_id: string;
  count_in_stock: string;
  coverage: string;
  created_at: string;
  dealer: any;
  dealer_id: string;
  description: string;
  display: string;
  id: number;
  images: string;
  price: string;
  product_name: string;
  specification: string;
  updated_at: string;
}
