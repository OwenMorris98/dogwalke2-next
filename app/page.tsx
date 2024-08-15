import Image from "next/image";

export default function Home() {
  return (
   <div>
    <p>This is the home page</p>
   </div>
  );
}


// app/page.tsx
// import { useFetch } from '../lib/useFetch';

// export default function Home() {
//   const { data, error, loading } = useFetch('/api/your-endpoint');

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <p>This is the home page</p>
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// }