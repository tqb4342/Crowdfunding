package Crowdfunding.service.impl;



import java.util.Date;

import Crowdfunding.po.Fund;
import Crowdfunding.po.Project;
import Crowdfunding.service.FundManager;
import Crowdfunding.service.util.ManagerTemplate;

public class FundManagerImpl extends ManagerTemplate implements FundManager {

	@Override
	public void save(int pid, int uid, double money) {
		// TODO Auto-generated method stub
		System.out.println(money);
		Project pro = this.getProjectDao().getById(pid);
		double mone = pro.getMoney()+money;
		pro.setMoney(mone);
		this.getProjectDao().updata(pro);
		Date date = new Date();
		Fund fund = new Fund(pid,uid,money,date);
		this.getFundDao().save(fund);
	}
	
}
