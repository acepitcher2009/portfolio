import React from "react";

//import stock
import stock from "../img/chuck1.png";
import stock1 from "../img/chuck2.png";
import stock2 from "../img/chuck3.png";
import stock3 from "../img/chuck4.png";
import stock4 from "../img/movie1.png";
import stock5 from "../img/movie2.png";
import stock6 from "../img/movie3.png";
import stock7 from "../img/movie4.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Please take a look at some of the projects that I have built.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-8 offset-3">
                        <h2 className="w-title justify-self-center">Chuck Norris Joke Wars</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap JavaScript fetch Apis
                          </span>
                          <br/>
                          <p><strong>In this app we retrieve random Chuck Norris jokes from a Chuck Norris joke databse using fetch apis.<br/>Once the jokes are loaded the user votes which joke they like best.<br/>After the user finishes they can then view the jokes that were voted on.</strong></p>
                          <hr/>
                          <em>CLICK THE IMAGE TO SEE PHOTOS OF THE APP<br/>OR<br/>TO TRY THIS APP, CLICK HERE <strong><a className="chuckLink" style={{color: "#625AF2"}} href="https://acepitcher2009.github.io/Chuck-Norris-Joke-wars/">CHUCK NORRIS JOKE WARS</a></strong></em>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href={stock4} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-8 offset-3">
                        <h2 className="w-title justify-self-center">Movie Search</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            React JavaScript fetch Apis Reactstrap Bootstrap
                          </span>
                          <br/>
                          <p><strong>In this app we retrieve random moview from the OMDB databse using fetch apis.<br/>Once the movies are loaded the user can search for their favorite movies.<br/>When the movies are returned the user can then add their favorite movies to their favorites list.</strong></p>
                          <hr/>
                          <em>CLICK THE IMAGE TO SEE PHOTOS OF THE APP<br/>OR<br/>TO TRY THIS APP, CLICK HERE <strong><a style={{color: "#625AF2"}} href="https://acepitcher2009.github.io/MovieApp/">Movie Search App</a></strong></em>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock6}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock7}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
