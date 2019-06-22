package com.ksh.formdemo.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
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

	public void createForm(Form form) {
		 formDao.createForm(form);
	}

	public Section getSection(String id) {
		return formDao.getSection(id);
	}

	public void createData(String data) {
		String a = "<div class=\"question-card-body\" data-order=\"1\" style=\"display:block\">\n" +
				"                                <div class=\"card-item C1-body\">\n" +
				"                                    <div class=\"question-header C1-question-header mb-5\">\n" +
				"                                        <h2>Hord-e Ön szemüveget vagy kontaktlencsét?</h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"C1-answer-div answerdiv\">\n" +
				"                                        <select name=\"PL1\" id=\"PL1\" class=\"form-control\" data-id=\"PL1\">\n" +
				"                                            <option selected disabled hidden style=\"display: none\">válasszon</option>\n" +
				"                                            <option value=\"1\">igen</option>\n" +
				"                                            <option value=\"2\">nem</option>\n" +
				"                                            <option value=\"3\">vak vagy egyáltalán nem lát</option>\n" +
				"                                            <option value=\"8\">nem tudom</option>\n" +
				"                                            <option value=\"9\">nem kívánok válaszolni</option>\n" +
				"                                        </select>\n" +
				"                                    </div>\n" +
				"                                </div>\n" +
				"                                <div class=\"card-item C2-body\">\n" +
				"                                    <div class=\"question-header C2-question-header mb-5\" id=\"1-PL2\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek tisztán, élesen látni szemüveg vagy kontaktlencse\n" +
				"                                            segítségével?</h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"question-header C2-question-header mb-5\" id=\"2-PL2\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek tisztán, élesen látni?</h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"C2-answer-div answerdiv\">\n" +
				"                                        <select name=\"PL2\" id=\"PL2\" class=\"form-control\" data-id=\"PL2\">\n" +
				"                                            <option selected disabled hidden style=\"display: none\">válasszon</option>\n" +
				"                                            <option value=\"1\">nem okoz nehézséget</option>\n" +
				"                                            <option value=\"2\">kisebb nehézséget okoz</option>\n" +
				"                                            <option value=\"3\">nagy nehézséget okoz</option>\n" +
				"                                            <option value=\"4\">egyáltalán nem lát élesen</option>\n" +
				"                                            <option value=\"8\">nem tudom</option>\n" +
				"                                            <option value=\"9\">nem kívánok válaszolni</option>\n" +
				"                                        </select>\n" +
				"                                    </div>\n" +
				"                                </div>\n" +
				"                                <div class=\"C1-card-footer my-5 rounded p-3\">\n" +
				"                                    <h3 id=\"hint-C1\"></h3>\n" +
				"                                </div>\n" +
				"                            </div>\n" +
				"                            <div class=\"question-card-body\" data-order=\"2\" style=\"display:none\">\n" +
				"                                <div class=\"card-item C3-body\">\n" +
				"                                    <div class=\"question-header C3-question-header mb-5\">\n" +
				"                                        <h2>Használ-e Ön hallókészüléket?</h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"C3-answer-div answerdiv\">\n" +
				"                                        <select name=\"PL3\" id=\"PL3\" class=\"form-control\" data-id=\"PL3\">\n" +
				"                                            <option selected disabled hidden style=\"display: none\">válasszon</option>\n" +
				"                                            <option value=\"1\">igen</option>\n" +
				"                                            <option value=\"2\">nem</option>\n" +
				"                                            <option value=\"3\">teljesen siket</option>\n" +
				"                                            <option value=\"8\">nem tudom</option>\n" +
				"                                            <option value=\"9\">nem kívánok válaszolni</option>\n" +
				"                                        </select>\n" +
				"                                    </div>\n" +
				"                                </div>\n" +
				"                                <div class=\"card-item C4-body\">\n" +
				"                                    <div class=\"question-header C4-question-header mb-5\" id=\"4-1-PL3\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek, hogy jól hallja beszélgetőpartnerét egy csendes\n" +
				"                                            szobában\n" +
				"                                            még hallókészülék\n" +
				"                                            segítségével is?</h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"question-header C4-question-header mb-5\" id=\"4-2-PL3\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek, hogy jól hallja beszélgetőpartnerét egy csendes\n" +
				"                                            szobában?\n" +
				"                                        </h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"C4-answer-div answerdiv\">\n" +
				"                                        <select name=\"PL4\" id=\"PL4\" class=\"form-control\" data-id=\"PL4\">\n" +
				"                                            <option selected disabled hidden style=\"display: none\">válasszon</option>\n" +
				"                                            <option value=\"1\">nem okoz nehézséget</option>\n" +
				"                                            <option value=\"2\">kisebb nehézséget okoz</option>\n" +
				"                                            <option value=\"3\">nagy nehézséget okoz</option>\n" +
				"                                            <option value=\"4\">egyáltalán nem hallja jól</option>\n" +
				"                                            <option value=\"8\">nem tudom</option>\n" +
				"                                            <option value=\"9\">nem kívánok válaszolni</option>\n" +
				"                                        </select>\n" +
				"                                    </div>\n" +
				"                                </div>\n" +
				"\n" +
				"                                <div class=\"card-item C5-body\">\n" +
				"                                    <div class=\"question-header C5-question-header mb-5\" id=\"5-1-PL3\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek, hogy jól hallja beszélgetőpartnerét egy zajosabb\n" +
				"                                            szobában\n" +
				"                                            még hallókészülék\n" +
				"                                            segítségével is?</h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"question-header C5-question-header mb-5\" id=\"5-2-PL3\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek, hogy jól hallja beszélgetőpartnerét egy zajosabb\n" +
				"                                            szobában?\n" +
				"                                        </h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"C5-answer-div answerdiv\">\n" +
				"                                        <select name=\"PL5\" id=\"PL5\" class=\"form-control\" data-id=\"PL5\">\n" +
				"                                            <option selected disabled hidden style=\"display: none\">válasszon</option>\n" +
				"                                            <option value=\"1\">nem okoz nehézséget</option>\n" +
				"                                            <option value=\"2\">kisebb nehézséget okoz</option>\n" +
				"                                            <option value=\"3\">nagy nehézséget okoz</option>\n" +
				"                                            <option value=\"4\">egyáltalán nem hallja jól</option>\n" +
				"                                            <option value=\"8\">nem tudom</option>\n" +
				"                                            <option value=\"9\">nem kívánok válaszolni</option>\n" +
				"                                        </select>\n" +
				"                                    </div>\n" +
				"                                </div>\n" +
				"                            </div>\n" +
				"\n" +
				"                            <div class=\"question-card-body C6-body\" data-order=\"3\" style=\"display:none\">\n" +
				"                                <div class=\"card-item\">\n" +
				"\n" +
				"                                    <div class=\"question-header C6-question-header mb-5\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek 500 métert gyalgolni sík területen segédeszköz vagy\n" +
				"                                            személyes segítség nélkül?\n" +
				"                                        </h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"C6-answer-div answerdiv\">\n" +
				"                                        <select name=\"PL6\" id=\"PL6\" class=\"form-control\" data-id=\"PL6\">\n" +
				"                                            <option value=\"\" selected=\"selected\" hidden=\"hidden\">Kérem válasszon!\n" +
				"                                            </option>\n" +
				"                                            <option value=\"1\">nem okoz nehézséget</option>\n" +
				"                                            <option value=\"2\">kisebb nehézséget okoz</option>\n" +
				"                                            <option value=\"3\">nagy nehézséget okoz</option>\n" +
				"                                            <option value=\"4\">egyáltalán nem képes rá</option>\n" +
				"                                            <option value=\"8\">nem tudom</option>\n" +
				"                                            <option value=\"9\">nem kívánok válaszolni</option>\n" +
				"                                        </select>\n" +
				"                                    </div>\n" +
				"                                </div>\n" +
				"\n" +
				"                            </div>\n" +
				"                            <div class=\"question-card-body C7-body\" data-order=\"7\" style=\"display:none\">\n" +
				"\n" +
				"                                <div class=\"card-item\">\n" +
				"                                    <div class=\"question-header C7-question-header mb-5\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek le- vagy felmenni 12 lépcsőfokon?</h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"C7-answer-div answerdiv\">\n" +
				"                                        <select name=\"PL7\" id=\"PL7\" class=\"form-control\" data-id=\"PL7\">\n" +
				"                                            <option value=\"\" selected=\"selected\" hidden=\"hidden\">Kérem válasszon!\n" +
				"                                            </option>\n" +
				"                                            <option value=\"1\">nem okoz nehézséget</option>\n" +
				"                                            <option value=\"2\">kisebb nehézséget okoz</option>\n" +
				"                                            <option value=\"3\">nagy nehézséget okoz</option>\n" +
				"                                            <option value=\"4\">egyáltalán nem képes rá</option>\n" +
				"                                            <option value=\"8\">nem tudom</option>\n" +
				"                                            <option value=\"9\">nem kívánok válaszolni</option>\n" +
				"                                        </select>\n" +
				"                                    </div>\n" +
				"                                </div>\n" +
				"\n" +
				"                            </div>\n" +
				"                            <div class=\"question-card-body C8-body\" data-order=\"8\" style=\"display:none\">\n" +
				"                                <div class=\"card-item\">\n" +
				"\n" +
				"                                    <div class=\"question-header C8-question-header mb-5\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek az emlékezés vagy a koncentrálás?</h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"C8-answer-div answerdiv\">\n" +
				"                                        <select name=\"PL8\" id=\"PL8\" class=\"form-control\" data-id=\"PL8\">\n" +
				"                                            <option value=\"\" selected=\"selected\" hidden=\"hidden\">Kérem válasszon!\n" +
				"                                            </option>\n" +
				"                                            <option value=\"1\">nem okoz nehézséget</option>\n" +
				"                                            <option value=\"2\">kisebb nehézséget okoz</option>\n" +
				"                                            <option value=\"3\">nagy nehézséget okoz</option>\n" +
				"                                            <option value=\"4\">egyáltalán nem képes rá</option>\n" +
				"                                            <option value=\"8\">nem tudom</option>\n" +
				"                                            <option value=\"9\">nem kívánok válaszolni</option>\n" +
				"                                        </select>\n" +
				"                                    </div>\n" +
				"\n" +
				"                                </div>\n" +
				"                            </div>\n" +
				"                            <div class=\"question-card-body C9-body\" data-order=\"9\" style=\"display:none\">\n" +
				"\n" +
				"                                <div class=\"card-item\">\n" +
				"                                    <div class=\"question-header C9-question-header mb-5\">\n" +
				"                                        <h2>Nehézséget okoz-e Önnek kemény ételre (pl. friss almára) ráharapni vagy azt\n" +
				"                                            megrágni?</h2>\n" +
				"                                    </div>\n" +
				"                                    <div class=\"C9-answer-div answerdiv\">\n" +
				"                                        <select name=\"PL9\" id=\"PL9\" class=\"form-control\" data-id=\"PL9\">\n" +
				"                                            <option value=\"\" selected=\"selected\" hidden=\"hidden\">Kérem válasszon!\n" +
				"                                            </option>\n" +
				"                                            <option value=\"1\">nem okoz nehézséget</option>\n" +
				"                                            <option value=\"2\">kisebb nehézséget okoz</option>\n" +
				"                                            <option value=\"3\">nagy nehézséget okoz</option>\n" +
				"                                            <option value=\"4\">egyáltalán nem képes rá</option>\n" +
				"                                            <option value=\"8\">nem tudom</option>\n" +
				"                                            <option value=\"9\">nem kívánok válaszolni</option>\n" +
				"                                        </select>\n" +
				"                                    </div>\n" +
				"                                </div>\n" +
				"\n" +
				"                            </div>";
		//System.out.println(a);


			Section dsection = new Section("C","KORLÁTOZOTTSÁG","A következő kérdések az Ön általános fizikai állapotára fognak vonatkozni, azzal\n" +
					"                            összefüggésben, hogy ez mennyire befolyásolja az Ön mindennapi tevékenységeit. Kérem, hogy\n" +
					"                            tartós problémákra gondoljon, átmeneti problémákat ne vegyen figyelembe!" +
					"                            ezekről a tevékenységekről. Ismét megkérem, ne pillanatnyi, hanem tartós problémákra\n" +
					"                            gondoljon!",a);
		//System.out.println(dsection.toString());
		formDao.createSection(dsection);
	}

	public List<Form> listFormsByUserId(long userId) {
		return formDao.listFormsByUserId(userId);
	}
}
