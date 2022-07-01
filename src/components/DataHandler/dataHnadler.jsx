// import { saveAs } from "file-saver";
import React, { useState, useEffect } from "react";

import {
  Images,
  Footer,
  PhotoContainer,
  Preview,
  DivOfConatiner,
} from "./dataHandler.styles";
function DataHandler() {
  const [posts, SetPosts] = useState([]);


  const fetchRequest = async () => {
    const url =
      "https://api.unsplash.com/search/photos?query=nature&client_id=aHT5SJnI436_VYqODlC8tCFTwS4rqw2YeWxbQ0m7NGQ";
    const data = await fetch(url);
    const dataJ = await data.json();
    const result = await dataJ.results;
    console.log(result)

    SetPosts(result);

  }
  useEffect(() => { fetchRequest() }, []);

     const downloadImage = () => {
       return (
        posts.map((post) => (<a href={post.urls.small} download > download</a>))
      )
     };

    //  return <Button onClick={downloadImage}>Download!</Button>;

  return (
    <PhotoContainer>
      <Preview>
        {posts.map((post) => (
          <DivOfConatiner key={post.id}>
            <Images
              key={post.id}
              src={post.urls.small}
              alt={post.alt_description}
            />
            <button onClick={downloadImage}>download</button>
            <Footer>
              {/* <a href={post.urls.small} download>
                Download
              </a> */}
              <span> {post.user.name} </span>
            </Footer>
          </DivOfConatiner>
        ))}
      </Preview>
    </PhotoContainer>
  );
}

export default DataHandler;


      // .then((res) => {
      //   let respose = res.json();
      //   return respose;
      // })
      // .then((res) => {
      //   let response = res.results;
      //   let result = SetPosts(response);
      //   console.log(response);

      //   return result;
      // })
      // .catch((err) => console.log(err));