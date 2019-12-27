import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import client from "../Contentful";
import Loading from "../components/Loading";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const SinglePost = () => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    client.getEntries({ content_type: "post" }).then(entries => {
      // log the title for all the entries that have it
      console.log("useEffect");
      let blog = [...entries.items].find(
        item => "/" + item.fields.slug === window.location.pathname
      );
      // );
      // let publishBlog = [];
      // setPosts({
      //   blog,
      //   publishBlog,
      // });
      // const rawRichTextField = entries.fields.blog;
      const renderedHTML = documentToHtmlString(blog.fields.content);
      document.getElementById("rich-text-body").innerHTML = renderedHTML;
      setIsLoading(false);
    });
  }, []);

  if (isLoading === true) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }
  return (
    <Layout>
      {console.log(posts)}
      <section className="single-post">
        <article className="beer-info">
          <div id="rich-text-body"></div>
        </article>
      </section>
    </Layout>
  );
};

export default SinglePost;
