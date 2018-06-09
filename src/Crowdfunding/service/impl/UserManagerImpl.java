package Crowdfunding.service.impl;



import java.util.List;

import javax.servlet.http.HttpSession;

import Crowdfunding.po.User;
import Crowdfunding.service.UserManager;
import Crowdfunding.service.util.ManagerTemplate;

public class UserManagerImpl extends ManagerTemplate implements UserManager {

	@Override
	public boolean existUser(String count) {
		User user = null;
		user =  this.getUserDao().get(count);
		if(user==null){
			return true;
		}
		return false;
	}

	@Override
	public void insert(User user) {
		System.out.println(user);
		this.getUserDao().save(user);
		
	}

	@Override
	public boolean login(String account, String password, HttpSession session) {
		User user = null;
		user =  this.getUserDao().get(account);
		if(user == null){
			return false;
		}
		if(user.getPassword().equals(password)&&user.getFlag().equals("1")){
			session.setAttribute("user", user);
			return true;
		}	
		return false;
	}


	public User checkSession(HttpSession session) {
		if (session.getAttribute("user") == null)
			return null;
		else
			return (User)session.getAttribute("user");
	}
	

	 @Override
    public void quit(HttpSession session) {
        session.invalidate();
    }

	@Override
	public User getById(int uid) {
		// TODO Auto-generated method stub
		return this.getUserDao().getById(uid);
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		User uu = this.getUserDao().get(user.getAccount());
		int uid = uu.getUid();
		user.setUid(uid);
		this.getUserDao().update(user);
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return this.getUserDao().findAll();
	}

	@Override
	public void deleteUser(int uid) {
		// TODO Auto-generated method stub
		User user = this.getUserDao().getById(uid);
		if(user!=null){
			this.getUserDao().delete(user);
		}
		
	}

	@Override
	public void updataFlag(int uid) {
		// TODO Auto-generated method stub
		User uu = this.getUserDao().getById(uid);
		uu.setFlag("1");
		this.getUserDao().update(uu);
	}



}
