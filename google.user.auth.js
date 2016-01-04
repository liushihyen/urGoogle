/**
 * @authon Sean Liu
 * @copyright YouMeb
 */
var googleUserAuthModule = ( function(window) {

		var $utils = {};

		$utils.initSDK = function() {

			var dfd = $.getScript("https://apis.google.com/js/platform.js", function(data, textStatus, jqxhr) {

				gapi.load('auth2', function() {

					auth2 = gapi.auth2.init({
						client_id : '716767626523-69guob57j4cs4fb40gpa53iv2mvna9vd.apps.googleusercontent.com',
						fetch_basic_profile : true,
						scope : 'profile'
					});

				});
			});
			return dfd;
		};

		$utils.doAuth = function() {

			var dfd = $.Deferred();

			auth2.signIn().then(function(googleUser) {
				var profile = googleUser.getBasicProfile();
				var user = {};
				user.id = profile.getId();
				user.name = profile.getName();
				user.imageUrl = profile.getImageUrl();
				user.email = profile.getEmail();

				dfd.resolve(user);
			});
			return dfd;
		};

		return $utils;
	}(window));
