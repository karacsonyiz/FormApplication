package com.ksh.formdemo.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.ksh.formdemo.model.Answer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.ksh.formdemo.Dao.FormDao;
import com.ksh.formdemo.model.Form;

import org.json.*;



@Service
public class FormService {
	
	private FormDao formDao;
	public static final Logger LOGGER = LoggerFactory.getLogger(FormService.class);
	
	public FormService(FormDao formDao) {
		this.formDao = formDao;
	}
	
	public List<Form> listForms() {
		return formDao.listForms();
	}

	public Response createForm(Form form,long  userId) {

		LOGGER.warn(form.getOsap_num() + " form created by" + form.getUserid() + "at :" + form.getStart_date());
	    formDao.createForm(form,userId);

		return new Response(true,"Sikeres Kérdőiv kreálás!");
	}

	public Response createAnswer(Answer answer, long userId) {
		LOGGER.info(answer.toString());
		return formDao.createAnswer(answer,userId);
	}

	public Section getSection(String id) {
		return formDao.getSection(id);
	}

	public void createData(String data) {
		formDao.createData(data);
	}

	public List<Form> listFormsByUserId(long userId) {
		return formDao.listFormsByUserId(userId);
	}
}
