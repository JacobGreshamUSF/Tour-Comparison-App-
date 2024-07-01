// Gallery.js
import React, { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tours-project';

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching tours:', error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const toggleReadMore = (id) => {
    const updatedTours = tours.map((tour) =>
      tour.id === id ? { ...tour, showDetails: !tour.showDetails } : tour
    );
    setTours(updatedTours);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (tours.length === 0) {
    return <h2>No tours left</h2>;
  }

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <article key={tour.id}>
            <img src={tour.image} alt={tour.name} />
            <div>
              <h4>{tour.name}</h4>
              <h4 className="tour-price">${tour.price}</h4>
            </div>
            <p>
              {tour.showDetails ? tour.info : `${tour.info.substring(0, 200)}...`}
              <button onClick={() => toggleReadMore(tour.id)}>
                {tour.showDetails ? 'Show Less' : 'Read More'}
              </button>
            </p>
            <button onClick={() => removeTour(tour.id)}>Not Interested</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
