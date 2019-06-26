package com.ksh.formdemo.model;

public class Answer {

    private long id;
    private String form_id;
    private long userId;
    private String answertext;
    private String usertext;

    public Answer() {
    }

    public Answer(long id, String form_id, long userId, String answertext, String usertext) {
        this.id = id;
        this.form_id = form_id;
        this.userId = userId;
        this.answertext = answertext;
        this.usertext = usertext;
    }

    public Answer(String form_id, String answertext, String usertext) {
        this.form_id = form_id;
        this.answertext = answertext;
        this.usertext = usertext;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getForm_id() {
        return form_id;
    }

    public void setForm_id(String form_id) {
        this.form_id = form_id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getAnswertext() {
        return answertext;
    }

    public void setAnswertext(String answertext) {
        this.answertext = answertext;
    }

    public String getUsertext() {
        return usertext;
    }

    public void setUsertext(String usertext) {
        this.usertext = usertext;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "id=" + id +
                ", form_id='" + form_id + '\'' +
                ", userId=" + userId +
                ", answertext='" + answertext + '\'' +
                ", usertext='" + usertext + '\'' +
                '}';
    }
}
