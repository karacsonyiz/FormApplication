package com.ksh.formdemo.model;

public class Section {

    private String id;
    private String name;
    private String meta;
    private String bodytext;

    public Section() {
    }

    public Section(String id, String name, String meta, String bodytext) {
        this.id = id;
        this.name = name;
        this.meta = meta;
        this.bodytext = bodytext;
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

    public String getMeta() {
        return meta;
    }

    public void setMeta(String meta) {
        this.meta = meta;
    }

    public String getBodytext() {
        return bodytext;
    }

    public void setBodytext(String bodytext) {
        this.bodytext = bodytext;
    }

    @Override
    public String toString() {
        return "Section{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", meta='" + meta + '\'' +
                ", bodytext='" + bodytext + '\'' +
                '}';
    }
}
