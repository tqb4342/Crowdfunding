package Crowdfunding.service;

import java.util.List;

import Crowdfunding.po.Project;

public interface ProjectManager {

	public void save(int uid,int tid,String title,String text,String maincontents);
	
	public List<Project> findAll();
	
	public Project getById(int pid);
	
	public List<Project> getByName(String title);
	
	public boolean isExist(String title);
	
	public void updata(int pid,int tid,String title,String text,String maincontents);
	
	public void deleteProject(int pid);
	
}
