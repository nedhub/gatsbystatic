import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import { graphql } from 'gatsby';


export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {

            title
            date
        }

        html
    }
}
`

function blog(props) {
    return (

        
        <div>

            <Header/>

            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>

            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>



            </div>

            <Footer/>
            
        </div>
    )
}

export default blog
