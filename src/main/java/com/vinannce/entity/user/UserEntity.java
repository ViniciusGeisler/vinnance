package com.vinannce.entity.user;

import com.vinannce.usecases.dto.user.UserRequestDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Table(name = "user")
@Entity(name = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class UserEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String sobrenome;
    private String email;
    private String password;
    @Column(name = "initial_income", precision = 2)
    private BigDecimal initial_income = new BigDecimal(0);
    private LocalDateTime created_at;
    private LocalDateTime updated_at;

    public UserEntity(UserRequestDTO data) {
        this.nome = data.getNome();
        this.sobrenome = data.getSobrenome();
        this.email = data.getEmail();
        this.password = data.getPassword();
        this.initial_income = data.getInitial_income();
        this.created_at = LocalDateTime.now();
    }


}
