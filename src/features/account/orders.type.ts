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

 interface Plan  {
    id: number;
    name: string;
    price: string;
    validity: string;
    avalibilty_hour: string;
    avalibilty_day: string;
    image: string | null;
    created_at: string;
    updated_at: string;
    data_balance: string;
    plan_type: string;
}

export interface PlanTypes {
    id: number;
    plan_id: string;
    user_id: string;
    first_name: string;
    last_name: string;
    email_address: string;
    phone_number: string;
    router_id: string;
    transactionReference: string;
    status: string;
    created_at: string;
    updated_at: string;
    plan: Plan;
}

// Define the Main object type
