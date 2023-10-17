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

                    <img style={{zIndex: 1}} className="card__image" width={300} src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1697547542/Cool%20entertainment/IMG-20231014-WA0008-removebg-preview_1_gcizax.png"/>
                </div>

                <div className="card__detailsContainer">
                    <div className="card__details">
                        <div className="name">Ralph O. Ayilara </div>
                        <div className="details">President Miss Cool & Classic Nigeria <br/><small>[Event Mgt & Planning] </small> </div>
                    </div>
                </div>
            </div>


            <div className="cards">
                <div className="image__container">

                    <img style={{zIndex: 1, marginTop:'11em' }} className="card__image" width={300} src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1697547540/Cool%20entertainment/IMG-20230829-WA0106-removebg-preview_zth6jg.png"/>
                </div>

                <div className="card__detailsContainer">
                    <div className="card__details">
                        <div className="name">Olumakinde Sarah </div>
                        <div className="details">Miss Cool & Classic Nigeria 2022/23 </div>
                    </div>
                </div>
            </div>


            <div className="cards">
                <div className="image__container">

                    <img style={{zIndex: 1, marginTop:'1em' }} className="card__image" width={300} src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1697547542/Cool%20entertainment/IMG-20231014-WA0007-removebg-preview_1_iprnmd.png"/>
                </div>

                <div className="card__detailsContainer">
                    <div className="card__details">
                        <div className="name">Aderonke Kassim </div>
                        <div className="details">Miss Cool & Classic Nigeria 2014/15 </div>
                    </div>
                </div>
            </div>








            </div>

            

        </div>
        
        </>
    )

}

export default EventAttenders;