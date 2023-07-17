import React from "react";
function Footer(props){
  return(
    <div className="footer-footer">
      <ul>
        {props.address.map((Details,index)=>{
          return(
            <div>
              <li key={index} style={{listStyle:"none"}}>{Details}</li>
            </div>
          );
        })
        }
      </ul>
    </div>
  )
}

// const Footer = (props) => {
//   return (
//     <ul className="ul5">
//       {props.contacts.map((contact, index) => (
//         <li key={index}>{contact}</li>
//       ))}
//     </ul>
//   );
// };

export default Footer;

