import React, { useState } from 'react'
export const NotesDataContext = React.createContext(null);

const NotesContext = ({children}) => {
    let [data,setData]=useState([
        {
          id: 0,
          heading: "redux",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque aliquam, laborum modi veniam labore esse aut voluptatem magni consequuntur alias accusamus pariatur nisi temporibus",
          createdAt: "5 days ago",
        },
        {
          id: 1,
          heading: "Weekly Task",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque aliquam, laborum modi veniam labore esse aut voluptatem magni consequuntur alias accusamus pariatur nisi temporibus",
          createdAt: "5 days ago",
        },
        {
          id: 2,
          heading: "Lyrics",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque aliquam, laborum modi veniam labore esse aut voluptatem magni consequuntur alias accusamus pariatur nisi temporibus",
          createdAt: "5 days ago",
        },
      ],)
  return (
    <NotesDataContext.Provider value={{data,setData}}>
      {children}
    </NotesDataContext.Provider>
  )
}

export default NotesContext
