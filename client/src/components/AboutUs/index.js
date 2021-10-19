import React from 'react';
import coverImage from "../../assets/images/341King.jpg"

function AboutUs() {
    return (
        <section className="my-5">
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="341 King St Photo" />
            <p>Welcome to the George Brown College IELTS Test Centre React Sandbox</p>
            <a
                className="App-link"
                href="https://www.georgebrown.ca/ielts"
                target="_blank"
                rel="noopener noreferrer"
            >
                Find our current website here
            </a>
        </section>
    )
}

export default AboutUs;