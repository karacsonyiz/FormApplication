package com.ksh.formdemo.model;

import java.time.LocalDateTime;

public class Form {
	
	private String id;
	private int userid;
	private String osap_num;
	private LocalDateTime start_date;
	private LocalDateTime end_date;

	public Form() {
	}

	public Form(String id, int userid, String osap_num, LocalDateTime start_date, LocalDateTime end_date) {
		this.id = id;
		this.userid = userid;
		this.osap_num = osap_num;
		this.start_date = start_date;
		this.end_date = end_date;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getOsap_num() {
		return osap_num;
	}

	public void setOsap_num(String osap_num) {
		this.osap_num = osap_num;
	}

	public LocalDateTime getStart_date() {
		return start_date;
	}

	public void setStart_date(LocalDateTime start_date) {
		this.start_date = start_date;
	}

	public LocalDateTime getEnd_date() {
		return end_date;
	}

	public void setEnd_date(LocalDateTime end_date) {
		this.end_date = end_date;
	}
}
	
	
