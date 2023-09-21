package com.rdeconti.game.controller;

import com.rdeconti.game.model.CharacterModel;
import com.rdeconti.game.service.CharacterService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( value = "/game" )
@Api( value = "CHARACTERS API REST" )
@CrossOrigin(origins = "http://localhost:4200")
public class CharacterController {

	@Autowired
	private CharacterService characterService;

	@GetMapping( "/characters/get" )
	@ApiOperation( "FIND ALL CHARACTERS" )
	public ResponseEntity< List< CharacterModel > > findAllCharacters( ) {
		return new ResponseEntity<>( characterService.findAllCharacters( ), HttpStatus.OK );
	}

	@GetMapping( "/characters/get/{id}" )
	@ApiOperation( "FIND CHARACTER BY ID" )
	public ResponseEntity< CharacterModel > getCharacterById( @PathVariable( value = "id" ) Integer characterId ) {
		return new ResponseEntity<>( characterService.getCharacterById( characterId ), HttpStatus.OK );
	}

	@PostMapping( "/characters/post" )
	@ApiOperation( "CREATE CHARACTER" )
	public ResponseEntity< CharacterModel > createCharacter( @RequestBody CharacterModel characterModel ) {
		return new ResponseEntity<>( characterService.createCharacter( characterModel ), HttpStatus.CREATED );
	}

	@PutMapping( "/characters/put" )
	@ApiOperation( "UPDATE CHARACTER" )
	public ResponseEntity< CharacterModel > updateCharacter( @RequestBody CharacterModel characterModel ) {
		return new ResponseEntity<>( characterService.updateCharacter( characterModel ), HttpStatus.OK );
	}

	@DeleteMapping( "/characters/delete/{id}" )
	@ApiOperation( "DELETE CHARACTER" )
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void deleteCharacter(@PathVariable int id) {
		this.characterService.deleteCharacter(id);
	}
}
