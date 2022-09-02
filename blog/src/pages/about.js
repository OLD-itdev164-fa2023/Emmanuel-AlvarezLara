import React from 'react'
import {graphql, Link } from 'gatsby'

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            < Seo title="About"/>
            <h1> About us </h1>
            <p>{`${company} was started by ${name} in 2021.`}</p>
            <p>{`At ${company} we just make blog!`}</p>

            <div style={{maxWidth:'300px', marginBottom: '1.45rem'}}>
            <StaticImage/>
            </div>
            <Link to="/">Home</Link>
        </Layout>
    ) 
}
export default About

export const query = graphql`

query {
    site {

        siteMetadata{
      
        contact{
        name
        company
          
            }
          }
        }
      }
      `
      

