import PlaylistPlayer from '../services/playlistPlayer';

export default function HomeController() {

    var player = new PlaylistPlayer();
    player.getFeaturedPlaylists();

};