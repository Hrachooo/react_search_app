import React from "react";



export default function ProfileCard({ image, alt, title, handle,description}){


    return(
        <div className="card">
            <div className="image"> 
                <figure className="image is-1by1" >
                    <img src={image} alt={alt} /> 
                </figure>
            </div>
            <div className="card-contetn">
                <div className="media-content">
                    <div>
                        <p className="title is-10"> {title}</p>
                    </div>
                    <div>
                        <p className="subtitle is-6">{handle}</p>
                        <p className="subtitle is-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}