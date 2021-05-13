import React from 'react';
import './stars.scss';
import Typed from 'react-typed';

class Intro extends React.Component {
	render() {
		return (
			// <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
			<div id="home" className="intro route bg-image background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />

				<div className="intro-content display-table">
					<div className="table-cell">
						<div className="container">
							<h1 className="intro-title mb-4">Hello, I am Jared Pohl</h1>
							<p className="intro-subtitle">
								<span className="text-slider-items" />
								<strong className="text-slider">
									<Typed
										strings={[ 'Front End Engineer' ]}
										typeSpeed={250}
										backDelay={2500}
										backSpeed={30}
										loop
									/>
								</strong>
							</p>
							<div className="row pt-3 justify-content-around">
								<div className="col-4">
									<a className="btn btn-primary btn js-scroll px-4" href="#portfolio" role="button">
										View My Portfolio
									</a>
								</div>
								<div className="col-4">
									<a className="btn btn-primary btn js-scroll px-4" href="#contact" role="button">
										View Contact Info
									</a>
								</div>
							</div>
							<div className="row mt-4 justify-content-center">
								<div className="col-4">
									<a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">
										View About Me
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Intro;
