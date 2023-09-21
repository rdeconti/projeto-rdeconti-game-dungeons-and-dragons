package com.rdeconti.game.controller;

import com.rdeconti.game.model.ShiftModel;
import com.rdeconti.game.service.ShiftService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( value = "/game" )
@Api( value = "SHIFTS API REST" )
@CrossOrigin(origins = "http://localhost:4200")
public class ShiftController {

	@Autowired
	private ShiftService shiftService;

	@GetMapping( "/shifts/get" )
	@ApiOperation( "FIND ALL SHIFTS" )
	public ResponseEntity< List<ShiftModel> > findAllShifts( ) {
		return new ResponseEntity<>( shiftService.findAllShifts( ), HttpStatus.OK );
	}

	@PostMapping( "/shifts/post" )
	@ApiOperation( "CREATE SHIFT" )
	public ResponseEntity< ShiftModel > createShift( @RequestBody ShiftModel shiftModel ) {
		return new ResponseEntity<>( shiftService.createShift( shiftModel ), HttpStatus.CREATED );
	}

	@DeleteMapping( "/shifts/delete/{id}" )
	@ApiOperation( "DELETE SHIFT" )
	@ResponseStatus(value = HttpStatus.NO_CONTENT)
	public void deleteShift(@PathVariable int id) {
		this.shiftService.deleteShift(id);
	}

	@GetMapping( "/shifts/get/{id}" )
	@ApiOperation( "FIND SHIFT BY ID" )
	public ResponseEntity< ShiftModel > getShiftById( @PathVariable( value = "id" ) Integer UserId ) {
		return new ResponseEntity<>( shiftService.getShiftById( UserId ), HttpStatus.OK );
	}

	@PutMapping( "/shifts/put/{id}" )
	@ApiOperation( "UPDATE SHIFT" )
	@ResponseStatus(value = HttpStatus.OK)
	public ShiftModel updateShift(@PathVariable int id, @RequestBody ShiftModel shiftModel) {
		return this.shiftService.updateShift(shiftModel);
	}

	@GetMapping("/shifts/calculateAttack/{NumberPointsStrength}/{NumberPointsAgility}")
	@ApiOperation("CALCULATE ATTACK")
	public ResponseEntity<Integer> CalculateAttack (int NumberPointsStrength, int NumberPointsAgility){
		return new ResponseEntity<>(shiftService.CalculateAttack( NumberPointsStrength, NumberPointsAgility ), HttpStatus.OK);
	}

	@GetMapping("/shifts/calculateDefense/{NumberPointsDefense}/{NumberPointsAgility}")
	@ApiOperation("CALCULATE DEFENSE")
	public ResponseEntity<Integer> CalculateDefense ( int NumberPointsDefense, int NumberPointsAgility ){
		return new ResponseEntity<>(shiftService.CalculateDefense( NumberPointsDefense, NumberPointsAgility ), HttpStatus.OK);
	}

	@GetMapping("/shifts/calculateDamage/{CalculatedDefense}/{CalculatedAttack}/{NumberPointsStrength}/{QuantityDices}/{QuantityFaceDices}")
	@ApiOperation("CALCULATE DAMAGE")
	public ResponseEntity<Integer> CalculateDamage (
			int CalculatedDefense,
			int CalculatedAttack,
			int NumberPointsStrength,
			int QuantityDices,
			int QuantityFaceDices ){
		return new ResponseEntity<>(shiftService.CalculateDamage (
				CalculatedDefense,
				CalculatedAttack,
				NumberPointsStrength,
				QuantityDices,
				QuantityFaceDices ), HttpStatus.OK);
	}

	@GetMapping("/shifts/calculateLivePoints/{CalculatedDamage}/{NumberPointsLive}")
	@ApiOperation("CALCULATE LIVE POINTS")
	public ResponseEntity<Integer> CalculateLivePoints ( int CalculatedDamage, int NumberPointsLive ){
		return new ResponseEntity<>(shiftService.CalculateLivePoints( CalculatedDamage, NumberPointsLive ), HttpStatus.OK);
	}



}
