import { PostDog } from "../lib/definitions";
import { jwtDecode } from "jwt-decode";
import useFetch from "./useFetch";

const usePostDog = () => {
    const fetchWithAuth = useFetch();

    async function postDog(request : PostDog, token: string) {
        let customerId = jwtDecode(token).sub;
        const response = await fetchWithAuth(`https://localhost:7188/api/${customerId}/Dog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(request),
        });
    
        if (!response) {
            throw new Error('Failed to post dog');
        }
    
        return await response;
    } return { postDog };

}; export default usePostDog;
