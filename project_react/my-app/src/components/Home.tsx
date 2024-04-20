import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Destination } from '../class/Destination';
import { useDispatch, useSelector } from 'react-redux';
import image from '../pic/main_image.jpg';
import './home.css';
import './menu';

const Home = () => {
    const navigate = useNavigate();
    const myDispatch = useDispatch();
    const listDes = useSelector((state: any) => state.currDestination);

    useEffect(() => {
        if (listDes.length === 0) {
            axios.get('http://localhost:7777/myDestination/getAll')
                .then(response => {
                    myDispatch({ type: 'myDestination', payload: response.data });
                })
                .catch(error => console.error('Error fetching destinations:', error));
        }
    }, []);

    return (
    <> <img className="fixed-image" src={image} alt="Fixed Background" />

        <div className="home-container">
            <p className='nameSite'>אתר תיירות</p>
            <p className='des'> כל מה שצריך לדעת בתור תייר</p>

            <p className='space'></p>
            <hr></hr> {/*   תסתכלי מה אומרת על הקו הזה? */}
            <div className="destination-row">
                {listDes.map((destination: Destination) => (
                    <div key={destination.destination} className="destination-container">
                        <div className="destination-details">
                            <Link to={`/list/${destination.destination}`} >
                                <h2 className="destination-title">{destination.destination}</h2>
                                <p className="destination-stars">{destination.stars}</p>
                                <p className='destination-location'>{destination.location}</p>
                            </Link>
                        </div>
                        <div className="image-container">
                            <img src={`http://localhost:7777/pic/${destination.pic}`} alt={destination.destination} className="destination-image" />
                            <p className="destination-description">{destination.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate("/AddDestination")} className="add-destination-button">Add Destination</button>
        </div> </>
    );
}

export default Home;
