import React from "react";
import { useNavigate } from "react-router-dom"; 
import { checkUser } from "../Auth/AuthService";



// This is the ProtectedRoute Component that is necessary to ensure unregisterd users cannot access our site



const ProtectedRoute = ({ element: Component, ...rest }) => {
	console.log("element: ", Component);
	const navigate = useNavigate();
	const goBackHandler = () => {
		navigate("/auth");
	};

	//checkUser will return the component only if the user is registered and logged in

	if (checkUser()) {
		return <Component />;
	//otherwise, the user will get an unauthorized message and will be directed back to the authorization page
	} else {
	//Otherwise, the user will receive a message telling them that they are unauthorized and can click on a button taking them back to the authorization page
		return (
			<div>
				<p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
			</div>
		);
	}
};

export default ProtectedRoute;
