package Crowdfunding.service;

import java.util.List;

import Crowdfunding.po.Types;



public interface TypesManager {

public List<Types> QueryAll();
	
	public Types getById(Integer tid);
	
	public Types findtype(String name);
	
}
