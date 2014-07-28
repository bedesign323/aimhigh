/** LoginRadius Namespace
 * @namespace
 */
var LoginRadiusSDK = (function () {

    var apiDomain = "api.loginradius.com";

    var token = 'LRTokenKey';

    var util = {};

    // store all about loginradius module
    var module = {};
    var onlogin = function () {
    };


    module.isauthenticated = false;


    /**function is used to set Callback Handler to login
     * @name setLoginCallback
     * @function
     * @public
     * @param fn {function}
     * @memberOf LoginRadiusSDK
     */
    module.setLoginCallback = function (fn) {
        module.onlogin = fn;
    };


    /**The User Profile API is used to get social profile data from the user’s social account after authentication. The social profile will be retrieved via oAuth and OpenID protocols. The data is normalized into LoginRadius' standard data format.
     * @name getUserprofile
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getUserprofile = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/userprofile?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };

    /**The photo API is used to get photo data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getPhotos
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param albumId {string} A valid albumId, it return album photos
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getPhotos = function (albumId, handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/photo?access_token=" + module.getToken() + "&albumid=" + albumId, function (data) {
            handle(data);
        });
    };

    /**The Check In API is used to get check-ins data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getCheckins
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getCheckins = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/checkin?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };

    /**The Albums API is used to get the Albums data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getAlbums
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getAlbums = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/album?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };


    /**The Audio API is used to get audio files data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getAudios
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getAudios = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/audio?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };


    /**The Mention API is used to get mention data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getMentions
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getMentions = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/mention?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };


    /**The Following API is used to get the followers’ information from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getFollowings
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getFollowings = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/following?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };


    /**The Event API is used to get the event data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getEvents
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getEvents = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/event?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };


    /**The Post API is used to get posted messages from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getPosts
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getPosts = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/post?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };


    /**The Company API is used to get the followed company’s data in the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getCompanies
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getCompanies = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/company?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };


    /**The Group API is used to get group data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getGroups
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getGroups = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/group?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };

    /**The Status API is used to get the status messages from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getStatuses
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getStatuses = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/status?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };

    /**The Contact API is used to get contacts/friends/connections data from the user’s social account. The data will normalized into LoginRadius' data format.
     * @name getContacts
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param cursor {string} Curser value for getting next records set
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getContacts = function (cursor, handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/contact?access_token=" + module.getToken() + "&nextcursor=" + cursor, function (data) {
            handle(data);
        });
    };


    /**The Video API is used to get videos data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getVideos
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getVideos = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/video?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };


    /**The Likes API is used to get likes data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @name getLikes
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.getLikes = function (handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/like?access_token=" + module.getToken(), function (data) {
            handle(data);
        });
    };

    /**This API is used to update the status on the user’s wall.
     * @name postStatus
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param title {string} title for status message.
     * @param url {string} A web link of the status message
     * @param status {string} An image URL of the status message
     * @param imageurl {string} The status message text
     * @param caption {string} A caption of the status message
     * @param description {string} A description of the status message
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.postStatus = function (title, url, status, imageurl, caption, description, handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/status/js?access_token=" + module.getToken() + "&title=" + title + "&url=" + url + "&imageurl=" + imageurl + "&status=" + status + "&caption=" + caption + "&description=" + description, function (data) {
            handle(data);
        });
    };


    /**The Message API is used to post messages to the user’s contacts. After using the Contact API, you can send messages to the retrieved contacts.
     * @name postMessage
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     * @param to {string} A valid friend id to send the message, it would be fetched from the contacts list
     * @param subject {string} The subject of the message to be send
     * @param message {string} The details of the message to be send
     * @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius
     */
    module.postMessage = function (to, subject, message, handle) {
        util.jsonpCall("https://" + apiDomain + "/api/v2/message/js?access_token=" + module.getToken() + "&to=" + to + "&subject=" + subject + "&message=" + message, function (data) {
            handle(data);
        });
    };

    /**The Access Token API is used to get the LoginRadius access token after authentication. It will be valid for the specific duration of time specified in the response.
     * @name getToken
     * @function
     * @public
     * @memberOf LoginRadiusSDK
     */
    module.getToken = function () {
        return sessionStorage.getItem(token);
    };


    util.jsonpCall = function (url, handle) {
        var func = 'Loginradius' + Math.floor((Math.random() * 1000000000000000000) + 1);
        window[func] = function (data) {
            handle(data);

            try {
                delete window[func];
            }
            catch (e) {
                window[func] = undefined;
            }
            document.body.removeChild(js);
        }
        var js = document.createElement('script');
        js.src = url.indexOf('?') != -1 ? url + '&callback=' + func : url + '?callback=' + func;
        js.type = "text/javascript";
        document.body.appendChild(js);
    };


    util.addEvent = function (type, element, handle) {
        var elements = [];
        if (element instanceof Array) {
            elements = element;
        } else {
            elements.push(element);
        }
        for (i = 0; i < elements.length; i++) {
            if (elements[i].attachEvent) {
                elements[i].attachEvent("on" + type, function (e) {
                    handle(e)
                });
            } else if (elements[i].addEventListener) {
                elements[i].addEventListener(type, handle, false);
            }
        }
    };


    function receiveToken(event) {
        if (event.origin.indexOf("hub.loginradius.com") == -1) {
            return;
        }

        sessionStorage.setItem(token, event.data);
        module.isauthenticated = true;
        module.onlogin();
    };


    util.addEvent("message", window, receiveToken);

    return module;
})();

