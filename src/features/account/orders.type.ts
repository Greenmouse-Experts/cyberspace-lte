interface Delivery {
    id: number;
    user_id: string;
    phone_number: string;
    address: string;
    city: string;
    region: string;
    country: string;
    created_at: string;
    updated_at: string;
}

interface Item {
    id: number;
    order_id: string;
    product_id: string;
    amount: string;
    quantity: string;
    created_at: string;
    updated_at: string;
}

export interface OrderTypes {
    id: number;
    order_no: string;
    user_id: string;
    delivery_address_id: string;
    confirmed_by_id: string | null;
    status: string;
    payment_reference: string;
    paid_at: string;
    payment_method: string;
    created_at: string;
    updated_at: string;
    delivery: Delivery;
    items: Item[];
}