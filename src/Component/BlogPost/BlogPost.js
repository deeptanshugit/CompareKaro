import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

const BlogPost = ({ onBack }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/blogs/${slug}.md`)
      .then(res => res.text())
      .then(setContent);
  }, [slug]);

  return (
    <div style={{ padding: "2rem" }}>
      <Button variant="outlined" onClick={() => navigate(-1)}> ← Back </Button>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
