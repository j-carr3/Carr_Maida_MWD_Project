import React from "react";
import { useNavigate } from "react-router-dom"; 
import { checkUser } from "../Auth/AuthService";


<<<<<<< HEAD
// This is the ProtectedRoute Component that is necessary to ensure unregisterd users cannot access our site

=======
//This Component allows us to ensure that unregistered users are not accessing pages on our site beyond authorization
>>>>>>> 417950e3a79b808acd81fb56c73c07c48176923c
const ProtectedRoute = ({ element: Component, ...rest }) => {
	console.log("element: ", Component);
	const navigate = useNavigate();
	const goBackHandler = () => {
		navigate("/auth");
	};
<<<<<<< HEAD
	//checkUser will return the component only if the user is registered and logged in
=======
	//checkUser will only display the Component if the user is registered and logged in
>>>>>>> 417950e3a79b808acd81fb56c73c07c48176923c
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
