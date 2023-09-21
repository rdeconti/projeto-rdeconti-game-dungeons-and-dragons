package com.rdeconti.game.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table( name = "GAMES" )
public class GameModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "ID", nullable = false )
    private Integer id;

    @Column( name = "GAME_DATE", nullable = false )
    private String gameDate;

    @Column( name = "GAME_TIME", nullable = false )
    private String gameTime;

    @Column( name = "GAME_PLAYER_NAME", nullable = false )
    private String gamePlayerName;

    @Column( name = "GAME_CHARACTER_NAME", nullable = false )
    private String gameCharacterName;

    @Column( name = "GAME_OPPONENT_NAME", nullable = false )
    private String gameOpponentName;

    @Column( name = "GAME_INITIATIVE_NAME", nullable = false )
    private String gameInitiativeName;

    public GameModel() {
    }

    public GameModel(Integer id, String gameDate, String gameTime, String gamePlayerName, String gameCharacterName, String gameOpponentName, String gameInitiativeName) {
        this.id = id;
        this.gameDate = gameDate;
        this.gameTime = gameTime;
        this.gamePlayerName = gamePlayerName;
        this.gameCharacterName = gameCharacterName;
        this.gameOpponentName = gameOpponentName;
        this.gameInitiativeName = gameInitiativeName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGameDate() {
        return gameDate;
    }

    public void setGameDate(String gameDate) {
        this.gameDate = gameDate;
    }

    public String getGameTime() {
        return gameTime;
    }

    public void setGameTime(String gameTime) {
        this.gameTime = gameTime;
    }

    public String getgamePlayerName() {
        return gamePlayerName;
    }

    public void setgamePlayerName(String gamePlayerName) {
        this.gamePlayerName = gamePlayerName;
    }

    public String getgameCharacterName() {
        return gameCharacterName;
    }

    public void setgameCharacterName(String gameCharacterName) {
        this.gameCharacterName = gameCharacterName;
    }

    public String getgameOpponentName() {
        return gameOpponentName;
    }

    public void setgameOpponentName(String gameOpponentName) {
        this.gameOpponentName = gameOpponentName;
    }

    public String getgameInitiativeName() {
        return gameInitiativeName;
    }

    public void setgameInitiativeName(String gameInitiativeName) {
        this.gameInitiativeName = gameInitiativeName;
    }
}
