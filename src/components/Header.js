import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import './header.scss';
//import './header.module.scss';

// import headerStyles from './header.module.scss';


function Header() {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    
    
    
    `)

    





    return (
        <div>

            <header className="header">
                <Link className="title" to ="/" activeClassName="active-nav-item">{data.site.siteMetadata.title}</Link>

                <nav className="nav">

                    <ul className="navList">

                        <li>
                            <Link className="navItem" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="navItem" to="/blog" activeClassName="active-nav-item">Blog</Link>
                        </li>
                        <li>
                            <Link className="navItem" to="/about" activeClassName="active-nav-item">About</Link>
                        </li>
                        <li>
                            <Link className="navItem" to="/contact" activeClassName="active-nav-item">Contact</Link>
                        </li>
                    </ul>

 




                </nav>




            </header>
            
        </div>
    )
}

export default Header
