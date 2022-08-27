import React from "react";

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={props.imageUrl} className="card-image" />
            <div className="info">
                <div>{props.location} <a className="location-link" href={props.googleMapsUrl} target="_blank">View on Google Maps</a></div>
                <div className="info-title">{props.title}</div>
                <div className="info-date">{props.startDate}&nbsp;-&nbsp;{props.endDate}</div>
                <p className="info-description">{props.description}</p>
                <hr/>
            </div>
        </div>
    )
}