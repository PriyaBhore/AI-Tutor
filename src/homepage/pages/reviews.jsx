// import React, { useState, useEffect } from "react";
// import { db } from "../../firebase.js"; // Import Firebase config
// import { collection, addDoc, getDocs } from "firebase/firestore";


// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState("");

//   // Fetch Reviews from Firestore
//   useEffect(() => {
//     const fetchReviews = async () => {
//       const querySnapshot = await getDocs(collection(db, "reviews"));
//       setReviews(querySnapshot.docs.map((doc) => doc.data()));
//     };
//     fetchReviews();
//   }, []);

//   // Submit Review to Firestore
//   const handleSubmit = async () => {
//     if (newReview.trim()) {
//       await addDoc(collection(db, "reviews"), { text: newReview, rating: "⭐⭐⭐⭐⭐" });
//       setNewReview(""); // Clear input
//     }
//   };

//   return (
//     <div className="reviews-section">
//       <h2>What Our Users Say</h2>
//       {reviews.map((review, index) => (
//         <div key={index} className="review">
//           <p>{review.rating}</p>
//           <p>"{review.text}"</p>
//         </div>
//       ))}
//       <div className="review-input">
//         <textarea
//           placeholder="Write a review..."
//           value={newReview}
//           onChange={(e) => setNewReview(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Reviews;






import React, { useState, useEffect } from "react";
import { db } from "../../firebase.js"; 
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import '../css/reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);

  // Fetch Reviews from Firestore
  useEffect(() => {
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      setReviews(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };
    fetchReviews();
  }, []);

  // Submit Review to Firestore
  const handleSubmit = async () => {
    if (newReview.trim() && name.trim()) {
      await addDoc(collection(db, "reviews"), {
        text: newReview,
        name,
        rating,
        date: new Date().toLocaleDateString(),
        timestamp: serverTimestamp(),
      });

      setNewReview("");
      setName("");
      setRating(5);
      window.location.reload(); // Reload to show new review
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🌟 What Our Users Say</h2>
      <div className="row">
        {reviews.map((review) => (
          <div key={review.id} className="col-md-6 col-lg-4">
            <div className="review-box p-3 mb-4 shadow-sm">
              <p className="review-rating">{"⭐".repeat(review.rating)}</p>
              <p className="review-date">{review.date}</p>
              <p className="review-text">"{review.text}"</p>
              <p className="review-name">- {review.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Review Input Form */}
      <div className="card p-4">
        <h3 className="text-center">Leave a Review</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          >
            <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
            <option value="4">⭐⭐⭐⭐ - Good</option>
            <option value="3">⭐⭐⭐ - Average</option>
            <option value="2">⭐⭐ - Poor</option>
            <option value="1">⭐ - Terrible</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Write your review..."
            rows="3"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
