package com.rdeconti.game.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table( name = "SHIFTS" )
public class ShiftModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "ID", nullable = false )
    private Integer         id;

    @Column( name = "GAME_ID", nullable = false )
    private Integer         gameId;

    @Column( name = "SHIFT_NUMBER", nullable = false )
    private Integer         shiftNumber;

    @Column( name = "ATTACKER", nullable = false )
    private String          attacker;

    @Column( name = "ATTACK_POINTS", nullable = false )
    private Integer         attackPoints;

    @Column( name = "DEFENSE_POINTS", nullable = false )
    private Integer         defensePoints;

    @Column( name = "DAMAGE_POINTS", nullable = false )
    private Integer         damagePoints;

    @Column( name = "CHARACTER_LIVE_POINTS", nullable = false )
    private Integer         characterLivePoints;

    @Column( name = "OPPONENT_LIVE_POINTS", nullable = false )
    private Integer         opponentLivePoints;

    public ShiftModel() {

    }

    public ShiftModel(Integer id, Integer gameId, Integer shiftNumber, String attacker, Integer attackPoints, Integer defensePoints, Integer damagePoints, Integer characterLivePoints, Integer opponentLivePoints) {
        this.id = id;
        this.gameId = gameId;
        this.shiftNumber = shiftNumber;
        this.attacker = attacker;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
        this.damagePoints = damagePoints;
        this.characterLivePoints = characterLivePoints;
        this.opponentLivePoints = opponentLivePoints;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getGameId() {
        return gameId;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

    public Integer getShiftNumber() {
        return shiftNumber;
    }

    public void setShiftNumber(Integer shiftNumber) {
        this.shiftNumber = shiftNumber;
    }

    public String getAttacker() {
        return attacker;
    }

    public void setAttacker(String attacker) {
        this.attacker = attacker;
    }

    public Integer getAttackPoints() {
        return attackPoints;
    }

    public void setAttackPoints(Integer attackPoints) {
        this.attackPoints = attackPoints;
    }

    public Integer getDefensePoints() {
        return defensePoints;
    }

    public void setDefensePoints(Integer defensePoints) {
        this.defensePoints = defensePoints;
    }

    public Integer getDamagePoints() {
        return damagePoints;
    }

    public void setDamagePoints(Integer damagePoints) {
        this.damagePoints = damagePoints;
    }

    public Integer getCharacterLivePoints() {
        return characterLivePoints;
    }

    public void setCharacterLivePoints(Integer characterLivePoints) {
        this.characterLivePoints = characterLivePoints;
    }

    public Integer getOpponentLivePoints() {
        return opponentLivePoints;
    }

    public void setOpponentLivePoints(Integer opponentLivePoints) {
        this.opponentLivePoints = opponentLivePoints;
    }
}
