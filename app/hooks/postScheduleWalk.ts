import { PostScheduleWalkReq } from "../lib/definitions";
import { getCustomerId, getJwtToken } from "./auth";
import useFetch from "./useFetch";

const usePostScheduleWalk = () => {
  const fetchWithAuth = useFetch();

const  postScheduleWalk = async (request: PostScheduleWalkReq, token: string) => {

    try {
       
       console.log("Token: " + token);
        let customerId : string  | null = getCustomerId();
        console.log("Customer ID: " + customerId);
        const response = await fetchWithAuth(`https://localhost:7188/api/${customerId}/Walks`, {
             method: "POST",
             headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
             body: JSON.stringify(request),
           });
           console.log(response);
           if (response) {
             console.log('Schedule posted successfully');
             console.log(response);
           } else {
             console.error('Error posting walk:', response.statusText);
           }
           return await response;
     }
     catch (error) {
         console.error('Error posting walk:', error);
     };
      
};
return { postScheduleWalk}
};
 export default usePostScheduleWalk;