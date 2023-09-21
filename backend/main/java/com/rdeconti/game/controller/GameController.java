package com.rdeconti.game.controller;

import com.rdeconti.game.model.GameModel;
import com.rdeconti.game.service.GameService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( value = "/game" )
@Api( value = "GAMES API REST" )
@CrossOrigin(origins = "http://localhost:4200")
public class GameController {

	@Autowired
	private GameService gameService;

	@GetMapping( "/games/get" )
	@ApiOperation( "FIND ALL GAMES" )
	public ResponseEntity< List<GameModel> > findAllGames( ) {
		return new ResponseEntity<>( gameService.findAllGames( ), HttpStatus.OK );
	}

	@PostMapping( "/games/post" )
	@ApiOperation( "CREATE GAME" )
	public ResponseEntity< GameModel > createGame( @RequestBody GameModel GameModel ) {
		return new ResponseEntity<>( gameService.createGame( GameModel ), HttpStatus.CREATED );
	}

	@DeleteMapping( "/games/delete/{id}" )
	@ApiOperation( "DELETE GAME" )
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable int id) {
		this.gameService.deleteGame(id);
	}

	@GetMapping( "/games/get/{id}" )
	@ApiOperation( "FIND GAME BY ID" )
	public ResponseEntity< GameModel > getUserById( @PathVariable( value = "id" ) Integer GameId ) {
		return new ResponseEntity<>( gameService.getGameById( GameId ), HttpStatus.OK );
	}

	@PutMapping( "/games/put/{id}" )
	@ApiOperation( "UPDATE GAME" )
	@ResponseStatus(value = HttpStatus.OK)
	public GameModel updateUser(@PathVariable int id, @RequestBody GameModel GameModel) {
		return this.gameService.updateGame(GameModel);
	}

	@GetMapping("/games/whoStartGame")
	@ApiOperation("WHO START GAME")
	public ResponseEntity<String> WhoStartGame (){
		return new ResponseEntity<>(gameService.WhoStartGame(), HttpStatus.OK);
	}

}
