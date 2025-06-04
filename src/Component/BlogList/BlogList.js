import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

const blogFiles = ["first-post", "second-post"];

const BlogList = ({ onSelectPost }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const loaded = await Promise.all(
        blogFiles.map(async (slug) => {
          const res = await fetch(`${process.env.PUBLIC_URL}/blogs/${slug}.md`);
          console.log(res, 'res');
          
          const text = await res.text();

          // Get the first H1 line as title
          const lines = text.split("\n");
          const titleLine = lines.find((line) => line.startsWith("# "));
          const title = titleLine ? titleLine.replace("# ", "").trim() : "Untitled";

          // Get the first non-empty paragraph as excerpt
          const excerptLine = lines.find(
            (line) => line.trim() !== "" && !line.startsWith("#")
          );
          const excerpt = excerptLine ? excerptLine.trim().slice(0, 100) : "";

          return { slug, title, excerpt };
        })
      );
      setPosts(loaded);
    }

    loadPosts();
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>Blog</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map(({ slug, title, excerpt }) => (
          <li
            key={slug}
            onClick={() => onSelectPost(slug)}
            style={{
              marginBottom: "2rem",
              cursor: "pointer",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1rem"
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem" }}>{title}</h3>
            <p style={{ margin: 0 }}>{excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
