import React, { useEffect, useState } from "react";
import { BuilderComponent, builder } from "@builder.io/react";

builder.init("b4b3c36f4db5465089e9b4f9fbed8266");

export default function CatchAllRoute() {
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname
        })
        .promise();

      setContent(content);
      setNotFound(!content);
    }
    fetchContent();
  }, []);
  
  // if no page is found, return a 404 page
  if (notFound) {
    return <h1>This Page is Not In Builder.io</h1>
  }

  // return the page when found
  return (
    <>
      <head>
        <title>{content?.data.title}</title>
      </head>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={content} />
    </>
  );
}