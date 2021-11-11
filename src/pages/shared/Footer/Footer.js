import React from 'react';
import { Container } from 'react-bootstrap';
import { ImFacebook2, ImTwitter, ImLinkedin, ImMail, ImYoutube } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<Container className="footer">
			<footer className="text-center text-lg-start bg-light text-muted">
				<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<div className="me-5 d-none d-lg-block ">
						<span>Get connected with us on social networks:</span>

						<Link className="ms-3 cart">
							<ImFacebook2 />
						</Link>
						<Link className="ms-3 cart">
							<ImTwitter />
						</Link>
						<Link className="ms-3 cart">
							<ImLinkedin />
						</Link>
						<Link className="ms-3 cart">
							<ImMail />
						</Link>
						<Link className="ms-3 cart">
							<ImYoutube />
						</Link>
					</div>
				</section>

				<section className="">
					<div className="container text-center text-md-start mt-5">
						<div className="row mt-3">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									<i className="fas fa-gem me-3"></i>Lipstick Gallery
								</h6>
								<p>You’re searching for beauty you can believe in. Makeup that performs beautifully AND doesn’t irritate your skin.</p>
							</div>

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Products</h6>
								<p>
									<a href="#!" className="text-reset">
										Lipstick
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Lip Bam
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Lip care Products
									</a>
								</p>
							</div>

							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
								<p>
									<a href="#!" className="text-reset">
										Pricing
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Settings
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Orders
									</a>
								</p>
								<p>
									<a href="#!" className="text-reset">
										Help
									</a>
								</p>
							</div>

							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Contact</h6>
								<p>
									<i className="fas fa-home me-3"></i> New York, NY 10012, US
								</p>
								<p>
									<i className="fas fa-envelope me-3"></i>
									lipsticgallery@gmail.com
								</p>
								<p>
									<i className="fas fa-phone me-3"></i> + 01 234 567 88
								</p>
								<p>
									<i className="fas fa-print me-3"></i> + 01 234 567 89
								</p>
							</div>
						</div>
					</div>
				</section>

				<div className="text-center p-4">© 2021 Copyright: LIPSTIC GALLERY</div>
			</footer>

			{/* <h6>Get Connected</h6>
			<section className="mb-4">
				<Link className="ms-3 cart">
					<ImFacebook2 />
				</Link>
				<Link className="ms-3 cart">
					<ImTwitter />
				</Link>
				<Link className="ms-3 cart">
					<ImLinkedin />
				</Link>
				<Link className="ms-3 cart">
					<ImMail />
				</Link>
				<Link className="ms-3 cart">
					<ImYoutube />
				</Link>
			</section>
			<h6 className="text-center p-3">Copyright © 2021 </h6> */}
		</Container>
	);
};

export default Footer;
