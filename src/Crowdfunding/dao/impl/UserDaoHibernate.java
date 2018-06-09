package Crowdfunding.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import Crowdfunding.dao.UserDao;
import Crowdfunding.po.User;

public class UserDaoHibernate extends HibernateDaoSupport implements UserDao {

	@Override
	public void save(User user) {
		// TODO Auto-generated method stub
		getHibernateTemplate().save(user);
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		getHibernateTemplate().update(user);
	}

	@Override
	public void delete(User user) {
		// TODO Auto-generated method stub
		getHibernateTemplate().delete(user);
	}

	@Override
	public User get(String count) {
		String hql = "from User where account = '"+count+"'";
		@SuppressWarnings("unchecked")
		List<User> list = getHibernateTemplate().find(hql);
		if(list.size()>0){
			return list.get(0);
		}
		return null;
	}

	@Override
	public User getById(int uid) {
		// TODO Auto-generated method stub
		return getHibernateTemplate().get(User.class, uid);
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return (List<User>)getHibernateTemplate().find("from User");
	}

}
