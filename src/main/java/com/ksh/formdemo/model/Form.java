package com.ksh.formdemo.model;

import java.time.LocalDateTime;

public class Form {
	
	private String id;
	private String name;
	private String osap_num;
	private LocalDateTime start_date;
	private LocalDateTime end_date;

	public Form() {
	}

	public Form(String id, String name, String osap_num, LocalDateTime start_date, LocalDateTime end_date) {
		this.id = id;
		this.name = name;
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
	
	
