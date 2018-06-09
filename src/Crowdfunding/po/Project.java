package Crowdfunding.po;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class Project {

	Integer pid;  
	Integer uid;  //用户主键
	Integer tid;  //类别主键
	String title;
	String texts;
	String maincontent; 
	Double money;
	Date releasedate;
	User user;
	Types types;
	Set<Comment> com = new HashSet<Comment>();
	Set<Fund> fund = new HashSet<Fund>();
	public Project(Integer uid, Integer tid, String title, String texts, String maincontent,
			Date releasedate) {
		super();
		this.uid = uid;
		this.tid = tid;
		this.title = title;
		this.texts = texts;
		this.maincontent = maincontent;
		this.releasedate = releasedate;
	}
	
	public Project(Integer uid, Integer tid, String title, String texts, String maincontent, Double money,
			Date releasedate) {
		super();
		this.uid = uid;
		this.tid = tid;
		this.title = title;
		this.texts = texts;
		this.maincontent = maincontent;
		this.money = money;
		this.releasedate = releasedate;
	}

	public Project() {
		super();
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
	public Integer getTid() {
		return tid;
	}
	public void setTid(Integer tid) {
		this.tid = tid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getTexts() {
		return texts;
	}
	public void setTexts(String texts) {
		this.texts = texts;
	}
	public String getMaincontent() {
		return maincontent;
	}
	public void setMaincontent(String maincontent) {
		this.maincontent = maincontent;
	}
	public Date getReleasedate() {
		return releasedate;
	}
	public void setReleasedate(Date releasedate) {
		this.releasedate = releasedate;
	}
	public Set<Comment> getCom() {
		return com;
	}
	public void setCom(Set<Comment> com) {
		this.com = com;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Types getTypes() {
		return types;
	}
	public void setTypes(Types types) {
		this.types = types;
	}

	public Double getMoney() {
		return money;
	}

	public void setMoney(Double money) {
		this.money = money;
	}

	public Set<Fund> getFund() {
		return fund;
	}

	public void setFund(Set<Fund> fund) {
		this.fund = fund;
	}
	
	

	
	
}
