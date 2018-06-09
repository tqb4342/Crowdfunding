package Crowdfunding.po;

import java.util.HashSet;
import java.util.Set;

public class User {

	Integer uid;
	String account;
	String username;
	String password;
	String number;
	String flag;
	Set<Project> project = new HashSet<Project>();
	Set<Comment> com = new HashSet<Comment>();
	Set<Fund> fund = new HashSet<Fund>();
	
//	public User(Integer uid, String account, String username, String password, String number) {
//		super();
//		this.uid = uid;
//		this.account = account;
//		this.username = username;
//		this.password = password;
//		this.number = number;
//	}
	
	public User(Integer uid, String account, String username, String password, String number, String flag) {
		super();
		this.uid = uid;
		this.account = account;
		this.username = username;
		this.password = password;
		this.number = number;
		this.flag = flag;
	}

	public User() {
		super();
	}
	public Integer getUid() {
		return uid;
	}
	public void setUid(Integer uid) {
		this.uid = uid;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public Set<Project> getProject() {
		return project;
	}
	public void setProject(Set<Project> project) {
		this.project = project;
	}
	public Set<Comment> getCom() {
		return com;
	}
	public void setCom(Set<Comment> com) {
		this.com = com;
	}
	
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}

	public Set<Fund> getFund() {
		return fund;
	}

	public void setFund(Set<Fund> fund) {
		this.fund = fund;
	}

	@Override
	public String toString() {
		return "User [uid=" + uid + ", account=" + account + ", username=" + username + ", password=" + password
				+ ", number=" + number + ", flag=" + flag + "]";
	}
	
	
	
	
}
