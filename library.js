(function(module) {
	"use strict";

	var Prezi = {},
		//embed = '<iframe class="vimeo-embed" src="//player.vimeo.com/video/$1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		embed = '<iframe id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="550" height="400" src="https://prezi.com/embed/$1/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;landing_data=bHVZZmNaNDBIWmlSa1k1MmNRK3VoaXFhTktOYzU5Ynl1M2d3RmxIcTEya1lPR1VNQkE3VFBxR0dtR3dvdHJZYmplVnFqaFY2S25jTVVpTlRvVHc2ZEpjdGdPOE4yUT09&amp;landing_sign=pcMY41rRoTYB4BwULXNnFwYliTQpjcuY_V4CWCmo85s#"></iframe>';

  
    var embedUrl = /<a href=\"(?:https?:\/\/)?(?:www\.)?(?:prezi\.com)\/?(.+)\/.+\".+>.+<\/a>/ig;

  // https://prezi.com/kura_3ekb05l/humanistische-friedenspartei-ig/ 
  
	Prezi.parse = function(data, callback) { 
	    if (!data || !data.postData || !data.postData.content) { 
            return callback(null, data);
        }
        if (data.postData.content.match(embedUrl)) {
            data.postData.content = data.postData.content.replace(embedUrl, embed);
        }
        callback(null, data);
    };

	module.exports = Prezi;
}(module));
