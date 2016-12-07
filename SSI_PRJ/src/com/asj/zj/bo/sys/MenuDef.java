package com.asj.zj.bo.sys;

public class MenuDef {

	private int menu_id;
	private int menu_type;
	private String module_name;
	private String menu_title;
	private int parent_menu_id;
	private int icon_index;
	private int seq_no;
	private int entity_id;
	private String exec_url;
	private String image_url;
	
	
	public int getMenu_id() {
		return menu_id;
	}
	public void setMenu_id(int menu_id) {
		this.menu_id = menu_id;
	}
	public int getMenu_type() {
		return menu_type;
	}
	public void setMenu_type(int menu_type) {
		this.menu_type = menu_type;
	}
	public String getModule_name() {
		return module_name;
	}
	public void setModule_name(String module_name) {
		this.module_name = module_name;
	}
	public String getMenu_title() {
		return menu_title;
	}
	public void setMenu_title(String menu_title) {
		this.menu_title = menu_title;
	}
	public int getParent_menu_id() {
		return parent_menu_id;
	}
	public void setParent_menu_id(int parent_menu_id) {
		this.parent_menu_id = parent_menu_id;
	}
	public int getIcon_index() {
		return icon_index;
	}
	public void setIcon_index(int icon_index) {
		this.icon_index = icon_index;
	}
	public int getSeq_no() {
		return seq_no;
	}
	public void setSeq_no(int seq_no) {
		this.seq_no = seq_no;
	}
	public int getEntity_id() {
		return entity_id;
	}
	public void setEntity_id(int entity_id) {
		this.entity_id = entity_id;
	}
	public String getExec_url() {
		return exec_url;
	}
	public void setExec_url(String exec_url) {
		this.exec_url = exec_url;
	}
	public String getImage_url() {
		return image_url;
	}
	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}
	
	
}
