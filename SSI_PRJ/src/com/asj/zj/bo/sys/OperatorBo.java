package com.asj.zj.bo.sys;

import java.io.Serializable;

/**
 * 操作员
 * @author feihu
 *
 */
public class OperatorBo extends Object implements Serializable {
	

	
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * @return the op_Id
	 */
	public int getOp_Id() {
		return op_Id;
	}
	/**
	 * @param op_Id the op_Id to set
	 */
	public void setOp_Id(int op_Id) {
		this.op_Id = op_Id;
	}
	/**
	 * @return the op_Name
	 */
	public String getOp_Name() {
		return op_Name;
	}
	/**
	 * @param op_Name the op_Name to set
	 */
	public void setOp_Name(String op_Name) {
		this.op_Name = op_Name;
	}
	/**
	 * @return the login_Name
	 */
	public String getLogin_Name() {
		return login_Name;
	}
	/**
	 * @param login_Name the login_Name to set
	 */
	public void setLogin_Name(String login_Name) {
		this.login_Name = login_Name;
	}
	/**
	 * @return the reg_Type
	 */
	public int getReg_Type() {
		return reg_Type;
	}
	/**
	 * @param reg_Type the reg_Type to set
	 */
	public void setReg_Type(int reg_Type) {
		this.reg_Type = reg_Type;
	}
	/**
	 * @return the reg_Nbr
	 */
	public String getReg_Nbr() {
		return reg_Nbr;
	}
	/**
	 * @param reg_Nbr the reg_Nbr to set
	 */
	public void setReg_Nbr(String reg_Nbr) {
		this.reg_Nbr = reg_Nbr;
	}
	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}
	/**
	 * @param phone the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}
	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}
	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}
	/**
	 * @return the post_Code
	 */
	public int getPost_Code() {
		return post_Code;
	}
	/**
	 * @param post_Code the post_Code to set
	 */
	public void setPost_Code(int post_Code) {
		this.post_Code = post_Code;
	}
	/**
	 * @return the type
	 */
	public int getType() {
		return type;
	}
	/**
	 * @param type the type to set
	 */
	public void setType(int type) {
		this.type = type;
	}
	/**
	 * @return the op_Passwd
	 */
	public String getOp_Passwd() {
		return op_Passwd;
	}
	/**
	 * @param op_Passwd the op_Passwd to set
	 */
	public void setOp_Passwd(String op_Passwd) {
		this.op_Passwd = op_Passwd;
	}
	/**
	 * @return the op_Status
	 */
	public int getOp_Status() {
		return op_Status;
	}
	/**
	 * @param op_Status the op_Status to set
	 */
	public void setOp_Status(int op_Status) {
		this.op_Status = op_Status;
	}
	/**
	 * @return the lock_Status
	 */
	public int getLock_Sts() {
		return lock_Sts;
	}
	/**
	 * @param lock_Status the lock_Status to set
	 */
	public void setLock_Sts(int lock_Sts) {
		this.lock_Sts = lock_Sts;
	}
	/**
	 * @return the create_Date
	 */
	public String getCreate_Date() {
		return create_Date;
	}
	/**
	 * @param create_Date the create_Date to set
	 */
	public void setCreate_Date(String create_Date) {
		this.create_Date = create_Date;
	}
	/**
	 * @return the valid_Date
	 */
	public String getValid_Date() {
		return valid_Date;
	}
	/**
	 * @param valid_Date the valid_Date to set
	 */
	public void setValid_Date(String valid_Date) {
		this.valid_Date = valid_Date;
	}
	/**
	 * @return the expire_Date
	 */
	public String getExpire_Date() {
		return expire_Date;
	}
	/**
	 * @param expire_Date the expire_Date to set
	 */
	public void setExpire_Date(String expire_Date) {
		this.expire_Date = expire_Date;
	}
	/**
	 * @return the org_Id
	 */
	public int getOrg_Id() {
		return org_Id;
	}
	/**
	 * @param org_Id the org_Id to set
	 */
	public void setOrg_Id(int org_Id) {
		this.org_Id = org_Id;
	}
	/**
	 * @return the security_Id
	 */
	public int getSecurity_Id() {
		return security_Id;
	}
	/**
	 * @param security_Id the security_Id to set
	 */
	public void setSecurity_Id(int security_Id) {
		this.security_Id = security_Id;
	}
	/**
	 * @return the region_Code
	 */
	public int getRegion_Code() {
		return region_Code;
	}
	/**
	 * @param region_Code the region_Code to set
	 */
	public void setRegion_Code(int region_Code) {
		this.region_Code = region_Code;
	}
	/**
	 * @return the county_Code
	 */
	public int getCounty_Code() {
		return county_Code;
	}
	/**
	 * @param county_Code the county_Code to set
	 */
	public void setCounty_Code(int county_Code) {
		this.county_Code = county_Code;
	}
	/**
	 * @return the memo
	 */
	public String getMemo() {
		return memo;
	}
	/**
	 * @param memo the memo to set
	 */
	public void setMemo(String memo) {
		this.memo = memo;
	}
	
	
	/*public OperatorBo clone(){
		return this.clone();		
	}*/
	
	public String getPic_Path() {
		return pic_Path;
	}
	public void setPic_Path(String pic_Path) {
		this.pic_Path = pic_Path;
	}


	private int op_Id; 
	private String op_Name;            
	private String login_Name;         
	private int reg_Type;           
	private String reg_Nbr;            
	private String phone;              
	private String address;            
	private int post_Code;          
	private int type;               
	private String op_Passwd;          
	private int op_Status;          
	private int lock_Sts;        
	private String create_Date;        
	private String valid_Date ;        
	private String expire_Date ;       
	private int org_Id;             
	private int security_Id;        
	private int region_Code;        
	private int county_Code;        
	private String memo;
	private String pic_Path;


}
