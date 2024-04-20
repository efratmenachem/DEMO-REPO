import React from 'react';

const About = () => {
    const headingStyle: React.CSSProperties = {
        fontWeight: 'bold',
        color: '#444',
        textAlign: 'center',
        fontSize: '1.5rem',
        marginBottom: '1rem'
    };

    const paragraphStyle: React.CSSProperties = {
        width: "80%",
        margin: "auto",
        textAlign: "center",
        lineHeight: '1.6'
    };

    return (
        <>
            <h4 style={headingStyle}>About Us</h4>
            <div style={headingStyle}>traveling the world</div>
            <br />
            <p style={paragraphStyle}>Welcome to Vivino, your ultimate destination for exploring travel destinations around the globe. 
                We are passionate about providing comprehensive information on a wide range of destinations worldwide. 
                Whether you're interested in famous landmarks, stunning beaches, or iconic attractions, 
                you'll find detailed descriptions and insights on our website.
                <br /><br />
                Our dedicated team invests considerable time and effort into gathering reliable and up-to-date information 
                to serve as your trusted resource for trip planning. Through our website, you can discover new destinations, 
                access insider recommendations and tips, and find inspiration for your dream trips.
                <br /><br />
                We believe that everyone can find their perfect destination, which is why we focus on delivering diverse 
                and comprehensive information to help you make informed decisions and enjoy unforgettable travel experiences.
                <br /><br />
                Enjoy exploring and discovering new destinations, and feel free to contact us with any questions or requests. 
                We're here to assist you in creating wonderful memories and savoring every moment of your journey.
            </p>
        </>
    );
};

export default About;
