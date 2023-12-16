
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
			  coverImageUrl: '../../img/Eminem.jpg',
			  artistName: 'Eminem - ',
			  title: 'Rap God', 
			  fileUrl: '../../files/Eminem_-_Rap_God.mp3',
			  isHot: false,
			  trackImgId: 'track-img-1',
			  artistNameId: 'artist-name-1',
			  trackNameId: 'track-name-1',
			  audioBoxId: 'audio-box-1'
		 },
		 {
			  coverImageUrl: '../../img/50-cent.jpg',
			  artistName: '50cent - ',
			  title: 'In da Club', 
			  fileUrl: '../../files/50_Cent_-_In_Da_Club_47965582.mp3',
			  isHot: true,
			  trackImgId: 'track-img-2',
			  artistNameId: 'artist-name-2',
			  trackNameId: 'track-name-2',
			  audioBoxId: 'audio-box-2'
		 },
		 { 
			coverImageUrl: '../../img/DMX.jpg',
			artistName: 'DMX - ',
			title: 'Give It To Ya', 
			fileUrl: '../../files/DMX_-_X_Gon_Give_It_to_Ya_73088122.mp3',
			isHot: true,
			trackImgId: 'track-img-3',
			artistNameId: 'artist-name-3',
			trackNameId: 'track-name-3',
			audioBoxId: 'audio-box-3'
	  },
	  { 
		coverImageUrl: '../../img/Eminem-2.jpg',
		artistName: 'Eminem feat 50 Cent, Cashis - ',
		title: "You Don't Know", 
		fileUrl: '../../files/Eminem_50_Cent_Lloyd_Banks_Cahis_-_You_Dont_Know_48270332.mp3',
		isHot: false,
		trackImgId: 'track-img-4',
		artistNameId: 'artist-name-4',
		trackNameId: 'track-name-4',
		audioBoxId: 'audio-box-4'
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
	title: 'Rap Hits 1990s',
	coverImageUrl: '../../img/playlist2-img.jpg',
	info: {
		 totalTracksCount: '4 tracks',
		 totalTracksDuration: '17m 44s',
		 artistNames: 'Eminem, 50cent, MC Hammer'
	},
	tracks: [
		 { 
			  coverImageUrl: '../../img/Public-enemy.jpg',
			  artistName: 'Public Enemy - ',
			  title: 'Fight the Power', 
			  fileUrl: '../../files/Public_Enemy_-_Fight_The_Power_48021083.mp3',
			  isHot: true,
			  trackImgId: 'track-img-5',
			  artistNameId: 'artist-name-5',
			  trackNameId: 'track-name-5',
			  audioBoxId: 'audio-box-5'
		 },
		 {
			  coverImageUrl: '../../img/Vanilia-ice.jpg',
			  artistName: 'Vanila Ice - ',
			  title: 'Ice Ice Baby', 
			  fileUrl: '../../files/Vanilla_Ice_-_Ice_Ice_Baby_48283042.mp3',
			  isHot: true,
			  trackImgId: 'track-img-6',
			  artistNameId: 'artist-name-6',
			  trackNameId: 'track-name-6',
			  audioBoxId: 'audio-box-6'
		 },
		 {
			coverImageUrl: '../../img/MC-hammer.jpg',
			artistName: 'MC Hammer - ',
			title: 'You Can’t Touch This', 
			fileUrl: '../../files/MC_Hammer_-_U_Cant_Touch_This_48049905.mp3',
			isHot: false,
			trackImgId: 'track-img-7',
			artistNameId: 'artist-name-7',
			trackNameId: 'track-name-7',
			audioBoxId: 'audio-box-7'
	  },
	  {
		coverImageUrl: '../../img/Brand-nubian.jpg',
		artistName: 'Brand Nubian - ',
		title: 'Brand Nubian', 
		fileUrl: '../../files/Brand_Nubian_-_Brand_Nubian_48295459.mp3',
		isHot: false,
		trackImgId: 'track-img-8',
		artistNameId: 'artist-name-8',
		trackNameId: 'track-name-8',
		audioBoxId: 'audio-box-8'
  }
]	
}

// render
renderPlaylist(playlist);
renderPlaylist(playlist2);

function renderPlaylist (playlistForRendering) {
	renderPlaylistHeader (playlistForRendering);
	renderTrack(playlistForRendering.tracks[0]);
	renderTrack(playlistForRendering.tracks[1]);
	renderTrack(playlistForRendering.tracks[2]);
	renderTrack(playlistForRendering.tracks[3]);	
}

function renderPlaylistHeader (playlistForRendering) {
let playlistImageElement = document.createElement("img");
playlistImageElement.classList.add('description__img');
playlistImageElement.src = playlistForRendering.coverImageUrl;
playlistImageElement.alt = 'playlist image';
playlistImageElement.width = '170';
playlistImageElement.height = '176';
const imageBox = document.getElementById(playlistForRendering.idNames.imgBox);
imageBox.append(playlistImageElement);

let playlistTitleElement = document.createElement('h2');
playlistTitleElement.classList.add('text-box__playlist-name');
playlistTitleElement.append(playlistForRendering.title);
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

function renderTrack (inputTrackForRendering) {
let trackImageElement = document.createElement("img");
trackImageElement.classList.add('grid__img');
trackImageElement.src = inputTrackForRendering.coverImageUrl;
trackImageElement.alt = 'artist image';
trackImageElement.width = '48';
trackImageElement.height = '48';
const trackImageBox = document.getElementById(inputTrackForRendering.trackImgId);
trackImageBox.append(trackImageElement);

let trackArtistNameElement = document.createElement('span');
trackArtistNameElement.append(inputTrackForRendering.artistName);
const textBox3 = document.getElementById(inputTrackForRendering.artistNameId);
textBox3.insertAdjacentElement('afterend', trackArtistNameElement);

let trackNameElement = document.createElement('span');
trackNameElement.append(inputTrackForRendering.title);
const textBox4 = document.getElementById(inputTrackForRendering.trackNameId);
textBox4.appendChild(trackNameElement);

let trackAudioElement = document.createElement('audio');
trackAudioElement.classList.add('grid__audio');
trackAudioElement.src = inputTrackForRendering.fileUrl;
trackAudioElement.controls = true;
const audioBox = document.getElementById(inputTrackForRendering.audioBoxId);
audioBox.append(trackAudioElement);
}

