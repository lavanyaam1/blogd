import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardPage from "../CardPage";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <CardPage />
      <Footer />
    </div>
  );
}
