package Crowdfunding.po;

import java.util.HashSet;
import java.util.Set;

public class Types {

	Integer tid;
	String name;
	Set<Project> myProject = new HashSet<Project>();
	public Types(Integer tid, String name) {
		super();
		this.tid = tid;
		this.name = name;
	}
	public Types() {
		super();
	}
	public Integer getTid() {
		return tid;
	}
	public void setTid(Integer tid) {
		this.tid = tid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public Set<Project> getMyProject() {
		return myProject;
	}
	public void setMyProject(Set<Project> myProject) {
		this.myProject = myProject;
	}
}
