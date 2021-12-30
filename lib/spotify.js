// Any utility files should go in the "lib" folder.
// Utilizing a helpful package for working with the Spotify API (https://github.com/thelinmichael/spotify-web-api-node).
import SpotifyWebApi from 'spotify-web-api-node';

// Scopes are the permissions we want from Spotify.
const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-email',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-follow-read',
].join(',');

const params = {
  // Parse on the scope as params (https://accounts.spotify.com/authorize?params=user-read-email,...).
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

// If we import this file without curly brackets, the `spotifyApi` will be given by default (however, we can specifiy to just import LOGIN_URL).
export default spotifyApi;
export { LOGIN_URL };
