package com.asj.zj.service.sys;

import org.jw.cn.base.dto.Dto;
import org.jw.cn.base.service.BaseService;



public interface IOperatorService extends BaseService {
	
	/**
	 * 登入
	 * @param paramDto
	 * @return
	 */
	public Dto login(Dto paramDto);
	
	/**
	 * 登出
	 * @param paramDto
	 * @return
	 */
	public Dto logout(Dto paramDto);
	
	/**
	 * 更新密码
	 * @param paramDto
	 * @return
	 */
	public Dto updatePass(Dto paramDto);  

}
