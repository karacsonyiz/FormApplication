package com.ksh.formdemo.Controller;

import java.util.List;

import com.ksh.formdemo.Service.Response;
import com.ksh.formdemo.model.Section;
import com.ksh.formdemo.Service.UserService;
import com.ksh.formdemo.model.Answer;
import com.ksh.formdemo.model.User;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.ksh.formdemo.Service.FormService;
import com.ksh.formdemo.model.Form;

@RestController
public class FormController {
	
	private FormService formService;
	private UserService userService;
	
	public FormController(FormService formService, UserService userService ) {
		this.formService = formService;
		this.userService = userService;
	}
	
	@RequestMapping(value = "/api/forms", method = RequestMethod.GET)
	public List<Form> listForms() {
		return formService.listForms();
	}
	@RequestMapping(value = "/api/createanswer", method = RequestMethod.POST)
	public Response createAnswer(@RequestBody Answer answer) {
		User user = getAuthenticatedUser();
		if(user == null){
			return  new Response(false,"You are not logged in!");
		} else {
			return formService.createAnswer(answer,user.getId());
		}
	}

	@RequestMapping(value = "/api/getsection/{id}", method = RequestMethod.GET)
	public Section findProductById(@PathVariable String id){
		return formService.getSection(id);
	}

	@RequestMapping(value = "/api/createform", method = RequestMethod.POST)
	public Response createForm(@RequestBody Form form) {
		User user = getAuthenticatedUser();
		if(user == null){
			return  new Response(false,"Csak bejelentkezett felhasználó kezdhet új Kérdőivet!");
		} else {
			formService.createForm(form,user.getId());
			return  new Response(true,"Sikeres Kérdőiv kreálás!");
		}
	}

	@RequestMapping(value = "/api/createdata", method = RequestMethod.POST)
	public void createData(@RequestBody String data) {
		formService.createData(data);
	}

	@RequestMapping(value= "/api/userforms", method = RequestMethod.GET)
	public List<Form> listFormsByUserId() {
		User user = getAuthenticatedUser();
		return formService.listFormsByUserId(user.getId());
	}

	private User getAuthenticatedUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if(authentication == null || authentication instanceof AnonymousAuthenticationToken) {
			return null;
		}
		User user = userService.findUserByUserName(authentication.getName()).get();
		return user;
	}
}
