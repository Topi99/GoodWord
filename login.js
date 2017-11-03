var provider = new firebase.auth.FacebookAuthProvider();

var btnFb = $('#fb-sesion');
var user_name = $('#user-name');
var logged = Cookies.get('logged') ? true : false;

// Iniciar sesión con Facebook
if(!logged){
	btnFb.click(function(){
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  var token = result.credential.accessToken;
		  var user = result.user;
		  Cookies.set('user_name', user.displayName);
		  Cookies.set('user_image', user.photoURL);
		  set_text_user_name();
		  logged = Cookies.set('logged', true);
		}).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  var email = error.email;
		  var credential = error.credential;
		  console.log('Error '+credential+'\n'+errorCode+': '+errorMessage+'\nEmail: '+email);
		});
	}) // click
}else{
	set_text_user_name();
} // If Else

function set_text_user_name(){
	user_name.text(Cookies.get('user_name'));
}
