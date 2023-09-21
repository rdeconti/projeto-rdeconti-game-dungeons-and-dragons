package com.rdeconti.game.service;

import com.rdeconti.game.exception.InvalidInputException;
import com.rdeconti.game.exception.ResourceNotFoundException;
import com.rdeconti.game.model.CharacterModel;
import com.rdeconti.game.repository.CharacterRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {

	@Autowired
	private final CharacterRepository characterRepository;

	public CharacterService(CharacterRepository characterRepository) {
		this.characterRepository = characterRepository;
	}

	public CharacterModel createCharacter(@NotNull CharacterModel characterModel ) {
		characterModel.setId(characterModel.getId());
		characterModel.setName(characterModel.getName());
		characterModel.setType(characterModel.getType());
		characterModel.setNumberPointsLive(characterModel.getNumberPointsLive());
		characterModel.setNumberPointsStrength(characterModel.getNumberPointsStrength());
		characterModel.setNumberPointsDefense(characterModel.getNumberPointsDefense());
		characterModel.setNumberPointsAgility(characterModel.getNumberPointsAgility());
		characterModel.setQuantityDice(characterModel.getQuantityDice());
		characterModel.setQuantityFaceDices(characterModel.getQuantityFaceDices());
		return this.characterRepository.save( characterModel );
	}

	public List< CharacterModel > findAllCharacters( ) {
		return characterRepository.findAll( );
	}

	public CharacterModel getCharacterById( Integer id ) {
		return characterRepository.findById( id )
						 .orElseThrow( ( ) -> new ResourceNotFoundException(
								 "Character not found with ID: " + id ) );
	}

	public void deleteCharacter( Integer id ) {
		characterRepository.deleteById( id );
	}

	public CharacterModel updateCharacter(@NotNull CharacterModel characterModel ) {
		if ( characterModel.getId( ) == null ) {
			throw new InvalidInputException( "Character not found with ID" );
		}
		return characterRepository.save( characterModel );
	}
}
