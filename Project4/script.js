// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE BELOW THIS LINE

function displayMovieInformation(movie_id)
{
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		document.getElementById("modalWindowContent").innerHTML = this.responseText;
		showModalWindow();
		};
	request.open("GET", "./movieinfo.php?movie_id=" + movie_id, true);
	request.send();
}

function forgotPassword()
{
	window.location.replace("./logon.php?action=forgot");
}

function showModalWindow()
{
    var modal = document.getElementById('modalWindow');
    var span = document.getElementsByClassName("_close")[0];

    span.onclick = function() 
    { 
        modal.style.display = "none";
    }

    window.onclick = function(event) 
    {
        if (event.target == modal) 
        {
            modal.style.display = "none";
        }
    }
 
    modal.style.display = "block";
}

// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE


// DO NOT REMOVE OR MODIFY THE SIGNATURE OF THE FUNCTIONS BELOW THIS LINE

function addMovie(imdbID)
{
	window.location.replace("./index.php?action=add&imdb_id=" + imdbID);
}

function confirmCancel()
{
	if(window.confirm("Are you sure you would like to return to your shopping cart?")){
		window.location.replace("./index.php");
	} else {
		return false;
	}
}

function confirmCheckout()
{
	if(window.confirm("Are you sure you are ready to checkout?")){
		window.location.replace("./index.php?action=checkout");
	} else {
		return false;
	}
}

function confirmLogout()
{
	if(window.confirm("Are you sure you would like to log out?")){
		window.location.replace("./logon.php?action=logoff");
	} else {
		return false;
	}
}

function confirmRemove(title, movieID)
{
	if(window.confirm("Are you sure you would like to remove " + title + "?")){
		window.location.replace("./index.php?action=remove&movie_id=" + movieID);
	} else {
		return false;
	}
}