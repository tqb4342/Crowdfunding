package Crowdfunding.dao.impl;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import Crowdfunding.dao.CommentDao;
import Crowdfunding.po.Comment;

public class CommentDaoHibernate extends HibernateDaoSupport implements CommentDao {

	@Override
	public void save(Comment com) {
		// TODO Auto-generated method stub
		getHibernateTemplate().save(com);
	}

}
