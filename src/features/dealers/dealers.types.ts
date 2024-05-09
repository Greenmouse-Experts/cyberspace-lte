export interface DealerItemTypes {
    id: number;
    name: string;
    image: string | null;
    address: string;
    region: string;
    country: string;
    created_at: string;
    updated_at: string;
    phone1: string;
    phone2: string;
}

export interface DealerProps {
  dealer:{
    id: number;
    name: string;
    image: string | null;
    address: string;
    region: string;
    country: string;
    created_at: string;
    updated_at: string;
    phone1: string;
    phone2: string;
  }
}

// interface ApiResponse {
//     success: boolean;
//     data: Company[];
// }
