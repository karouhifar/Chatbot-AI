import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("/api/hello")
         .then((res) => res.json())
         .then((data) => {
            setData(data?.message);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, []);

   return (
      <div>
         {loading && <p>Loading...</p>}
         {data && <p className="font-bold">{data}</p>}
         <Button variant="outline">Button</Button>
      </div>
   );
}

export default App;
