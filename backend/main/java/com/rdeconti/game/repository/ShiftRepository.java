package com.rdeconti.game.repository;

import com.rdeconti.game.model.ShiftModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShiftRepository extends JpaRepository<ShiftModel, Integer> {
}
