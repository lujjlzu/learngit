package com.asj.zj.service.sys.impl;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.jw.cn.base.common.GlobalConstants;
import org.jw.cn.base.dto.Dto;
import org.jw.cn.base.dto.impl.BaseDto;
import org.jw.cn.base.service.impl.BaseServiceImpl;

import com.asj.zj.bo.sys.OperatorBo;
import com.asj.zj.common.ConstCodeDef;
import com.asj.zj.service.sys.IOperatorService;



public class OperatorServiceImpl extends BaseServiceImpl implements
		IOperatorService {

	public Dto login(Dto paramDto) {
		
		log.debug("Enter OperatorServiceImpl login paramDto="+paramDto);
		Dto resDto=new BaseDto<Object,Object>();
		OperatorBo operatorBo=(OperatorBo) this.baseReader.queryForObject("login",paramDto);
		log.debug("operatorBo="+operatorBo);
		if (operatorBo!=null){
			if (!operatorBo.getOp_Passwd().equals(paramDto.getAsString("pass"))){				
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "密码错误");
				//throw new AppException(OperatorServiceImpl.class.getName(), "login", "", "密码错误");
			}else{
				if (operatorBo.getLock_Sts()!=0){
					resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
					resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "操作员已经被锁定");
				}
				//将操作员信息保存的session中
				//HttpServletRequest request=(HttpServletRequest) paramDto.get("KEY_CURRENT_REQUEST");
				
				
				resDto.put(ConstCodeDef.KEY_SESSION_OPERATORBO, operatorBo);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "登录成功");
			}
		}else{
			
			resDto.put(ConstCodeDef.KEY_SERVICE_RES,ConstCodeDef.KEY_SERVICE_RES_FAIL);
			resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "操作员不存在");
			//throw new AppException(OperatorServiceImpl.class.getName(), "login", "", "操作员不存在");
		}
		log.debug("leaver OperatorServiceImpl login resDto="+resDto);
		return resDto;
	}

	public Dto logout(Dto paramDto) {
		// TODO Auto-generated method stub
		return null;
	}

	public Dto updatePass(Dto paramDto) {
		log.debug("Enter OperatorServiceImpl updatePass paramDto="+paramDto);
		Dto  resDto=new BaseDto();
		OperatorBo operatorBo=(OperatorBo)paramDto.get(ConstCodeDef.KEY_SESSION_OPERATORBO);
		if (operatorBo.getOp_Passwd().equals(paramDto.getAsString("oldpass"))){
			paramDto.put("op_id", operatorBo.getOp_Id());
			this.baseDao.update("updateLoginPass", paramDto);
			resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
			resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "登录成功");
		}else{
			resDto.put(ConstCodeDef.KEY_SERVICE_RES,ConstCodeDef.KEY_SERVICE_RES_FAIL);
			resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "原始密码输入错误！");
		}
		log.debug("Leaver OperatorServiceImpl updatePass resDto="+resDto);
		return resDto;
	}
	
	public List getOperator(Dto paramDto) throws Exception{
		return this.baseReader.queryForList("getOperator", paramDto);
	}
	
	public int getOperatorNum(Dto paramDto) throws Exception{
		return Integer.parseInt((String)this.baseReader.queryForObject("getOperatorCount", paramDto));
	}
	
	public Dto  addOperator(Dto paramDto) throws Exception{
		Dto resDto=new BaseDto();
		String inputId=(String) this.baseReader.queryForObject("getOpId");
		paramDto.put("opId", inputId);
		this.baseDao.insert("addOperator", paramDto);
		return resDto;
	}
	
	public Dto updateOperator(Dto paramDto) throws Exception{
		Dto resDto=new BaseDto();
		this.baseDao.update("updateOperator", paramDto);
		return resDto;
	}
	
	public Dto delOperator(Dto paramDto) throws Exception{
		Dto resDto=new BaseDto();
		String[] inputIds=paramDto.getAsString("opIds").split(",");
        for (int i=0;i<inputIds.length;i++){
        	paramDto.put("opId", inputIds[i]);
    		this.baseDao.update("delOperator", paramDto);
        }
		return resDto;
	}

	public Dto jsCall(Dto paramDto) {
		// TODO Auto-generated method stub
		log.debug("Enter OperatorServiceImpl jscall paramDto="+paramDto);
		Dto resDto=new BaseDto();
		String strMethod=paramDto.getAsString(GlobalConstants.KEY_SERVICE_METHOD);
		if (strMethod.equalsIgnoreCase("login")){
			resDto=this.login(paramDto);
			if (resDto.getAsString(ConstCodeDef.KEY_SERVICE_RES).equalsIgnoreCase("true")){
				//保存登陆信息到session中
				HttpSession session=(HttpSession) paramDto.get("KEY_CURRENT_SESSION");
				session.setAttribute(ConstCodeDef.KEY_SESSION_OPERATORBO, resDto.get(ConstCodeDef.KEY_SESSION_OPERATORBO));
			}
			
		}else if(strMethod.equalsIgnoreCase("chgPass")){
			HttpSession session=(HttpSession) paramDto.get("KEY_CURRENT_SESSION");
			if (session!=null){
				OperatorBo operatorBo=(OperatorBo) session.getAttribute(ConstCodeDef.KEY_SESSION_OPERATORBO);
				if (operatorBo!=null){
					paramDto.put(ConstCodeDef.KEY_SESSION_OPERATORBO, operatorBo);
					resDto=this.updatePass(paramDto);
				}else{
					resDto.put(ConstCodeDef.KEY_SERVICE_RES,ConstCodeDef.KEY_SERVICE_RES_FAIL);
					resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "操作员没有登陆，不能修改密码！");
				}
			}else{
				resDto.put(ConstCodeDef.KEY_SERVICE_RES,ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "操作员没有登陆，不能修改密码！");
			}
		}else if(strMethod.equalsIgnoreCase("loginout")){
			HttpSession session=(HttpSession) paramDto.get("KEY_CURRENT_SESSION");
			if (session!=null){
				OperatorBo operatorBo=(OperatorBo) session.getAttribute(ConstCodeDef.KEY_SESSION_OPERATORBO);
				if (operatorBo!=null){
					session.setAttribute(ConstCodeDef.KEY_SESSION_OPERATORBO, null);
				}
			}
		}else if ("getOperator".equalsIgnoreCase(strMethod)){
			try {
				List resultList=getOperator(paramDto);
				resDto.put(ConstCodeDef.KEY_TOTAL_REC, getOperatorNum(paramDto));
				resDto.setDefaultAList(resultList);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "获取操作员信息成功");
			} catch (Exception e) {
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "获取操作员信息失败:"+e.getMessage());
				log.error("获取操作员信息失败:"+e.getMessage(),e);
			}
		}else if ("addOperator".equalsIgnoreCase(strMethod)){
			try {
				resDto=this.addOperator(paramDto);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "添加操作员信息成功");
			} catch (Exception e) {
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "添加操作员信息失败:"+e.getMessage());
				log.error("添加操作员信息失败:"+e.getMessage(),e);
			}
		}else if ("updateOperator".equalsIgnoreCase(strMethod)){
			try {
				
				resDto=this.updateOperator(paramDto);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "修改操作员信息成功");
			} catch (Exception e) {
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "修改操作员信息失败:"+e.getMessage());
				log.error("修改操作员信息失败:"+e.getMessage(),e);
			}
		}else if ("delOperator".equalsIgnoreCase(strMethod)){
			try {
				
				resDto=this.delOperator(paramDto);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "删除操作员信息成功");
			} catch (Exception e) {
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "删除操作员信息失败:"+e.getMessage());
				log.error("删除操作员信息失败:"+e.getMessage(),e);
			}
		}
		log.debug("Leaver OperatorServiceImpl jscall resDto="+resDto);
		return resDto;
	}

}
