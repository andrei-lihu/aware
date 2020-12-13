import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"


const HomePage = ({ data }) => {
  return (
    <div style={{ margin: 0, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Img
        fluid={data.file.childImageSharp.fluid}
      />
      <p style={{ fontSize: 'x-large', color: 'white', textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif' }}>coming soon</p>
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "aware-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
      ...GatsbyImageSharpFluid
      ...GatsbyImageSharpFluidLimitPresentationSize
    }
      }
    }
  }
`

export default HomePage