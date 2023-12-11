
// data
let playlist = {
	idNames: {
		imgBox: 'img-box-1',
		titleTextBox: 'title-1',
		textBoxTop: 'text-box-1',
		textBoxBottom: 'text-box-2'
	},
	title: 'Hip-Hop Hits',
	coverImageUrl: '../../img/playlist1-img.jpg',
	info: {
		 totalTracksCount: '4 tracks',
		 totalTracksDuration: '12m 13s',
		 artistNames: 'Eminem, 50cent, Lloyd Banks'
	},
	tracks: [
		 { 
			  coverImageUrl: 'track1.png',
			  artistName: 'Eminem',
			  title: 'Rap God', 
			  fileUrl: 'Eminem_-_Rap_God.mp3',
			  isHot: false,
		 },
		 {
			  coverImageUrl: 'track2.png',
			  artistName: '50cent',
			  title: 'In da Club', 
			  fileUrl: '50_Cent_-_In_Da_Club_FlexyOkay.com.mp3',
			  isHot: true
		 }
	]
}
let playlist2 = {
	idNames: {
		imgBox: 'img-box-2',
		titleTextBox: 'title-2',
		textBoxTop: 'text-box-3',
		textBoxBottom: 'text-box-4'
	},
	title: 'Hip-Hop Hits',
	coverImageUrl: '../../img/playlist2-img.jpg',
	info: {
		 totalTracksCount: '4 tracks',
		 totalTracksDuration: '12m 13s',
		 artistNames: 'Eminem, 50cent, MC Hammer'
	},
	tracks: [
		 { 
			  coverImageUrl: 'track1.png',
			  artistName: 'Eminem',
			  title: 'Rap God', 
			  fileUrl: 'Eminem_-_Rap_God.mp3',
			  isHot: false,
		 },
		 {
			  coverImageUrl: 'track2.png',
			  artistName: '50cent',
			  title: 'In da Club', 
			  fileUrl: '50_Cent_-_In_Da_Club_FlexyOkay.com.mp3',
			  isHot: true
		 }
	]
}

// render
renderPlaylist(playlist)
renderPlaylist(playlist2)

function renderPlaylist (playlistForRendering) {
let playlistImageElement = document.createElement("img");
playlistImageElement.classList.add('description__img');
playlistImageElement.src = playlistForRendering.coverImageUrl;
playlistImageElement.alt = 'playlist image';
playlistImageElement.width = '170';
playlistImageElement.height = '176';
const imageBox = document.getElementById(playlistForRendering.idNames.imgBox);
imageBox.append(playlistImageElement);

let playlistTitleElement = document.createElement('h3');
playlistTitleElement.classList.add('text-box__playlist-name');
playlistTitleElement.append(playlist.title);
const titleBlock = document.getElementById(playlistForRendering.idNames.titleTextBox);
titleBlock.insertAdjacentElement('afterend', playlistTitleElement);

let playlistCountElement = document.createElement('span');
playlistCountElement.append(playlistForRendering.info.totalTracksCount + ',' + ' ' +  playlistForRendering.info.totalTracksDuration);
const textBox = document.getElementById(playlistForRendering.idNames.textBoxTop);
textBox.append(playlistCountElement);

let playlistArtistsElement = document.createElement('span');
playlistArtistsElement.append(playlistForRendering.info.artistNames);
const textBox2 = document.getElementById(playlistForRendering.idNames.textBoxBottom);
textBox2.insertAdjacentElement('beforebegin', playlistArtistsElement);
}




// render
// renderPlaylist(playlist)
// renderPlaylist(playlist2)


// function renderPlplaylistForRendering) {    
// 	let playlistImageElement = document.createElement('img');
// 	playlistImageElement.src = playlistForRendering.coverImageUrl;
// 	document.body.append(playlistImageElement);
	
// 	let playlistTitleElement = document.createElement('h2');
// 	playlistTitleElement.append(playlistForRendering.title);
// 	document.body.append(playlistTitleElement);
	
// 	let tracksListElement = document.createElement('ul');
	
// 	let track1Element = document.createElement('li');
// 	track1Element.append(playlistForRendering.tracks[0].artistName + ' - ' + playlistForRendering.tracks[0].title);
	
// 	let track2Element = document.createElement('li');
// 	track2Element.append(playlistForRendering.tracks[1].artistName + ' - ' + playlistForRendering.tracks[1].title);
	
// 	tracksListElement.append(track1Element);
// 	tracksListElement.append(track2Element);
	
	
// 	document.body.append(tracksListElement);
// }
