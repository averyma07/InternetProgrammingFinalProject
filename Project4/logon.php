<?php

$EMAIL_ID = 545314318; // 9-digit integer value (i.e., 123456789)

require_once '/home/common/php/dbInterface.php'; // Add database functionality
require_once '/home/common/php/mail.php'; // Add email functionality
require_once '/home/common/php/p4Functions.php'; // Add Project 4 base functions

processPageRequest(); // Call the processPageRequest() function

// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE

function authenticateUser($username, $password) 
{
	$userInfo = validateUser($username, $password);
	if($userInfo == NULL) {
		return false;
	} else {
		session_start();
		$_SESSION["userId"] = $userInfo["ID"];
		$_SESSION["displayName"] = $userInfo["DisplayName"];
		$_SESSION["emailAddress"] = $userInfo["Email"];
		return true;
	}
}

function displayLoginForm($message = "")
{
	require_once "./templates/logon_form.html";
}

function processPageRequest()
{
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE BELOW THIS LINE
	if(session_status() == PHP_SESSION_ACTIVE)
	{
		session_destroy();
	}
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE
	if(!isset($_POST) || count($_POST) == 0){
		displayLoginForm();
	}
	if(isset($_POST['action'])){
		if($_POST['action'] == 'login'){
			if(authenticateUser($_POST["username"], $_POST["password"])){
				header("Location: index.php");
				die;
			} else {
				$error = "Username/password is incorrect. Please try again.";
				displayLoginForm($error);
			}
		}
	}
	
}

?>
