export interface IUser{
    user: User;
    token:string;
    isLoggedIn:boolean;
    verifyEmail:string
}

export interface User {
    id: number;
    name: string;
    user_type: string;
    email: string;
    email_verified_at: string;
    gender: string | null;
    phone_number: string;
    residence_address: string | null;
    city: string | null;
    region: string | null;
    country: string | null;
    status: string;
    token: string | null;
    created_at: string;
    updated_at: string;
    tokens: Token[];
  }
  
  interface Token {
    id: number;
    tokenable_type: string;
    tokenable_id: string;
    name: string;
    abilities: string[];
    last_used_at: string | null;
    created_at: string;
    updated_at: string;
  }
  
