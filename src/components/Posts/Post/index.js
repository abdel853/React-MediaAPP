// import {useState} from 'react';
import { getCategory, getStatus } from "../../../includes/variables";
import { BiDislike, BiLike } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { likePost, dislikePost, removePost } from "../../../redux/postSlice";
import { Link } from "react-router-dom";
import * as database from "../../../database";

import "./styles.scss";

export default function Post({
  id,
  title,
  description,
  category,
  promote,
  status,
  picture,
  likes,
  dislikes,
}) {
  const { allowLikes, allowDislikes } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleLikeClick = async (event) => {
    event.preventDefault(); /// using event and this it prevents to go to other page when like is pressed

    const data = { likes: likes + 1 };
    const updated = await database.update(id, data);
    if (updated) {
      dispatch(likePost(id)); // this is different approch from dislike check dislike
    }
  };

  const handleDislikeClick = async (event) => {
    event.preventDefault();
    dispatch(dislikePost(id));

    const data = { dislikes: dislikes + 1 };

    const updated = await database.update(id, data);

    console.log("Updated", updated);
    if (!updated) {
      alert("Failed to update likes.");
      // dispatch(dislikePost(id));// normaly we should have this here only when firebase is updated redux updated as well but the second approche
      //TODO: Imprive the message to the user that the like wasn't updated firebase failed
      //TODO Create a redux action to remove one like because updated was fake
    }
  };

  const handleRemoveClick = async (event) => {
    event.preventDefault();
    //remove from redux store
    dispatch(removePost(id));
    //remove from database

    const removed = await database.remove(id);
    if (!removed) {
      alert("Failed to remove post");
      //todo: impove this
    }
  };
  const promoteStyle = promote ? "promote-yes" : "promote-no"; // this is for style yes and no

  let rateClassName = "rate"; // let because it changes
  if (!allowLikes || !allowDislikes) {
    rateClassName += " rate-single-button";
  }

  return (
    <Link to={"/posts/" + id} className="post-component">
      <h3> {title} </h3>

      <div className="description">
        <img src={picture} alt={title} />
        <span>{description}</span>
      </div>

      <div className="info">
        <div>
          Category:
          <strong>{getCategory(category)}</strong>
        </div>
        <div>
          status:
          <strong>{getStatus(status)}</strong>
        </div>
        <div className={promoteStyle}>
          promote:
          <strong>{promote ? "Yes" : "No"}</strong>
        </div>
      </div>

      {(allowLikes || allowDislikes) && (
        <div className={rateClassName}>
          {allowLikes && ( // that allows the button to appear and disappear
            <button
              title="I like this" // when you hover over button it shows this title
              className="like"
              onClick={handleLikeClick}
            >
              <BiLike />
              {likes}
            </button>
          )}

          {allowDislikes && (
            <button
              title="I dislike this"
              className="dilike"
              onClick={handleDislikeClick}
            >
              <BiDislike />
              {dislikes}
            </button>
          )}
        </div>
      )}

      <button onClick={handleRemoveClick}>Remove</button>
    </Link>
  );
}
