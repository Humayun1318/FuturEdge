import { useEffect, useState } from "react";
import { FDataContext } from "../Context";


const DataContext = ({ children }) => {
  const [fakeData, setFakeData] = useState([])
 const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('data.json')
      .then(re => re.json())
      .then(data => {
        setFakeData(data)
        setLoading(false)
      })
      .catch(err => console.log("Data fetch ERROR:", err))
  }, [])
   
  if (loading) {
    return <p>loading.............</p>
  }
  const dataContext = {
    name: 'rasel',
    data: {...fakeData},
}

console.log(dataContext);
return (
  <FDataContext.Provider value={dataContext}>
    {children}
  </FDataContext.Provider>
);
};

export default DataContext;