export default class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  async getResource (url) {
    const res = await fetch(`${this._apiBase}${url}`);
  
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
  };

  async getAllCharacter() {
    const result = await this.getResource(`/characters?page=5&pageSize=10`);
    return result.map(this._transformCharacteh);
  }
  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacteh(character);
  }
  async getAllHouse() {
    const houseRes = await this.getResource(`/houses/`);
    return houseRes.map(this._transformHouse)
  }
  async getHouse(id) {
    const house = await this.getResource(`/houses/${id}/`);
    return this._transformHouse(house);
  }
  async getAllBooks() {
    const booksRes = await this.getResource(`/books/`);
    return booksRes.map(this._transformBooks)
  }
  async getBooks(id) {
    const books = await this.getResource(`/books/${id}/`);
    return this._transformBooks(books);
  }

  _transformCharacteh(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture
    }
  }

  _transformHouse(house) {
    return {
      house: house.name,
      region: house.region,
      words: house.words,
      title: house.title,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    }
  }

  _transformBooks(books) {
    return {
      name: books.name,
      numberOfpages: books.numberOfpages,
      publiser: books.publiser,
      released: books.released
    }
  }

}