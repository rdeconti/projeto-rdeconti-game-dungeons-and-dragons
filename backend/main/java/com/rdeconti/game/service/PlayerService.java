package com.rdeconti.game.service;

import com.rdeconti.game.exception.InvalidInputException;
import com.rdeconti.game.model.PlayerModel;
import com.rdeconti.game.repository.PlayerRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

	@Autowired
	private final PlayerRepository playerRepository;

	public PlayerService(PlayerRepository playerRepository) {
		this.playerRepository = playerRepository;
	}

	public PlayerModel createPlayer(@NotNull PlayerModel playerModel ) {
		playerModel.setId(playerModel.getId());
		playerModel.setName(playerModel.getName());
		playerModel.setNumberMatches(playerModel.getNumberMatches());
		playerModel.setNumberMatchesWon(playerModel.getNumberMatchesWon());
		return this.playerRepository.save( playerModel );
	}

	public List< PlayerModel > findAllPlayers( ) {
		return (List<PlayerModel>) playerRepository.findAll( );
	}

	public PlayerModel getPlayerById( Integer id ) {
		return playerRepository.findById( id )
						 .orElseThrow();
	}

	public void deletePlayer( Integer id ) {
		playerRepository.deleteById( id );
	}

	public PlayerModel updatePlayer(@NotNull PlayerModel playerModel ) {
		if ( playerModel.getId( ) == null ) {
			throw new InvalidInputException( "Player not found with ID" );
		}
		return playerRepository.save( playerModel );
	}
}
