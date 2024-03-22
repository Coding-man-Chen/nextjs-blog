import React from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

const ContactPage = () => {
  return <>
  <Head>
    <title>Contact Page</title>
    <meta name="description" content="content me to ask questions"/>
  </Head>
  <ContactForm /></>;
};

export default ContactPage;
