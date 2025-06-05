import React, { useEffect, useState } from "react";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const blogFiles = ["first-post", "second-post"];

const BlogList = ({ onSelectPost }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const loaded = await Promise.all(
        blogFiles.map(async (slug) => {
          const res = await fetch(`/blogs/${slug}.md`);          
          const text = await res.text();

          // Get the first H1 line as title
          const lines = text.split("\n");
          const titleLine = lines.find((line) => line.startsWith("# "));
          const title = titleLine ? titleLine.replace("# ", "").trim() : "Untitled";

          // Get the first non-empty paragraph as excerpt
          const excerptLine = lines.find(
            (line) => line.trim() !== "" && !line.startsWith("#")
          );
          const excerpt = excerptLine ? excerptLine.trim().slice(0, 50) : "";

          const image = `/blogs/FeaturedImages/${slug}.jpg`;

          return { slug, title, excerpt, image };
        })
      );
      setPosts(loaded);
    }

    loadPosts();
  }, []);

  return (
      <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Blog
      </Typography>

      <Grid container spacing={4}>
        {posts.map(({ slug, title, excerpt, image }) => (
          <Grid item xs={12} sm={6} md={4} key={slug}>
            <Card
              onClick={() => onSelectPost(slug)}
              sx={{
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={image}
                alt={title}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {excerpt}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogList;
