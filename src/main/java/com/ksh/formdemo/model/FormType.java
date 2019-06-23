package com.ksh.formdemo.model;

import java.time.LocalDateTime;

public class FormType {

    private String id;
    private String name;
    private String osap_num;

    public FormType() {
    }

    public FormType(String id, String name, String osap_num) {
        this.id = id;
        this.name = name;
        this.osap_num = osap_num;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOsap_num() {
        return osap_num;
    }

    public void setOsap_num(String osap_num) {
        this.osap_num = osap_num;
    }

}


