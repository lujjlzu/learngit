package com.asj.zj.bo.sys;

import java.util.List;

public class MenuShowBo {

	private int menuid;
	private String icon;
	private String menuname;
	private String url;
	private List<MenuShowBo> menus;
	public int getMenuid() {
		return menuid;
	}
	public void setMenuid(int menuid) {
		this.menuid = menuid;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getMenuname() {
		return menuname;
	}
	public void setMenuname(String menuname) {
		this.menuname = menuname;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public List<MenuShowBo> getMenus() {
		return menus;
	}
	public void setMenus(List<MenuShowBo> menus) {
		this.menus = menus;
	}
	
	
}
