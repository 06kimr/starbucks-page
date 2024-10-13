var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "epMDcqKoQys",
    playerVars: {
      autoplay: true,
      loop: true,
    },
    events: {
      onReady: (e) => {
        e.target.mute();
      },
    },
  });
}
