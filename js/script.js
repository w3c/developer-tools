
var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		width: window.innerWidth,
    	playerVars: { 'autoplay': 1, 'controls': 0, 'loop': 1, 'modestbranding': 1, 'showinfo': 0, 'playlist': 'Ug6XAw6hzaw' },
		height: Math.ceil(window.innerWidth / (16/9)),
		videoId: '1zWhDg8wEJY',
        events: {
        	'onReady': onPlayerReady
        }
	})
}

function onPlayerReady(event) {
    player.mute();
	player.setLoop(false);
}


document.getElementById('toggle-menu').style.display='none';
var hidden = true;
function toggle() {
    console.log('hey');
    if(hidden) {
        hidden = false;
        document.getElementById('toggle-menu').style.display='';
    
    }
    else {
        hidden = true;
        document.getElementById('toggle-menu').style.display='none';
    }
}




