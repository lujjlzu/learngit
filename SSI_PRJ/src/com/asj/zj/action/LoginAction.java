package com.asj.zj.action;

import java.util.Map;

import org.jw.cn.base.action.BaseAction;
import org.jw.cn.base.dto.Dto;
import org.jw.cn.base.dto.impl.BaseDto;

import com.asj.zj.common.ConstCodeDef;
import com.asj.zj.service.sys.IOperatorService;
import com.opensymphony.xwork2.ActionContext;

public class LoginAction extends BaseAction {
	private  String loginName;
	
	private String pass;
	
	private IOperatorService service;
	
	public String execute(){
		Map session =  ActionContext.getContext().getSession();
		Map param=    ActionContext.getContext().getParameters();
		
		return SUCCESS;
	}
	
	public String login(){
		log.debug("Enter LoginAction  login");
		
		Map session =  ActionContext.getContext().getSession();
		Dto paramDto=new BaseDto();
		paramDto.put("login_name", this.getLoginName());
		paramDto.put("pass", this.getPass());
		Dto resDto=service.login(paramDto);
		if (resDto.getAsString(ConstCodeDef.KEY_SERVICE_RES).equalsIgnoreCase("true")){
			session.put(ConstCodeDef.KEY_SESSION_OPERATORBO, resDto.get(ConstCodeDef.KEY_SESSION_OPERATORBO));
			return this.SUCCESS;
		}else{
			this.clearMessages();
			this.addActionMessage(resDto.getAsString(ConstCodeDef.KEY_SERVICE_RES_INFO));
			return this.INPUT;
		}
		
	}

	/**
	 * @return the loginName
	 */
	public String getLoginName() {
		return loginName;
	}

	/**
	 * @param loginName the loginName to set
	 */
	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	/**
	 * @return the pass
	 */
	public String getPass() {
		return pass;
	}

	/**
	 * @param pass the pass to set
	 */
	public void setPass(String pass) {
		this.pass = pass;
	}

	/**
	 * @return the service
	 */
	public IOperatorService getService() {
		return service;
	}

	/**
	 * @param service the service to set
	 */
	public void setService(IOperatorService service) {
		this.service = service;
	}
	
	
	
	

}
