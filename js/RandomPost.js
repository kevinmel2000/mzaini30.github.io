<style>
#random-posts img{border-radius: 0px;float:left;margin-right:5px;
width:75px;height:75px;background-color: #FFFFF;padding: 3px;transition: all 0.2s linear 0s;}
#random-posts img:hover{opacity: 0.6;}
ul#random-posts {list-style-type: none;padding: 0px;}
#random-posts a {font-size: 12px;text-transform:uppercase; padding: 0px auto 5px;}
#random-posts a:hover {text-decoration: none;}
.rp-snippet {font-size: 11px;background: none; padding: 5px; margin-right: 8px;}
#random-posts span {}
#random-posts li {margin-bottom: 10px;border-bottom: 1px solid #EEEEEE; padding: 4px;}
</style>
<ul id='random-posts'>
<script type='text/javaScript'>
var rdp_numposts=5;
var rdp_snippet_length=120;
var rdp_info='no';
var rdp_comment='comment';
var rdp_disable='Comments Disabled';
var rdp_current=[];var rdp_total_posts=0;var rdp_current=new Array(rdp_numposts);function totalposts(json){rdp_total_posts=json.feed.openSearch$totalResults.$t}document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&max-results=0&callback=totalposts\"><\/script>');function getvalue(){for(var i=0;i<rdp_numposts;i++){var found=false;var rndValue=get_random();for(var j=0;j<rdp_current.length;j++){if(rdp_current[j]==rndValue){found=true;break}};if(found){i--}else{rdp_current[i]=rndValue}}};function get_random(){var ranNum=1+Math.round(Math.random()*(rdp_total_posts-1));return ranNum};
</script>
<script type='text/javaScript'> 
function random_posts(json){for(var i=0;i<rdp_numposts;i++){var entry=json.feed.entry[i];var rdp_posttitle=entry.title.$t;if('content'in entry){var rdp_get_snippet=entry.content.$t}else{if('summary'in entry){var rdp_get_snippet=entry.summary.$t}else{var rdp_get_snippet="";}};rdp_get_snippet=rdp_get_snippet.replace(/<[^>]*>/g,"");if(rdp_get_snippet.length<rdp_snippet_length){var rdp_snippet=rdp_get_snippet}else{rdp_get_snippet=rdp_get_snippet.substring(0,rdp_snippet_length);var space=rdp_get_snippet.lastIndexOf(" ");rdp_snippet=rdp_get_snippet.substring(0,space)+"&#133;";};for(var j=0;j<entry.link.length;j++){if('thr$total'in entry){var rdp_commentsNum=entry.thr$total.$t+' '+rdp_comment}else{rdp_commentsNum=rdp_disable};if(entry.link[j].rel=='alternate'){var rdp_posturl=entry.link[j].href;var rdp_postdate=entry.published.$t;if('media$thumbnail'in entry){var rdp_thumb=entry.media$thumbnail.url}else{rdp_thumb="http://1.bp.blogspot.com/-PPTJQCe-atQ/U4ca2QTr_5I/AAAAAAAAEEc/TRrKNK1fqQY/s1600/no-image-available.jpg"}}};document.write('<li>');document.write('<a href="'+rdp_posturl+'" rel="nofollow"><img alt="'+rdp_posttitle+'" src="'+rdp_thumb+'"/></a>');document.write('<div><a href="'+rdp_posturl+'" rel="nofollow" title="'+rdp_snippet+'">'+rdp_posttitle+'</a></div>');if(rdp_info=='yes'){document.write('<span><div  class="rp-info">'+rdp_postdate.substring(8,10)+'/'+rdp_postdate.substring(5,7)+'/'+rdp_postdate.substring(0,4)+' - '+rdp_commentsNum)+'</div></span>'};document.write('<div class="rp-snippet">'+rdp_snippet+'</div><div style="clear:both"></div></li>')}};getvalue();for(var i=0;i<rdp_numposts;i++){document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&start-index='+rdp_current[i]+'&max-results=1&callback=random_posts\"><\/script>')};
</script>

</ul>
