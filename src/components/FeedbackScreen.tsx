import { useState } from 'react';
import './Feedback.css';

interface FeedbackScreenProps {
    onBack: () => void;
    onSubmit: () => void;
}

const FeedbackScreen = ({ onBack, onSubmit }: FeedbackScreenProps) => {
    const [rating, setRating] = useState<number>(0);
    const [review, setReview] = useState<string>('');

    return (
        <div className="feedback-container">
            {/* Header */}
            <div className="feedback-header">
                <button className="feedback-back-btn" onClick={onBack}>←</button>
                <div className="feedback-title">Leave Feedback</div>
            </div>

            {/* Rating Card */}
            <div className="rating-card">
                <div className="rating-title">Rate your experience</div>
                <div className="stars-wrapper">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            className={`star-icon ${star <= rating ? 'filled' : ''}`}
                            onClick={() => setRating(star)}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    ))}
                </div>
            </div>

            {/* Review Section */}
            <div className="review-section">
                <label className="review-label">Review</label>
                <textarea
                    className="review-textarea"
                    placeholder="Write your review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>

            {/* Submit Button */}
            <button className="submit-feedback-btn" onClick={onSubmit}>
                Submit
            </button>
        </div>
    );
};

export default FeedbackScreen;
