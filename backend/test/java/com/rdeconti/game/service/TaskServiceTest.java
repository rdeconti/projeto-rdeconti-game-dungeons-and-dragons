package com.rdeconti.game.service;

import com.rdeconti.game.model.CharacterModel;
import com.rdeconti.game.repository.CharacterRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

class TaskServiceTest {

	@InjectMocks
	private CharacterService characterService;

	@Mock
	private CharacterRepository characterRepository;

	List<CharacterModel> characterModelList;

	@BeforeEach
	void setUp( ) {
		MockitoAnnotations.openMocks( this );
		characterModelList = new ArrayList<>( );
		CharacterModel characterModel1 = new CharacterModel(1, "Guerreiro Test 1", "H", 20, 7, 5, 6, 1, 12 );
		CharacterModel characterModel2 = new CharacterModel(2, "Guerreiro Test 2", "H", 20, 7, 5, 6, 1, 12);
		characterModelList.add( characterModel1 );
		characterModelList.add( characterModel2 );
	}

	@Test
	void create( ) {
		CharacterModel characterModel = new CharacterModel(1, "Guerreiro Test 1", "H", 20, 7, 5, 6, 1, 12 );
		CharacterModel expected = new CharacterModel(1, "Guerreiro Test 1", "H", 20, 7, 5, 6, 1, 12 );
		when( characterRepository.save( characterModel ) ).thenReturn( characterModel );
		CharacterModel response = characterService.createCharacter( characterModel );
		Assertions.assertEquals( expected.getName(), response.getName());
		verify(characterRepository, times( 1 ) ).save( any( ) );
	}

	@Test
	void findAll( ) {
		when( characterRepository.findAll( ) ).thenReturn(characterModelList);
		List< CharacterModel > characterModels = characterService.findAllCharacters( );
		Assertions.assertEquals( characterModels, characterModelList);
		verify(characterRepository, times( 1 ) ).findAll( );
	}

	@Test
	void findById( ) {
		when( characterRepository.findById( any( ) ) ).thenReturn(
				Optional.ofNullable( characterModelList.get( 0 ) ) );
		CharacterModel characterModel = characterService.getCharacterById( 1 );
		Assertions.assertEquals( characterModel, characterModelList.get( 0 ) );
		verify(characterRepository, times( 1 ) ).findById( any( ) );
	}

	@Test
	void delete( ) {
		doNothing( ).when(characterRepository).deleteById( any( ) );
		characterService.deleteCharacter( 1 );
		verify(characterRepository, times( 1 ) ).deleteById( any( ) );
	}

	@Test
	void update( ) {
		CharacterModel characterModel = characterModelList.get( 0 );
		characterModel.setName( "test" );
		when( characterRepository.save( characterModel ) ).thenReturn( characterModel );
		CharacterModel characterModel1 = characterService.updateCharacter( characterModel );
		Assertions.assertEquals( characterModel.getName(), characterModel1.getName( ) );
		verify(characterRepository, times( 1 ) ).save( any( ) );
	}
}