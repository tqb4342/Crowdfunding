package Crowdfunding.service.util;

import Crowdfunding.dao.CommentDao;
import Crowdfunding.dao.FundDao;
import Crowdfunding.dao.ProjectDao;
import Crowdfunding.dao.TypesDao;
import Crowdfunding.dao.UserDao;


public class ManagerTemplate implements java.io.Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	protected CommentDao commentDao;
	protected ProjectDao projectDao;
	protected TypesDao typesDao;
	protected UserDao userDao;
	protected FundDao fundDao;
	public CommentDao getCommentDao() {
		return commentDao;
	}
	public void setCommentDao(CommentDao commentDao) {
		this.commentDao = commentDao;
	}
	public ProjectDao getProjectDao() {
		return projectDao;
	}
	public void setProjectDao(ProjectDao projectDao) {
		this.projectDao = projectDao;
	}
	
	public UserDao getUserDao() {
		return userDao;
	}
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	public TypesDao getTypesDao() {
		return typesDao;
	}
	public void setTypesDao(TypesDao typesDao) {
		this.typesDao = typesDao;
	}
	public FundDao getFundDao() {
		return fundDao;
	}
	public void setFundDao(FundDao fundDao) {
		this.fundDao = fundDao;
	}
	
	
	

	
	

	
}
