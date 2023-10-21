import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {
	let { movieId } = useParams();
	const [movie, setMovie] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(`movie/${movieId}`);
				setMovie(response.data);
			} catch (error) {
				navigate(-1);
			}
		}

		fetchData();
	}, [movieId]);

	if (!movie) return null;

	return (
		<section>
			<img
				className="modal__poster-img"
				src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
				alt="poster"
			/>
		</section>
	);
};

export default DetailPage;
