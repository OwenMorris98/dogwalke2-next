import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

export async function loginUser(email : string, password : string) {
    const response = await fetch('https://localhost:7188/api/Users/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();

    if (data.token && !data.token.includes('Invalid')) {
        // Store the JWT token in a cookie
        Cookies.set('jwt', data.token, { expires: 7 }); // Expires in 7 days
        return data;
    } else {
        throw new Error('Invalid login credentials');
    }
}

export async function registerUser(email: string, password: string) {
    const response = await fetch('https://localhost:7188/api/Users/Register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    return await response.json();

     
}

export function getJwtToken(): string | null {
    if(Cookies.get('jwt')) {
        return jwtDecode(Cookies.get('jwt'))
        } else {
            return null;
    }
}