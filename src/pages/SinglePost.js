import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import client from "../Contentful";
import Loading from "../components/Loading";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const SinglePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    client.getEntries({ content_type: "post" }).then(entries => {
      console.log([...entries.items]);
      console.log([...entries.items].find(item => item.fields.slug));
      const blog = [...entries.items].find(
        item => "/beer-blog/" + item.fields.slug === window.location.pathname
      );
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
      <section className="single-post">
        <article className="beer-info">
          <div id="rich-text-body"></div>
        </article>
      </section>
    </Layout>
  );
};

export default SinglePost;
