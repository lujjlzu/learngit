package com.asj.zj.bo.intf;

import java.io.Serializable;

public class ZwTokenBo extends Object implements Serializable{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String code;
	
	private String secret;
	
	private String username;
	
	private String userpasword;

	/**
	 * @return the code
	 */
	public String getCode() {
		return code;
	}

	/**
	 * @param code the code to set
	 */
	public void setCode(String code) {
		this.code = code;
	}

	/**
	 * @return the secret
	 */
	public String getSecret() {
		return secret;
	}

	/**
	 * @param secret the secret to set
	 */
	public void setSecret(String secret) {
		this.secret = secret;
	}

	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the userpasword
	 */
	public String getUserpasword() {
		return userpasword;
	}

	/**
	 * @param userpasword the userpasword to set
	 */
	public void setUserpasword(String userpasword) {
		this.userpasword = userpasword;
	}
	
	
	
	

}
