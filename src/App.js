import "./styles.css";
import { useState } from "react";
import Rating from "./Rating/rating";
import "./App.css"

export default function App() {
  const [ratingValue, setRatingValue] = useState(undefined);

  const handleRatingAction = (value) => {
    setRatingValue(value);
  };

  return (
    <div className="App">
      <main className="mainContainer">
        <h1 className="ii">Leave a review</h1>

        <div>
          <h3 className="al">
            Safety
          </h3>
          <span className="int1">How safe did you feel with us?</span>
          <br />
        </div>

        <div className="dwd">
          <Rating
            ratingValue={ratingValue}
            setRatingValue={handleRatingAction}
            iconSize="l"
            enableUserInteraction={true}
          />
          <hr className="solid" />

          <h3 className="gg">
            Communication
          </h3>
          <span className="xx">How easy was it to communicate with us?</span>
          <div className="dwd1">
            <Rating
              ratingValue={ratingValue}
              setRatingValue={handleRatingAction}
              iconSize="l"
              showOutOf={true}
              enableUserInteraction={true}
            />
          </div>
          <hr className="solid" />
        </div>

        <div className="dwd2">
          <h3>
            Would you recommend us?
          </h3>
          <span className="xx1">Your opinion won't be posted publicly</span>
          <br />
          <div className="rating">
            <div className="like grow">
              <i className="fa fa-thumbs-up fa-3x like" aria-hidden="true"></i>
            </div>
            <div className="dislike grow">
              <i className="fa fa-thumbs-down fa-3x like" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
