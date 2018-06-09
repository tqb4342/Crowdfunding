package Crowdfunding.dao;

import java.util.List;

import Crowdfunding.po.Types;


public interface TypesDao {

	Types get(Integer tid);
	
	Types getByName(String name);

	List<Types> findAll();
	
}
