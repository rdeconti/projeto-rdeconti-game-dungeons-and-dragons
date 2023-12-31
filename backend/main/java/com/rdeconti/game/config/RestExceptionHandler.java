package com.rdeconti.game.config;

import com.rdeconti.game.exception.ErrorMessage;
import com.rdeconti.game.exception.InvalidInputException;
import com.rdeconti.game.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class RestExceptionHandler {

	public ResponseEntity< ErrorMessage > handle( Exception ex, HttpStatus statusCode,
												  String description ) {
		ErrorMessage message = new ErrorMessage( statusCode, LocalDateTime.now( ), ex.getMessage( ),
												 description );
		ex.printStackTrace( );
		return new ResponseEntity<>( message, message.getStatusCode( ) );
	}

	@ExceptionHandler( { InvalidInputException.class } )
	public ResponseEntity< ErrorMessage > invalidInputHandler( Exception ex, WebRequest request ) {
		return handle( ex, HttpStatus.BAD_REQUEST, request.getDescription( false ) );
	}

	@ExceptionHandler( ResourceNotFoundException.class )
	public ResponseEntity< ErrorMessage > resourceNotFoundHandler( Exception ex,
																   WebRequest request ) {
		return handle( ex, HttpStatus.NOT_FOUND, request.getDescription( false ) );
	}
}
