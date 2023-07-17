import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomerProfile from "./CustomerProfile.js"


function SearchResults(props) {


  const [selected, setSelected] = useState([]);
  const [idSelected, setIdSelected] = useState('');
  const [userData, setUserData] = useState('')

  function handleClick(index) {
    if (selected.includes(index)) {
      setSelected((prevSelected) => {
        return prevSelected.filter((item) => item !== index);
      });
    } else {
      setSelected([...selected, index]);
    }
  }

  function handleClickButton(idSelected) {
    setIdSelected(idSelected);
    }

useEffect(() => {
  fetch(`https://cyf-react.glitch.me/customers/${idSelected}`)
    .then((res) => res.json())
    .then((data) => setUserData(data)

        );
}, [idSelected]);


  return (
    <div>
      <table className="table">
        <thead>
          <tr className="tr-title">
            <th scope="col">Id</th>
            <th scope="col">Titles</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Stay nights</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => {
            return (
              <tr
                key={index}
                className={selected.includes(index) ? "selected" : ""}
                onClick={() => handleClick(index)}
              >
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(
                    moment(result.checkInDate),
                    "days"
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleClickButton(result.id)}
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile
        id={idSelected}
        email={userData.email}
        phoneNumber={userData.phoneNumber}
        vip={userData.vip}
      />
    </div>
  );
}
export default SearchResults;




// import React from "react";


// const SearchResults = ({results}) => {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th scope="col">id</th>
//           <th scope="col">Title</th>
//           <th scope="col">First name</th>
//           <th scope="col">Surname</th>
//           <th scope="col">email</th>
//           <th scope="col">Room id</th>
//           <th scope="col">Check in date</th>
//           <th scope="col">Check out date</th>
//           <th scope="col">Nights</th>
//         </tr>
//       </thead>
//       <tbody>
//         {results.map((result) => (
//           <tr key={result.id}>
//             <td>{result.id}</td>
//             <td>{result.title}</td>
//             <td>{result.firstName}</td>
//             <td>{result.surname}</td>
//             <td>{result.email}</td>
//             <td>{result.roomId}</td>
//             <td>{result.checkInDate}</td>
//             <td>{result.checkOutDate}</td>
//             <td>
//               {moment(result.checkOutDate).diff(moment(result.checkOutDate),"days")}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default SearchResults;
