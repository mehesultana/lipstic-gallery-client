import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import LastSection from '../LastSection/LastSection';
import Lipstick from '../Lipstick/Lipstick';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Home = () => {
	const [lipsticks, setLipsticks] = useState([]);

	useEffect(() => {
		fetch(`https://lipstick-gallery.herokuapp.com/lipsticks`)
			.then((res) => res.json())
			.then((data) => setLipsticks(data));
	}, []);

	return (
		<div>
			<Banner />
			{/* lipsticks  */}
			<Container>
				<div className="lipsticks-part">
					<h2 className="text-center mt-5 mb-2">Save your wallet ,</h2>
					<h4 className="text-center mt-2 mb-5">Enjoy our Super lipsticks</h4>

					<Row xs={1} md={3} className="g-4 ">
						{lipsticks.slice(0, 6).map((lipstick) => {
							const { _id } = lipstick;
							return (
								<Fragment key={_id}>
									<Lipstick lipstick={lipstick}></Lipstick>
								</Fragment>
							);
						})}
					</Row>
				</div>
				<br />
				<div className="text-center">
					<Link to="/lipsticks">
						<button type="button" className="btn btn-warning ">
							Explore More <BsFillArrowRightCircleFill />
						</button>
					</Link>
				</div>
			</Container>
			<LastSection />
		</div>
	);
};

export default Home;
