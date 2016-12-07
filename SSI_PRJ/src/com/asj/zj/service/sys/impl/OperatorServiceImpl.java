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
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "�������");
				//throw new AppException(OperatorServiceImpl.class.getName(), "login", "", "�������");
			}else{
				if (operatorBo.getLock_Sts()!=0){
					resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
					resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "����Ա�Ѿ�������");
				}
				//������Ա��Ϣ�����session��
				//HttpServletRequest request=(HttpServletRequest) paramDto.get("KEY_CURRENT_REQUEST");
				
				
				resDto.put(ConstCodeDef.KEY_SESSION_OPERATORBO, operatorBo);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "��¼�ɹ�");
			}
		}else{
			
			resDto.put(ConstCodeDef.KEY_SERVICE_RES,ConstCodeDef.KEY_SERVICE_RES_FAIL);
			resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "����Ա������");
			//throw new AppException(OperatorServiceImpl.class.getName(), "login", "", "����Ա������");
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
			resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "��¼�ɹ�");
		}else{
			resDto.put(ConstCodeDef.KEY_SERVICE_RES,ConstCodeDef.KEY_SERVICE_RES_FAIL);
			resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "ԭʼ�����������");
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
				//�����½��Ϣ��session��
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
					resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "����Աû�е�½�������޸����룡");
				}
			}else{
				resDto.put(ConstCodeDef.KEY_SERVICE_RES,ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "����Աû�е�½�������޸����룡");
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
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "��ȡ����Ա��Ϣ�ɹ�");
			} catch (Exception e) {
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "��ȡ����Ա��Ϣʧ��:"+e.getMessage());
				log.error("��ȡ����Ա��Ϣʧ��:"+e.getMessage(),e);
			}
		}else if ("addOperator".equalsIgnoreCase(strMethod)){
			try {
				resDto=this.addOperator(paramDto);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "��Ӳ���Ա��Ϣ�ɹ�");
			} catch (Exception e) {
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "��Ӳ���Ա��Ϣʧ��:"+e.getMessage());
				log.error("��Ӳ���Ա��Ϣʧ��:"+e.getMessage(),e);
			}
		}else if ("updateOperator".equalsIgnoreCase(strMethod)){
			try {
				
				resDto=this.updateOperator(paramDto);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "�޸Ĳ���Ա��Ϣ�ɹ�");
			} catch (Exception e) {
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "�޸Ĳ���Ա��Ϣʧ��:"+e.getMessage());
				log.error("�޸Ĳ���Ա��Ϣʧ��:"+e.getMessage(),e);
			}
		}else if ("delOperator".equalsIgnoreCase(strMethod)){
			try {
				
				resDto=this.delOperator(paramDto);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_SUCC);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "ɾ������Ա��Ϣ�ɹ�");
			} catch (Exception e) {
				resDto.put(ConstCodeDef.KEY_SERVICE_RES, ConstCodeDef.KEY_SERVICE_RES_FAIL);
				resDto.put(ConstCodeDef.KEY_SERVICE_RES_INFO, "ɾ������Ա��Ϣʧ��:"+e.getMessage());
				log.error("ɾ������Ա��Ϣʧ��:"+e.getMessage(),e);
			}
		}
		log.debug("Leaver OperatorServiceImpl jscall resDto="+resDto);
		return resDto;
	}

}
