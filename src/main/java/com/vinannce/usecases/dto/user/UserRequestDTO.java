package com.vinannce.usecases.dto.user;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class UserRequestDTO {
    private String nome;
    private String sobrenome;
    private String email;
    private String password;
    private BigDecimal initial_income;
}
