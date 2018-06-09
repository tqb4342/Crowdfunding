package Crowdfunding.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import Crowdfunding.dao.TypesDao;
import Crowdfunding.po.Types;


public class TypesDaoHibernate extends HibernateDaoSupport implements TypesDao {

	@Override
	public Types get(Integer tid) {
		// TODO Auto-generated method stub
		return getHibernateTemplate().get(Types.class, tid);
	}

	@Override
	public Types getByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Types> findAll() {
		// TODO Auto-generated method stub
		return (List<Types>)getHibernateTemplate().find("from Types");
	}

}
