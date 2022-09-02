import React from 'react';
import './About.css';

import authorImg from '../../images/author-img.jpg';

function About() {
	return (
		<section className='about'>
			<img src={authorImg} alt='author' className='about__img' />
			<div className='about__text-container'>
				<h2 className='about__title'>About the author</h2>
				<p className='about__text'>
					This block describes the project author. Here you should indicate your
					name, what you do, and which development technologies you know.
				</p>
				<p className='about__text'>
					You can also talk about your experience with Practicum, what you
					learned there, and how you can help potential customers.
				</p>
			</div>
		</section>
	);
}

export default About;