/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import "./carddetails.css";
import BLOGDATA from "../../constants/mockData";

export default function CardPage() {
  const [blogData, setBlogData] = useState(BLOGDATA);
  return (
    <div className="card-page">
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      {
        blogData.map((eachBlog) => (
          <Card
            date={eachBlog.date}
            time={eachBlog.readingTime}
            title={eachBlog.title}
            description={eachBlog.description}
            claps={eachBlog.claps}
            liked={eachBlog.liked}
            image={`Images/${eachBlog.image}`}
          />
        ))
      }
    </div>
  );
}
CardPage.propTypes = {
  blogData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    readingTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    claps: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  ssetBlogData: PropTypes.func.isRequired,
};
