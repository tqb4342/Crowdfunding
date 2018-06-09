package Crowdfunding.dao;

import java.util.List;

import Crowdfunding.po.Project;

public interface ProjectDao {

	public void save(Project project);
	
	public List<Project> findAll();
	
	public Project getById(int pid);
	
	public void updata(Project project);
	
	public void delete(Project project);
}
