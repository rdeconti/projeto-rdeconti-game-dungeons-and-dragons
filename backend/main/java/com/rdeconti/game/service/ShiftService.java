package com.rdeconti.game.service;

import com.rdeconti.game.config.Utilities;
import com.rdeconti.game.exception.InvalidInputException;
import com.rdeconti.game.model.ShiftModel;
import com.rdeconti.game.repository.ShiftRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShiftService {

	@Autowired
	private final ShiftRepository shiftRepository;

	public ShiftService(ShiftRepository shiftRepository) {
		this.shiftRepository = shiftRepository;
	}

	public ShiftModel createShift(@NotNull ShiftModel shiftModel ) {
		shiftModel.setGameId(shiftModel.getGameId());
		shiftModel.setShiftNumber(shiftModel.getShiftNumber());
		shiftModel.setAttacker(shiftModel.getAttacker());
        shiftModel.setAttackPoints(shiftModel.getAttackPoints());
        shiftModel.setDefensePoints(shiftModel.getDefensePoints());
        shiftModel.setDamagePoints(shiftModel.getDamagePoints());
        shiftModel.setCharacterLivePoints(shiftModel.getCharacterLivePoints());
		shiftModel.setOpponentLivePoints(shiftModel.getOpponentLivePoints());
		return this.shiftRepository.save( shiftModel );
	}

	public List< ShiftModel > findAllShifts( ) {
		return (List<ShiftModel>) shiftRepository.findAll( );
	}

	public ShiftModel getShiftById( Integer id ) {
		return shiftRepository.findById( id )
						 .orElseThrow();
	}

	public void deleteShift( Integer id ) {
		shiftRepository.deleteById( id );
	}

	public ShiftModel updateShift(@NotNull ShiftModel shiftModel ) {
		if ( shiftModel.getId( ) == null ) {
			throw new InvalidInputException( "Shift not found with ID" );
		}
		return shiftRepository.save( shiftModel );
	}

	public Integer CalculateDefense(int numberPointDefense, int numberPointAgility) {
		Utilities utilities = new Utilities();
		return utilities.CalculateDefense( numberPointDefense, numberPointAgility );
	}

	public Integer CalculateAttack(int numberPointStrength, int numberPointAgility) {
		Utilities utilities = new Utilities();
		return utilities.CalculateAttack( numberPointStrength, numberPointAgility );
	}

	public Integer CalculateDamage(
			int calculatedDefense,
		   	int calculatedAttack,
			int NumberPointsStrength,
			int diceQuantity,
			int diceFaces ) {
		Utilities utilities = new Utilities();
		return utilities.CalculateDamage(
				calculatedDefense,
				calculatedAttack,
				NumberPointsStrength,
				diceQuantity,
				diceFaces );
	}

	public Integer CalculateLivePoints(int CalculatedDamage, int NumberPointsLive) {
		Utilities utilities = new Utilities();
		return utilities.CalculateLivePoints( CalculatedDamage, NumberPointsLive );
	}
}
