import React, { useEffect, useState } from "react";

const GoogleReviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      const fetchReviews = async () => {
        const apiKey = "AIzaSyC3puqOvmUeny4dZ0u7e0eaGrAAh1330dg"; // Replace with your API key
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.result && data.result.reviews) {
            setReviews(data.result.reviews);
          } else {
            setError("No reviews found.");
          }
        } catch (err) {
          setError("Error fetching reviews.");
        }
      };

      fetchReviews();
    },
    [placeId]
  );

  if (error)
    return (
      <div>
        {error}
      </div>
    );

  return (
    <div>
      <h2>Google Reviews</h2>
      {reviews.length > 0
        ? reviews.map(review =>
            <div key={review.time} style={{ marginBottom: "1rem" }}>
              <h3>
                {review.author_name}
              </h3>
              <p>
                {review.text}
              </p>
              <p>
                Rating: {review.rating}
              </p>
            </div>
          )
        : <p>No reviews available.</p>}
    </div>
  );
};

export default GoogleReviews;
