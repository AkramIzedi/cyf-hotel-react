import React from "react";

const Details = [
  {
    cardName: "Glasgow",
    text: "Glasgow, the largest city in Scotland, is renowned for its warm and welcoming atmosphere, rich architectural heritage, and vibrant cultural scene.",
    src: "https://media.istockphoto.com/id/1424542588/photo/rainbow-over-glasgow-city-chambers-and-george-square-scotland-uk.jpg?s=1024x1024&w=is&k=20&c=MNHuy-EKRVdYul4ena6NtWO167KjvPMLUFvNGwqzbc8=",
    href: "peoplemakeglasgow.com",
  },
  {
    cardName: "London",
    text: "London, the bustling capital of the United Kingdom, is a melting pot of cultures, offering a vibrant blend of historical landmarks, world-class museums, and a thriving arts and entertainment scene.",
    src: "https://media.istockphoto.com/id/1399934799/photo/union-jacks-on-oxford-street-for-the-queens-platinum-jubilee.jpg?s=1024x1024&w=is&k=20&c=3RkAoaHFFzzu0xOU7aoQMdD1KEuj2Q171OIw1-447TA=",
    href: "visitlondon.com",
  },
  {
    cardName: "Manchester",
    text: "Manchester, located in the northwest of England, is a vibrant city renowned for its industrial heritage, thriving music scene, and world-famous football clubs.",
    src: "https://media.istockphoto.com/id/1320458882/photo/aerial-photography-of-tianjin-urban-architectural-landscape.jpg?s=1024x1024&w=is&k=20&c=tv1nJ9G4cp_D2JRG0YF4_SdN6McbEMJ7Tc-EEm8OefA=",
    href: "https://www.visitmanchester.com",
  },
];
const TouristInfoCards = () => {
  return (
    <div className="cardMainDiv">
      {Details.map((Details, index) => {
        return (
          <div className="card" key={index}>
            <img
              src={Details.src}
              className="card-img-top"
              alt=""
              style={{ height: "300px" }}
            />
            <h1>{Details.cardName}</h1>
            <p className="pElementCard">{Details.text}</p>
            <div className="card-body">
              <a href={Details.href} className="btn btn-primary">
                More information
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;

// import React from "react";
// import "./App.css";
// const TouristInfoCards = props =>{
//     return (
//         <div className="card">
//             <img src={props.imageSrc} className="card-img-top"/>
//             <div className="card-body">
//                 <h3>{props.destination}</h3>
//                 <p>{props.destination}</p>
//                 <a href={props.link} className="btn btn-primary">More Information</a>
//             </div>
//         </div>
//     )
// };
// export default TouristInfoCards;
