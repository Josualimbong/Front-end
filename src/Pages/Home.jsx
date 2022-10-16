import "./PagesCss/home.styles.css"
import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-slider">
        <div className="wrapper">
          <div className="slide1">
            <div className="content-home">
              <h1>Welcome to our Lib!</h1>
              <br />
              <Link to="/books">See our collection</Link>
            </div>
          </div>

          <div className="slide2">
            <div className="content-home">
              <h1>Welcome to our Lib!</h1>
              <br />
              <Link to="/books">See our collection</Link>
            </div>
          </div>

          <div className="slide3">
            <div className="content-home">
              <h1>Welcome to our Lib!</h1>
              <br />
              <Link to="/books">See our collection</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
