import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from  "./TouristInfoCards.js";
import Footer from "./Footer.js"
import "./App.css";
import Restaurant from "./Restaurant.js"
import SearchResults from "./SearchResults.js";


const App = () => {
      const footerData = [
        "123 Fake Street,London,E1 4UD",
          "hello@fakehotel.com",
           "0123 456789"
      ]

      const bookingData=[

      ]

  return (
    <div className="App">
       <Heading />
       <Bookings />
       <Restaurant />
       <TouristInfoCards/>
       <Footer address={footerData}/>
  
          
       </div>
   );
  };

export default App;
