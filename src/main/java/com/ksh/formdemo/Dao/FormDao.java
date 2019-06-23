package com.ksh.formdemo.Dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import com.ksh.formdemo.Service.Section;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.ksh.formdemo.model.Form;

@Repository
public class FormDao {
	
	private JdbcTemplate jdbcTemplate;
	
	public FormDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public void createData(String data) {
		jdbcTemplate.update(connection -> {
			PreparedStatement ps = connection.prepareStatement("insert into data(data) values(?)");
			ps.setString(1, data);
			return ps;
		});
	}

	public void createSection(Section section) {
		jdbcTemplate.update(connection -> {
			PreparedStatement ps = connection.prepareStatement("insert into form_section(id,name,meta,bodytext) values(?,?,?,?)");
			ps.setString(1, section.getId());
			ps.setString(2, section.getName());
			ps.setString(3, section.getMeta());
			ps.setString(4, section.getBodytext());
			return ps;
		});
	}

	public Section getSection(String id){
		return jdbcTemplate.queryForObject("SELECT id, name, meta, bodytext FROM form_section where id = ?",new SectionMapper(),id);
	}

	public void createForm(Form form) {
		String uuid = UUID.randomUUID().toString();
		jdbcTemplate.update(connection -> {
			PreparedStatement ps = connection.prepareStatement("insert into form(id,userid,osap_num,start_date,end_date) values(?,?,?,?,?)");
			ps.setString(1, uuid);
			ps.setInt(2, form.getUserid());
			ps.setString(3, form.getOsap_num());
			ps.setTimestamp(4, Timestamp.valueOf(form.getStart_date()));
			ps.setTimestamp(5, Timestamp.valueOf(form.getEnd_date()));
			return ps;
		});
	}
	

	public List<Form> listForms() {
		return jdbcTemplate.query(
				"SELECT id, userid, osap_num, start_date, end_date FROM form", new FormMapper());
	}

	public List<Form> listFormsByUserId(long userId){
		return jdbcTemplate.query(
				"SELECT form.id, form.userid, form.osap_num, form.start_date, form.end_date FROM form INNER JOIN userform on form.id = userform.form_id WHERE userform.user_id = ?", new FormMapper(),userId);
	}

	
	private static class FormMapper implements RowMapper<Form> {
		@Override
		public Form mapRow(ResultSet resultSet,int i) throws SQLException {
			String id = resultSet.getString("id");
			int userid = resultSet.getInt("userid");
			String osap_num = resultSet.getString("osap_num");
			LocalDateTime start_date = resultSet.getTimestamp("start_date").toLocalDateTime();
			LocalDateTime end_date = resultSet.getTimestamp("end_date").toLocalDateTime();
			return new Form(id,userid,osap_num,start_date,end_date);
		}
	}

	private static class SectionMapper implements RowMapper<Section> {
		@Override
		public Section mapRow(ResultSet resultSet,int i) throws SQLException {
			String id = resultSet.getString("id");
			String name = resultSet.getString("name");
			String meta = resultSet.getString("meta");
			String bodytext = resultSet.getString("bodytext");
			return new Section(id,name,meta,bodytext);
		}
	}


}
