/**
 * @authon Sean Liu
 * @copyright YouMeb
 */
var googleUserAuthModule = ( function(window) {

		var $utils = {};

		var deferred = $.Deferred();

		$utils.loadSDK = function() {

			// load js SDK
			( function(d, s, id) {
					var js,
					    fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id))
						return;
					js = d.createElement(s);
					js.id = id;
					js.src = 'https://apis.google.com/js/platform.js';
					fjs.parentNode.insertBefore(js, fjs);

					console.dir('Load the Google Javascript SDK asynchronously');

				}(document, 'script', 'google-jssdk'));

			return this;
		};

		/**
		 * @param {Object} setting
		 */
		$utils.initSDK = function(setting) {

			setting = typeof setting !== 'undefined' ? setting : {
				version : 'v2.5'
			};
			setting.version = typeof setting.version !== 'undefined' ? setting.version : 'v2.5';

			window.fbAsyncInit = function() {
				FB.init({
					appId : setting.appId,
					cookie : true,
					status : false,
					xfbml : false,
					version : setting.version
				});
				console.dir('window.fbAsyncInit');
			};
			return this;
		};

		/**
		 * @param {Object} setting
		 */
		$utils.doAuth = function() {

			alert(GoogleUser.isSignedIn());

			gapi.load('auth2', function() {
				auth2 = gapi.auth2.init({
					client_id : '716767626523-69guob57j4cs4fb40gpa53iv2mvna9vd.apps.googleusercontent.com',
					fetch_basic_profile : false,
					scope : 'profile'
				});

				// Sign the user in, and then retrieve their ID.
				auth2.signIn().then(function() {
					console.log(auth2.currentUser.get().getId());
				});
			});
		};

		/**
		 * @param {Object[]} fields
		 */
		$utils.getUser = function(fields) {

			// 讀取Facebook Open Graph user的預設資料欄位
			var defaultFields = [];
			defaultFields.push('id');
			defaultFields.push('about');
			defaultFields.push('age_range');
			defaultFields.push('bio');
			defaultFields.push('birthday');
			defaultFields.push('context');
			defaultFields.push('currency');
			defaultFields.push('devices');
			defaultFields.push('education');
			defaultFields.push('email');
			defaultFields.push('favorite_athletes');
			defaultFields.push('favorite_teams');
			defaultFields.push('first_name');
			defaultFields.push('gender');
			defaultFields.push('hometown');
			defaultFields.push('inspirational_people');
			defaultFields.push('install_type');
			defaultFields.push('installed');
			defaultFields.push('interested_in');
			defaultFields.push('is_shared_login');
			defaultFields.push('is_verified');
			defaultFields.push('languages');
			defaultFields.push('last_name');
			defaultFields.push('link');
			defaultFields.push('location');
			defaultFields.push('locale');
			defaultFields.push('meeting_for');
			defaultFields.push('middle_name');
			defaultFields.push('name');
			defaultFields.push('name_format');
			defaultFields.push('payment_pricepoints');
			defaultFields.push('test_group');
			defaultFields.push('political');
			defaultFields.push('relationship_status');
			defaultFields.push('religion');
			defaultFields.push('security_settings');
			defaultFields.push('significant_other');
			defaultFields.push('sports');
			defaultFields.push('quotes');
			defaultFields.push('third_party_id');
			defaultFields.push('timezone');
			defaultFields.push('token_for_business');
			defaultFields.push('updated_time');
			defaultFields.push('shared_login_upgrade_required_by');
			defaultFields.push('verified');
			defaultFields.push('video_upload_limits');
			defaultFields.push('viewer_can_send_gift');
			defaultFields.push('website');
			defaultFields.push('work');
			defaultFields.push('public_key');
			defaultFields.push('cover');

			fields = typeof fields !== 'undefined' ? fields : defaultFields;

			if ( typeof fields === 'object' && fields.length === 0) {
				fields = defaultFields;
			}

			var dfd = new $.Deferred();

			FB.api('/me', 'get', {
				fields : fields.join(',')
			}, function(response) {

				if (response.error) {
					alert(response.error.message);
					return false;
				} else {
					dfd.resolve(response);
				}

			});
			return dfd;
		};

		return $utils;
	}(window));
