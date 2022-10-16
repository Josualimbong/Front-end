import img1 from "../Pages/PagesCss/LandingPageBc.jpg"
import "../Pages/PagesCss/LandingPage.styles.css"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <body>
      <div class="content">
        {/* <img src={img1} alt="" /> */}
        <h1>Welcome to Our Site!</h1>
        <h2>Explore our Collectioin</h2>

        <br />
        <Link to="/books">
          <span> Books</span>
        </Link>
      </div>
    </body>
  )
}

export default LandingPage
