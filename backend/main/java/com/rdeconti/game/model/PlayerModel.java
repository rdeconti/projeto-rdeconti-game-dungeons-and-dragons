package com.rdeconti.game.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table( name = "PLAYERS" )
public class PlayerModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "NUMBER_MATCHES", nullable = false)
    private Integer numberMatches;

    @Column(name = "NUMBER_MATCHES_WON", nullable = false)
    private Integer numberMatchesWon;

    @Column(name = "NUMBER_MATCHES_LOST", nullable = false)
    private Integer numberMatchesLost;

    public PlayerModel() {
    }

    public PlayerModel(Integer id, String name, Integer numberMatches, Integer numberMatchesWon, Integer numberMatchesLost) {
        this.id = id;
        this.name = name;
        this.numberMatches = numberMatches;
        this.numberMatchesWon = numberMatchesWon;
        this.numberMatchesLost = numberMatchesLost;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getNumberMatches() {
        return numberMatches;
    }

    public void setNumberMatches(Integer numberMatches) {
        this.numberMatches = numberMatches;
    }

    public Integer getNumberMatchesWon() {
        return numberMatchesWon;
    }

    public void setNumberMatchesWon(Integer numberMatchesWon) {
        this.numberMatchesWon = numberMatchesWon;
    }

    public Integer getNumberMatchesLost() {
        return numberMatchesLost;
    }

    public void setNumberMatchesLost(Integer numberMatchesLost) {
        this.numberMatchesLost = numberMatchesLost;
    }
}

