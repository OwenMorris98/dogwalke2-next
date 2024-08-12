import { PostDog } from "../lib/definitions";
import { jwtDecode } from "jwt-decode";

export async function postDog(request : PostDog, token: string) {
    let customerId = jwtDecode(token).sub;
    const response = await fetch(`https://localhost:7188/api/${customerId}/Dog`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        throw new Error('Failed to post dog');
    }

    return await response.json();
}