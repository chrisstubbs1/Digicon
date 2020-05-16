package com.chrisstubbs.digiconapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.UUID;

@Entity
public class DigiconUser {

    //private fields////////////////////////////////////////////////////////////////////////////////////////////////////
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private String emailAddress;
    private String birthday;
    private String gender;

    @JsonProperty("id")
    @Id
    private UUID id;
    @JsonProperty("accountCreationDate")
    String accountCreationDate;

    //constructors//////////////////////////////////////////////////////////////////////////////////////////////////////
    public DigiconUser() {

    }

    public DigiconUser(@JsonProperty("firstName") String firstName,
                       @JsonProperty("lastName") String lastName,
                       @JsonProperty("userName") String userName,
                       @JsonProperty("emailAddress") String emailAddress,
                       @JsonProperty("birthday") String birthday,
                       @JsonProperty("gender") String gender,
                       @JsonProperty("password") String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.birthday = birthday;
        this.gender = gender;
        this.password = password;
        //Generates a random UUID upon object creation
        this.id = UUID.randomUUID();
        //Generates the time of account creation date
        this.accountCreationDate = LocalDate.now().toString().concat(" " + LocalTime.now().toString());
    }

    //getter methods////////////////////////////////////////////////////////////////////////////////////////////////////
    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getBirthday() {
        return birthday;
    }

    public String getGender() {
        return gender;
    }

    public UUID getId() {
        return id;
    }

    public String getAccountCreationDate() {
        return accountCreationDate;
    }

    //setter methods////////////////////////////////////////////////////////////////////////////////////////////////////

    public void setId(UUID id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setAccountCreationDate(String accountCreationDate) {
        this.accountCreationDate = accountCreationDate;
    }
}
