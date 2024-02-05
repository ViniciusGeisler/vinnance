package com.vinannce.usecases.dto.user;

import com.vinannce.entity.user.UserEntity;
import jakarta.persistence.Column;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class UserDTO {
    private Long id;
    private String nome;
    private String sobrenome;
    private String email;
    private String password;
    private BigDecimal initial_income;
    private LocalDateTime created_at;

    public UserDTO(UserEntity user) {
        this.id = user.getId();
        this.nome = user.getNome();
        this.sobrenome = user.getSobrenome();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.initial_income = user.getInitial_income();
        this.created_at = user.getCreated_at();
    }
}
