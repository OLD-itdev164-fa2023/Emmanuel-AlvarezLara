import React from "react"
import { graphql, Link } from "gatsby"


import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const contact = ({ data }) => {

    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Contact" />
            <h1>Contact us</h1>
            <p>Please send all inquiries to:</p>
            <div>{company}</div>
            <div>{`C/O ${name}`}</div>
            <div>{address}</div>

            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
                <StaticImage />
                <Link to="/">Home</Link>
            </div>
        </Layout>

    )

}

export default contact

export const query = graphql`

query MyQuery {
    site {
  
    siteMetadata{
  
    contact{
    name
    company
    address
      
        }
      }
    }
  }
`



 



