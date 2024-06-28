import { PostScheduleWalkReq } from "../lib/definitions";

export default async function postScheduleWalk(request: PostScheduleWalkReq) {
    try {
        const response = await fetch(`https://localhost:7188/api/Walks`, {
             method: "POST",
             headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
              },
             body: JSON.stringify(request),
           });
           console.log(request);
           if (response.ok) {
             console.log('Schedule posted successfully');
             console.log(response.statusText);
           } else {
             console.error('Error posting walk:', response.statusText);
           }
           return response.status;
     }
     catch (error) {
         console.error('Error posting walk:', error);
     }
     
    
}