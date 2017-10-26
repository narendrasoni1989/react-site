import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
<div>
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>Richard Hamming on Luck</h1>
    <div>
      <p>
        From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>”.
      </p>
      <blockquote>
        <p>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
          </em>
        </p>
      </blockquote>
    </div>
    <p>Posted October 26, 2017</p>
  </div>
  <div>
    <h1>Hello people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
    	<Link to="/page-2/">Go to page 2</Link>
    </div>
    <div>
    	<Link to="/counter/">Counter</Link>
    </div>
    <div>
    	<Link to="/page-3/">Go to page 3</Link>
    </div>
    <div>
      <Link to="/about-css-modules/">css module</Link>
    </div>
  </div>
 </div>
)

export default IndexPage