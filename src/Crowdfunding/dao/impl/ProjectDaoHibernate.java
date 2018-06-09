package Crowdfunding.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import Crowdfunding.dao.ProjectDao;
import Crowdfunding.po.Project;

public class ProjectDaoHibernate extends HibernateDaoSupport implements ProjectDao {

	@Override
	public void save(Project project) {
		// TODO Auto-generated method stub
		getHibernateTemplate().save(project);
	}

	@Override
	public List<Project> findAll() {
		// TODO Auto-generated method stub
		return (List<Project>)getHibernateTemplate().find("from Project");
	}

	@Override
	public Project getById(int pid) {
		// TODO Auto-generated method stub
		return getHibernateTemplate().get(Project.class, pid);
	}

	@Override
	public void updata(Project project) {
		// TODO Auto-generated method stub
		getHibernateTemplate().update(project);
	}

	@Override
	public void delete(Project project) {
		// TODO Auto-generated method stub
		getHibernateTemplate().delete(project);
	}

}
