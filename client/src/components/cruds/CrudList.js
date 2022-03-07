import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudList() {
	const [cruds, setCruds] = useState([]);

	useEffect(function () {
		async function getAllCruds() {
			try {
				const response = await axios.get("/api/cruds");
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getAllCruds();
	}, []);

	return (
		<div>
			<h2>
				CRUDs
				<p>
					<Link to="/cruds/new" className="btn btn-primary float-right">
						Create CRUD
					</Link>
				</p>
			</h2>
			<hr />
			{cruds.map((crud) => {
				return (
					<div key={crud._id}>
						<h4>
							<Link to={`/cruds/${crud._id}`}>{crud.companyName}</Link>
						</h4>
						<div className="btn-group">
							<Link to={`/cruds/${crud._id}/edit`} className="btn btn-primary">
								Edit
							</Link>
						</div>

						<hr />
					</div>
				);
			})}
		</div>
	);
}

export default CrudList;
