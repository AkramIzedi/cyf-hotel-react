import React  from "react";
import { useEffect } from "react";
function CustomerProfile(props){
    return(
        <div>
            <ul>
                {props.id && <li>Customer_ID : {props.id}</li>}
                {props.vip && <li>Email : {props.email}</li>}
                {props.phoneNumber && <li>Phone Number : {props.phoneNumber}</li>}
            </ul>
        </div>
    );
}
export default CustomerProfile;
