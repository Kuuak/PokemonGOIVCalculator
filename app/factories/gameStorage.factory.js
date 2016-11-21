(function() {
  'use strict'

  angular.module('pogoApp').service('gameStorage', gameStorage);

  gameStorage.$inject = ['localStorageService'];

  function gameStorage(localStorageService) {

		var service = {
			savePokemons	: set,
			fetchPokemons	: fetch,
			pokemons			: undefined
		};
		return service;

		function fetch() {
			service.pokemons = localStorageService.get('savedPokemon');

			if (service.pokemons == undefined) {
				service.pokemons = Array();
			}

			return service.pokemons;

		}

		function set( data ) {

			localStorageService.set('savedPokemon', data);
		}
	}
})();
