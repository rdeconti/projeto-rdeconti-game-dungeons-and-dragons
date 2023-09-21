package com.rdeconti.game.controller;

import com.rdeconti.game.model.PlayerModel;
import com.rdeconti.game.service.PlayerService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( value = "/game" )
@Api( value = "PLAYERS API REST" )
@CrossOrigin(origins = "http://localhost:4200")
public class PlayerController {

	@Autowired
	private PlayerService playerService;

	@GetMapping( "/players/get" )
	@ApiOperation( "FIND ALL PLAYERS" )
	public ResponseEntity< List<PlayerModel> > findAllPlayers( ) {
		return new ResponseEntity<>( playerService.findAllPlayers( ), HttpStatus.OK );
	}

	@PostMapping( "/players/post" )
	@ApiOperation( "CREATE PLAYER" )
	public ResponseEntity< PlayerModel > createPlayer( @RequestBody PlayerModel PlayerModel ) {
		return new ResponseEntity<>( playerService.createPlayer( PlayerModel ), HttpStatus.CREATED );
	}

	@DeleteMapping( "/players/delete/{id}" )
	@ApiOperation( "DELETE PLAYER" )
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable int id) {
		this.playerService.deletePlayer(id);
	}

	@GetMapping( "/players/get/{id}" )
	@ApiOperation( "FIND PLAYERS BY ID" )
	public ResponseEntity< PlayerModel > getPlayerById( @PathVariable( value = "id" ) Integer UserId ) {
		return new ResponseEntity<>( playerService.getPlayerById( UserId ), HttpStatus.OK );
	}

	@PutMapping( "/players/put/{id}" )
	@ApiOperation( "UPDATE PLAYERS" )
	@ResponseStatus(value = HttpStatus.OK)
	public PlayerModel updatePlayer(@PathVariable int id, @RequestBody PlayerModel PlayerModel) {
		return this.playerService.updatePlayer(PlayerModel);
	}



}
