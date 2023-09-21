package com.rdeconti.game.config;

public class Utilities {
    public int RollDice(int DiceQuantity, int DiceFaces){

        int diceRollsResult = 0;

        for (int index = 0; index < DiceQuantity; index++) {
            diceRollsResult += (int) (Math.random() * DiceFaces) + 1;
        }

        return diceRollsResult;
    }

    public String WhoStartGame(){

        int characterResult = RollDice(1,20);
        int opponentResult = RollDice(1,20);

        while (characterResult == opponentResult) {
            characterResult = RollDice(1,20);
            opponentResult = RollDice(1,20);
        }

        if (characterResult > opponentResult) {
            return "Character";
        } else {
            return "Opponent";
        }
    }

    public Integer CalculateAttack( int NumberPointsStrength, int NumberPointsAgility ) {

        int resultRollDice = RollDice(1,12);
        return resultRollDice + NumberPointsStrength + NumberPointsAgility;

    }

    public Integer CalculateDefense( int NumberPointsDefense, int NumberPointsAgility ) {

        int resultRollDice = RollDice(1,12);
        return resultRollDice + NumberPointsDefense + NumberPointsAgility;

    }

    public Integer CalculateDamage(
            int calculatedDefense,
            int calculatedAttack,
            int NumberPointsStrength,
            int diceQuantity,
            int diceFaces) {

        if ( calculatedDefense >= calculatedAttack ) {
            return 0;
        }

        int resultRollDice = RollDice(diceQuantity, diceFaces);
        return resultRollDice + NumberPointsStrength;

    }

    public Integer CalculateLivePoints( int CalculatedDamage, int NumberPointsLive) {

        return NumberPointsLive - CalculatedDamage;

    }

}
