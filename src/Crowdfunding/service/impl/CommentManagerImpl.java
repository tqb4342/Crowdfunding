package Crowdfunding.service.impl;

import java.util.Date;

import Crowdfunding.po.Comment;
import Crowdfunding.service.CommentManager;
import Crowdfunding.service.util.ManagerTemplate;


public class CommentManagerImpl extends ManagerTemplate implements CommentManager {

	@Override
	public void save(int pid, int uid, String ptext) {
		Date date = new Date();
		Comment comment = new Comment(pid,uid,ptext,date);
		this.getCommentDao().save(comment);
	}

}
