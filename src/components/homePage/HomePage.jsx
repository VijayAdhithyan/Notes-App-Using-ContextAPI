import {useContext} from 'react'
import "./HomePage.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import { NotesDataContext } from '../context/NotesContext';

const HomePage = () => {
  let [heading, setHeading] = useState("");
  let [content, setContent] = useState("");

  let {data,setData}= useContext(NotesDataContext)
  console.log(data);

  const handleSubmit = () => {
    setData([...data,{id:data.length+1,heading:heading,content:content,createdAt:"just now"}])
    setHeading("");
    setContent("");
  };

  const handleDelete= (i)=>{
    let newArray = [...data];
    newArray.splice(i,1);
    setData(newArray)
  }

  return (
    <div className="home-page-session">
      <div className="input-area">
        <p className="para-1">Add a Note</p>
        <div>
          <p
            className="para-2"
            htmlFor="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              placeholder="Title"
              className="input-title"
              id="title"
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </p>
          <textarea
            className="input-text"
            type="text"
            placeholder="Take a note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="submit-btn" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </div>
      <div className="notes-title">
        <DescriptionOutlinedIcon className="notes-icon" />
        <p>My notes</p>
      </div>
      <p className="recent-text">Recently viewed</p>
      <div className="display-sam">
        {data
          .filter((e) => e.heading !== null)
          .map((e, i) => {
            return (
              <div key={i} className="display-notes-container">
                <div className="display-notes">
                  <div className="heading-container">
                    <p>{e.heading}</p>
                    <div className="icons-container">
                      <EditOutlinedIcon
                        style={{ fontSize: "22px", cursor: "pointer" }}
                      />
                      <button style={{border:"none",paddingLeft:"10px",backgroundColor:"#fff"}} onClick={()=>handleDelete(i)}>
                        <DeleteOutlineOutlinedIcon
                        style={{ fontSize: "22px", cursor: "pointer"}}/>
                      </button>
                      
                    </div>
                  </div>
                  <p>{e.content}</p>
                  <p className="date">{e.createdAt}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
