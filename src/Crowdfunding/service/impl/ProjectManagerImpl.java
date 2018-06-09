package Crowdfunding.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import Crowdfunding.po.Project;
import Crowdfunding.service.ProjectManager;
import Crowdfunding.service.util.ManagerTemplate;
import Crowdfunding.service.util.Search;

public class ProjectManagerImpl extends ManagerTemplate implements ProjectManager {

	
	

	@Override
	public List<Project> findAll() {
		// TODO Auto-generated method stub
		return this.getProjectDao().findAll();
	}

	@Override
	public Project getById(int pid) {
		// TODO Auto-generated method stub
		System.out.println(pid);
		System.out.println(this.getProjectDao().getById(pid));
		return this.getProjectDao().getById(pid);
	}

	@Override
	public void save(int uid, int tid, String title,String text, String maincontents) {
		// TODO Auto-generated method stub
		Date date = new Date();
		if(maincontents.length()>40){
			maincontents = maincontents.substring(0, 40);
		}
		Project project = new Project(uid,tid,title,text,maincontents,date);
		this.getProjectDao().save(project);
	}

	@Override
	public List<Project> getByName(String title) {
		List<Project> list = this.getProjectDao().findAll();
		List<Project> list1 = new ArrayList<Project>();
		for(Project b:list){
			if(Search.search_title(b.getTitle(),title)){
				list1.add(b);
			}
		}
		return list1;
	}

	@Override
	public boolean isExist(String title) {
		List<Project> list = this.getProjectDao().findAll();
		boolean flag = false;
	
		for(Project b:list){
			if(!flag){
				if(Search.search_title(b.getTitle(),title)){
					flag = true;
				}
			}
		}
		
		return flag;
	}

	@Override
	public void updata(int pid, int tid, String title, String text, String maincontents) {
		// TODO Auto-generated method stub
		Project project = this.getProjectDao().getById(pid);
		if(maincontents.length()>40){
			maincontents = maincontents.substring(0, 40);
		}
		project.setTid(tid);
		project.setTitle(title);
		project.setTexts(text);
		project.setMaincontent(maincontents);
		this.getProjectDao().updata(project);
	}

	@Override
	public void deleteProject(int pid) {
		// TODO Auto-generated method stub
		Project pro = this.getProjectDao().getById(pid);
		if(pro!=null){
			this.getProjectDao().delete(pro);
		}
	}

}
