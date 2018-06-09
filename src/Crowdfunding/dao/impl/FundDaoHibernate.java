package Crowdfunding.dao.impl;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import Crowdfunding.dao.FundDao;
import Crowdfunding.po.Fund;

public class FundDaoHibernate extends HibernateDaoSupport implements FundDao {

	@Override
	public void save(Fund fund) {
		// TODO Auto-generated method stub
		getHibernateTemplate().save(fund);
	}

}
