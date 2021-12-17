import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Je bericht is verstuurd!</h1>
      <p>Héél fijn dat je contact hebt opgenomen. Ik tracht zo snel mogelijk te reageren!</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Terug naar de Startpagina
      </Link>
    </div>
  </Layout>
)

export default Thanks
