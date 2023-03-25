import React from "react"
import { social } from "../data/dummydata"
import {Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material"

const Footer = () => {
  return (
    <>
      <footer>
        <a href="https://www.facebook.com/savan.vadodariya.1806"><Facebook /></a>
        <a href="https://twitter.com/savanVadodariy2"><Twitter /></a>
        <a href="https://www.instagram.com/savan__197/"><Instagram /></a>
        <a href="https://www.linkedin.com/in/savan-vadodariya-b33b99259/"><LinkedIn /></a>
        <p data-aos='zoom-in'>All Right Resceved 2023</p>
      </footer>
    </>
  )
}

export default Footer
