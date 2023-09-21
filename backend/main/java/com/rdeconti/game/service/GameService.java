package com.rdeconti.game.service;

import com.rdeconti.game.config.Utilities;
import com.rdeconti.game.exception.InvalidInputException;
import com.rdeconti.game.model.GameModel;
import com.rdeconti.game.repository.GameRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

	@Autowired
	private final GameRepository gameRepository;

	public GameService(GameRepository gameRepository) {
		this.gameRepository = gameRepository;
	}

	public GameModel createGame(@NotNull GameModel gameModel ) {
		gameModel.setId(gameModel.getId());
		gameModel.setGameDate(gameModel.getGameDate());
		gameModel.setGameTime(gameModel.getGameTime());
		gameModel.setgamePlayerName(gameModel.getgamePlayerName());
		gameModel.setgameCharacterName(gameModel.getgameCharacterName());
		gameModel.setgameOpponentName(gameModel.getgameOpponentName());
		gameModel.setgameInitiativeName(gameModel.getgameInitiativeName());
		return this.gameRepository.save( gameModel );
	}

	public List<GameModel> findAllGames( ) {
		return (List<GameModel>) gameRepository.findAll( );
	}

	public GameModel getGameById(Integer id ) {
		return gameRepository.findById( id )
						 .orElseThrow();
	}

	public void deleteGame( Integer id ) {
		gameRepository.deleteById( id );
	}

	public GameModel updateGame(@NotNull GameModel gameModel) {
		if ( gameModel.getId( ) == null ) {
			throw new InvalidInputException( "Game not found with ID" );
		}
		return gameRepository.save(gameModel);
	}

	public String WhoStartGame() {
		Utilities utilities = new Utilities();
		return utilities.WhoStartGame();
	}

}
