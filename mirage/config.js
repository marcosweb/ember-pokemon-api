import getPokemons from './factories/get-pokemons';
import getPokemon from './factories/get-pokemon';

export default function() {

  this.urlPrefix = 'https://pokeapi.co';    
  this.namespace = 'api/v2';
  
  this.get('/pokemon', () => getPokemons);
  this.get('/pokemon/spearow', () => getPokemon);
  
  /*
    Shorthand cheatsheet:

    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
