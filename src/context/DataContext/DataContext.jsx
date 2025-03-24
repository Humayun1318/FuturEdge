import { useEffect, useState } from "react";
import { FDataContext } from "../Context";


const DataContext = ({ children }) => {
  const [fakeData, setFakeData] = useState([])
 const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data.json')
      .then(re => re.json())
      .then(data => {
        setFakeData(data)
        setLoading(false)
      })
      .catch(err => console.log("Data Fetch ERROR:", err))
  }, [])
   
  if (loading) {
    return 
  }
  const dataContext = {
    data: { ...fakeData },
    loading,
}

console.log(dataContext);
return (
  <FDataContext.Provider value={dataContext}>
    {children}
  </FDataContext.Provider>
);
};

export default DataContext;