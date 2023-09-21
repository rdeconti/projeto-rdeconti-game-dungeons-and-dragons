package com.rdeconti.game.repository;

import com.rdeconti.game.model.CharacterModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterRepository extends JpaRepository<CharacterModel, Integer > {
}
