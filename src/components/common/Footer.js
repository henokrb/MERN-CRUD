const Footer = () => {
	const link = "https://henok.us";
	const target = "_blank";

	return (
		<div className="container mt-4">
			Copyright © <small>{new Date().getFullYear()}</small> Henok R. Bedassa{" "}
			<a href={link} target={target}>
				henok.us
			</a>
		</div>
	);
};

export default Footer;
