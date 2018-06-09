package Crowdfunding.dao;

import java.util.List;

import Crowdfunding.po.User;

public interface UserDao {

	User get(String count);
	
	void save(User user);

	void update(User user);

	void delete(User user);
	
	User getById(int uid);
	
	public List<User> findAll();
	
}
