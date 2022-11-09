import React from "react";
import { useNavigate } from "react-router-dom"; 
import { checkUser } from "../Auth/AuthService";


//This Component allows us to ensure that unregistered users are not accessing pages on our site beyond authorization
const ProtectedRoute = ({ element: Component, ...rest }) => {
	console.log("element: ", Component);
	const navigate = useNavigate();
	const goBackHandler = () => {
		navigate("/auth");
	};
	//checkUser will only display the Component if the user is registered and logged in
	if (checkUser()) {
		return <Component />;
	//otherwise, the user will get an unauthorized message and will be directed back to the authorization page
	} else {
		return (
			<div>
				<p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
			</div>
		);
	}
};

export default ProtectedRoute;
