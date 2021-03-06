package com.ksh.formdemo.model;

public class User {

    private long id;
    private String name;
    private String password;
    private int enabled;
    private UserRole role = UserRole.ROLE_USER;

    public User(String name) {
        this.name = name;
    }

    public User() {
    }

    public User(long id, String name, String password,int enabled, String role) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.enabled = enabled;
        this.role = UserRole.valueOf(role);
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPassword() {
        return password;
    }


    public String getRole() {
        return role.name();
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole(String role) {
        this.role = UserRole.valueOf(role);
    }

    public int getEnabled() {
        return enabled;
    }

    public void setEnabled(int enabled) {
        this.enabled = enabled;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}
