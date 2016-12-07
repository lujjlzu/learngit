package com.asj.zj.common;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.jw.cn.base.dto.Dto;
import org.jw.cn.base.log.BaseLogger;

import com.asj.zj.bo.sys.OperatorBo;

public class Util {
    public static Logger log= BaseLogger.getLogger("APP-LOG");
	
	public static boolean chkOpInfoBySession(Dto paramDto) {
		HttpSession session=(HttpSession) paramDto.get("KEY_CURRENT_SESSION");
		if (session!=null){
			OperatorBo operatorBo=(OperatorBo) session.getAttribute(ConstCodeDef.KEY_SESSION_OPERATORBO);
			if (operatorBo!=null){
				paramDto.put(ConstCodeDef.KEY_SESSION_OPERATORBO, operatorBo);
				paramDto.put("opId", operatorBo.getOp_Id());
				return true;
			}else{
				log.warn("操作员没有登陆");
				return false;
			}
		}else{
			log.warn("操作员没有登陆");
			return false;
		}
		
	}
	
}
