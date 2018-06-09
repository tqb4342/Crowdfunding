package Crowdfunding.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import Crowdfunding.po.User;



public interface UserManager {

	/*
	 * 判断用户是否存在
	 */
	boolean existUser(String count);
	
	/*
	 * 创建新用户
	 */
	void insert(User user);
	
	/*
	 * 用户登录
	 * 
	 */
	boolean login(String account,String password,HttpSession session);
	/*
	 * 获取session值
	 */
	public User checkSession(HttpSession session);
	
	
	public User getById(int uid);
	
	
	/*
	 * 让session失效
	 * 
	 */
	public void quit(HttpSession session);
	
	public void update(User user);
	
	public void updataFlag(int uid);
	
	public List<User> findAll();
	
	public void deleteUser(int uid);
	
}
