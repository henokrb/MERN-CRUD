import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function CrudDelete(props) {
	const [crud, setCrud] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function deleteCrudById() {
				try {
					const response = await axios.get(`/api/cruds/${_id}`);
					setCrud(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteCrudById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await axios.delete(`/api/cruds/${_id}`);
			navigate("/cruds");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
			<h2>{crud.companyName}</h2>

			<p>
				<b>Phone</b>: <a href={`tel:+${crud.phone}`}> {crud.phone} </a>
			</p>

			<p>
				<b>Email</b>: {crud.email}
			</p>
			<p>
				<b>Location</b>: {crud.location}
			</p>
			<p>
				<b>Link</b>:<a href={`${crud.link}`}> {crud.link} </a>
			</p>
			<p>
				<b>Description</b>: {crud.description}
			</p>
			<p>
				<small>
					<b>ID</b>: {crud._id}
				</small>
			</p>
			<div className="btn-group">
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/cruds" className="btn btn-secondary">
					Cancel{" "}
				</Link>
			</div>
			<hr />
		</div>
	);
}

export default CrudDelete;
