import React from "react";
import './eventAttenders.css'




const EventAttenders = () => {


    return (
        <>
        <div className="eventAttenderx">
            <h1>Attendees</h1>


            <div className="card__container">
            <div className="cards">
                <div className="image__container">

                    <img style={{zIndex: 1}} className="card__image" width={360} src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1697547542/Cool%20entertainment/IMG-20231014-WA0008-removebg-preview_1_gcizax.png"/>
                </div>

                <div className="card__detailsContainer">
                    <div className="card__details">
                        <div className="name">Ralph O. Ayilara </div>
                        <div className="details">President Miss Cool & Classic Nigeria <br/><small>[Event Mgt & Planning] </small> </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="card__container">
            <div className="cards">
                <div className="image__container">

                    <img style={{zIndex: 1}} className="card__image" width={360} src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1697547542/Cool%20entertainment/IMG-20231014-WA0008-removebg-preview_1_gcizax.png"/>
                </div>

                <div className="card__detailsContainer">
                    <div className="card__details">
                        <div className="name">Ralph O. Ayilara </div>
                        <div className="details">President Miss Cool & Classic Nigeria <br/><small>[Event Mgt & Planning] </small> </div>
                    </div>
                </div>
            </div>
            </div>


        </div>
        
        </>
    )

}

export default EventAttenders;