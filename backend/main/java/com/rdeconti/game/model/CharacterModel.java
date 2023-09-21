package com.rdeconti.game.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table( name = "CHARACTERS" )
public class CharacterModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false)
    private Integer id;

    @Column(name = "NAME", nullable = false)
    private String name;

    // TYPE "HERO" or TYPE "MONSTER"
    @Column(name = "TYPE", nullable = false)
    private String type;

    @Column(name = "NUMBER_POINT_LIVE", nullable = false)
    private Integer numberPointLive;

    @Column(name = "NUMBER_POINT_STRENGTH", nullable = false)
    private Integer numberPointStrength;

    @Column(name = "NUMBER_POINT_DEFENSE", nullable = false)
    private Integer numberPointDefense;

    @Column(name = "NUMBER_POINT_AGILITY", nullable = false)
    private Integer numberPointAgility;

    @Column(name = "QUANTITY_DICE", nullable = false)
    private Integer quantityDice;

    @Column(name = "QUANTITY_FACE_DICE", nullable = false)
    private Integer quantityFaceDice;

    public CharacterModel() {
    }

    public CharacterModel(Integer id, String name, String type, Integer numberPointLive, Integer numberPointStrength, Integer numberPointDefense, Integer numberPointAgility, Integer quantityDice, Integer quantityFaceDice) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.numberPointLive = numberPointLive;
        this.numberPointStrength = numberPointStrength;
        this.numberPointDefense = numberPointDefense;
        this.numberPointAgility = numberPointAgility;
        this.quantityDice = quantityDice;
        this.quantityFaceDice = quantityFaceDice;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getNumberPointsLive() {
        return numberPointLive;
    }

    public void setNumberPointsLive(Integer numberPointLive) {
        this.numberPointLive = numberPointLive;
    }

    public Integer getNumberPointsStrength() {
        return numberPointStrength;
    }

    public void setNumberPointsStrength(Integer numberPointStrength) {
        this.numberPointStrength = numberPointStrength;
    }

    public Integer getNumberPointsDefense() {
        return numberPointDefense;
    }

    public void setNumberPointsDefense(Integer numberPointDefense) {
        this.numberPointDefense = numberPointDefense;
    }

    public Integer getNumberPointsAgility() {
        return numberPointAgility;
    }

    public void setNumberPointsAgility(Integer numberPointAgility) {
        this.numberPointAgility = numberPointAgility;
    }

    public Integer getQuantityDice() {
        return quantityDice;
    }

    public void setQuantityDice(Integer quantityDice) {
        this.quantityDice = quantityDice;
    }

    public Integer getQuantityFaceDices() {
        return quantityFaceDice;
    }

    public void setQuantityFaceDices(Integer quantityFaceDice) {
        this.quantityFaceDice = quantityFaceDice;
    }

}

