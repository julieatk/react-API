import React, { useEffect, useState } from "react";
import Colors from "./Colors";
import axios from "axios";

 // state for company info
const Home = () => {
  const [Data, setData] = useState({
    Company: '',
    Description: '',
  })

    // state to store color data from API
  const [colorsData, setColorsData] = useState([])

  useEffect(() => {
    // get color data from API
    axios.get('https://reqres.in/api/unknown')
      .then(res => {
        // Set  company info
        let companyName = "Color Company";
        let companyDesc = "You can explore different colors";

         // update state with company info
        setData({Company:companyName, Description:companyDesc})
         // update state with colors array from API
        setColorsData(res.data.data)
      })


      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    //display company info
    <>
    <h1>{Data.Company}</h1>
    <p>{Data.Description}</p>
      <Colors data = {colorsData} />
    </>
  )
}

export default Home;
