import { useRef, useState } from "react";
import { categories, statuses } from "../../includes/variables";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postSlice";
import * as database from "../../database";

export default function Form() {
  // const [title,setTitle] = useState('How to do it');// when you put some sentence it writes it in the imput
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [promote, setPromote] = useState(true);
  const [status, setStatus] = useState("");
  const [picture, setPicture] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSaving, setIsSSaving] = useState(false);

  const inputFile = useRef();
  const dispatch = useDispatch();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //hide success message
    setShowSuccess(false);
    // setTitle('Another title');

    const validate = [];
    if (title.length < 5) {
      validate.push("The title must be at leat 5 characters");
    }
    if (Description === "") {
      validate.push("The description is required.");
    }
    if (category === "") {
      validate.push("Please, select a category");
    }
    if (status === "") {
      validate.push("please select a status");
    }
    if (picture === "") {
      validate.push("Please, select a picture");
    }
    setErrorMessages(validate);
    if (validate.length === 0) {
      setIsSSaving(true);

      //upload the picture.
      const file = inputFile.current.files[0];

      const pictureUrl = await database.uploadPicture(file);
      if (pictureUrl) {
        const data = {
          title,
          Description,
          category,
          promote,
          status,
          picture: pictureUrl,
          likes: 0,
          dislikes: 0,
        };
        const savedId = await database.save(data);
        setIsSSaving(false);
        if (savedId) {
          data.id = savedId;
          dispatch(addPost(data));

          //display succeess message
          setShowSuccess(true);

          //clear the form
          setTitle("");
          setDescription("");
          setCategory("");
          setPromote(true);
          setStatus("");
          setPicture("");
          if (inputFile.current) {
            inputFile.current.value = "";
          }
        } else {
          setErrorMessages(["Failed to save data. "]);
        }
      } else {
        setErrorMessages(["Failed to upload the picture"]);
      }
      //Hide the saving message.
      setIsSSaving(false);
    }
  };

  const handlePictureSelection = (event) => {
    const file = event.target.files[0]; // if we want only one file
    // from here we are just changing it to base 64 file
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      setPicture(event.target.result);
    };
  };

  if (isSaving) {
    return <div>Saving...</div>;
  }

  return (
    <form className="form-component" onSubmit={handleFormSubmit}>
      {/* <hr/> this puts a line on the page */}
      {/* conditionally display the error message */}
      {/* {errorCode} */}
      {/* conditional display the success message */}
      {showSuccess && (
        <div className="sucess-message">Form successfully submitted!</div>
      )}
      {errorMessages.length > 0 && (
        <div className="form-validate">
          Invalid data:
          {errorMessages.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </div>
      )}
      {/* Title field */}
      <div>
        {/* <label htmlFor="titleInpu"> */}
        <label>
          Title
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            maxLength={50} // the length of the letters inside the input
            placeholder="Enter title here" // what is inside the the input
            required={true} // the form cannot be sent without title
          />
        </label>
      </div>
      Description:
      <textarea
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description your post"
        maxLength={500}
      >
        {" "}
      </textarea>
      {/* category Field */}
      <div>
        <label>
          category
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value=""> - Select -</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.text}
              </option>
            ))}
          </select>
        </label>
      </div>
      {/* promote Field */}
      <div className="promote-field">
        <label>
          Promote:
          <input
            type="checkbox"
            checked={promote}
            onChange={(e) => setPromote(e.target.checked)}
          />
        </label>
      </div>
      {/* status field (draft, publish, archive) */}
      <div className="status-field">
        status:
        {statuses.map((item) => (
          <label key={item.id}>
            <input
              type="radio"
              value={item.id}
              checked={status === item.id}
              onChange={(e) => setStatus(e.target.value)}
            />
            {item.text}
          </label>
        ))}
        {/*                 
                <label>
                  <input
                  type ='radio'
                  value='published'
                  checked={status==='published'}
                  onChange={handleStatusChange}
                  />
                </label>

                <label>
                  <input
                  type ='radio'
                  value='archived'
                  checked={status==='archived'}
                  onChange={handleStatusChange}
                  />
                </label> */}
      </div>
      {/* pICTURE FIELD */}
      <fieldset>
        <legend>Picture</legend>
        <label>
          Select an image
          <input
            type="file"
            accept="image/*" //.jpg  .gif .pdf  to specify what type we want
            // multiple={true}// it gives access to select multilple file not even oblige to specify true
            onChange={handlePictureSelection}
            ref={inputFile}
          />
        </label>

        {/* condition to select the picture */}
        {picture !== "" && <img src={picture} alt="Preview" width={100} />}
      </fieldset>
      <button>Send</button>
    </form>
  );
}
