export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <div class="card text-center mx-5" style="width: 18rem;">
    <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
                        <div class="card-body">
                            <h3><b>${this.title}</b></h3>
                            <p class="card-text"><b>Album:</b> ${this.album}<span> | </span><b>Artist:</b>
                                ${this.artist}
                            </p>
                            <audio controls style="width: 16rem;">
                            <source src="${this.preview}" type="">
                            </audio>
                            <p class="text-center"><b> Buy Now!</b> ${this.price}</p>
                            <button class="btn-outline btn-success"
                                onclick="app.songController.addSong('${this._id}')">Add To Playlist</button>
                        </div>
                    </div>
        `;
  }

  get playlistTemplate() {
    return `

        `;
  }
  get resultsTemplate() {
    return `
    <div class="card resultCard" style="width: 18rem;">
                        <img class="card-img-top" src="${this.albumArt}" alt="Card image cap"onclick="app.songsController.setActive('${this._id}')">
                        <div class="card-body">
                            <p class="card-text text-center"><b>${this.title}</b></p>
                        </div>
                    </div>
    
    `
  }
}
