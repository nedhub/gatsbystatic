import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { Link, graphql, useStaticQuery } from "gatsby";
import './blog.scss';



const BlogPage = () => {

    const data = useStaticQuery(graphql`

        query {

            allMarkdownRemark {
                edges {
                    node {

                        frontmatter {

                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    
    
    
    
    
    `)

    


    return (

        <div className="container">

<div className="content">

            <Header/>
            <h1>Blog</h1>
            
            <ol>

                {data.allMarkdownRemark.edges.map((edge) => {

                    return (
                        <li className="posts">

                            <Link to={`/blog/${edge.node.fields.slug}`}>

                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>

                            </Link>
                        </li>
                    )

                })}


            </ol>

            </div>

            <Footer/>
        

        </div>
    )
}


export default BlogPage