package Crowdfunding.po;

import java.util.Date;

public class Fund {

	Integer fid;
	Integer pid;  //项目id
	Integer uid;  //用户id
	Double money;
	Date date;
	User user;
	Project project;
	public Fund(Integer fid, Integer pid, Integer uid, Double money) {
		super();
		this.fid = fid;
		this.pid = pid;
		this.uid = uid;
		this.money = money;
	}
	
	public Fund(Integer pid, Integer uid, Double money) {
		super();
		this.pid = pid;
		this.uid = uid;
		this.money = money;
	}

	public Fund(Integer pid, Integer uid, Double money, Date date) {
		super();
		this.pid = pid;
		this.uid = uid;
		this.money = money;
		this.date = date;
	}

	public Fund() {
		super();
	}

	public Integer getFid() {
		return fid;
	}
	public void setFid(Integer fid) {
		this.fid = fid;
	}
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public Integer getUid() {
		return uid;
	}
	public void setUid(Integer uid) {
		this.uid = uid;
	}
	public Double getMoney() {
		return money;
	}
	public void setMoney(Double money) {
		this.money = money;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Project getProject() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	
}
