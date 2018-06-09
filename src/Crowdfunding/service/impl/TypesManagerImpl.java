package Crowdfunding.service.impl;

import java.util.List;

import Crowdfunding.po.Types;
import Crowdfunding.service.TypesManager;
import Crowdfunding.service.util.ManagerTemplate;

public class TypesManagerImpl extends ManagerTemplate implements TypesManager {

	@Override
	public List<Types> QueryAll() {
		// TODO Auto-generated method stub
		return this.getTypesDao().findAll();
	}

	@Override
	public Types getById(Integer tid) {
		// TODO Auto-generated method stub
		return this.getTypesDao().get(tid);
	}

	@Override
	public Types findtype(String name) {
		// TODO Auto-generated method stub
		return null;
	}

}
