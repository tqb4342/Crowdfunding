package Crowdfunding.po;

import java.util.Date;

public class Comment {

	Integer cid;
	Integer pid;  //项目id
	Integer uid;  //用户id
	String ptext;
	Date pdate;
	String reply;
	Date replydate;
	User user;
	Project project;
	public Comment(Integer pid, Integer uid, String ptext, Date pdate) {
		super();
		this.pid = pid;
		this.uid = uid;
		this.ptext = ptext;
		this.pdate = pdate;
	}
	public Comment() {
		super();
	}
	public Integer getCid() {
		return cid;
	}
	public void setCid(Integer cid) {
		this.cid = cid;
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
	public String getPtext() {
		return ptext;
	}
	public void setPtext(String ptext) {
		this.ptext = ptext;
	}
	public Date getPdate() {
		return pdate;
	}
	public void setPdate(Date pdate) {
		this.pdate = pdate;
	}
	public String getReply() {
		return reply;
	}
	public void setReply(String reply) {
		this.reply = reply;
	}
	public Date getReplydate() {
		return replydate;
	}
	public void setReplydate(Date replydate) {
		this.replydate = replydate;
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
	
	
	
}
