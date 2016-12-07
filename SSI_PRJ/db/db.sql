prompt PL/SQL Developer import file
prompt Created on 2016年12月4日 by Administrator
set feedback off
set define off
prompt Dropping SYS_OPERATORS...
drop table SYS_OPERATORS cascade constraints;
prompt Creating SYS_OPERATORS...
create table SYS_OPERATORS
(
  OP_ID       NUMBER(8) not null,
  OP_NAME     VARCHAR2(32) not null,
  LOGIN_NAME  VARCHAR2(16) not null,
  REG_TYPE    NUMBER(2) default 0 not null,
  REG_NBR     VARCHAR2(32),
  PHONE       VARCHAR2(30),
  ADDRESS     VARCHAR2(200),
  POST_CODE   NUMBER(6),
  TYPE        NUMBER(2) default 1 not null,
  OP_PASSWD   VARCHAR2(65),
  OP_STATUS   NUMBER(2) not null,
  LOCK_STS    NUMBER(2) not null,
  CREATE_DATE DATE not null,
  VALID_DATE  DATE not null,
  EXPIRE_DATE DATE not null,
  ORG_ID      NUMBER(8) not null,
  SECURITY_ID NUMBER(4),
  REGION_CODE NUMBER(4) not null,
  COUNTY_CODE NUMBER(4) not null,
  MEMO        VARCHAR2(255),
  PIC_PATH    VARCHAR2(50)
)
;
comment on table SYS_OPERATORS
  is '定义系统执行业务操作和管理的人员资料，';
comment on column SYS_OPERATORS.LOGIN_NAME
  is '登录名不能重复';
comment on column SYS_OPERATORS.REG_TYPE
  is '0 无证件
1.身份证
2.护照
3.驾驶证
4.军官证
5.警官证
6.社会保险号
7.其他';
comment on column SYS_OPERATORS.TYPE
  is '0  undefined
1  Employ
2  Resign';
comment on column SYS_OPERATORS.OP_PASSWD
  is '支持32位明文密码';
comment on column SYS_OPERATORS.OP_STATUS
  is '指示操作员的状态
0：正常（在用）
1：停用
9：删除，用于在删除操作员资料但该操作员已经使用的情况。如果从未使用则物理删除记录
';
comment on column SYS_OPERATORS.LOCK_STS
  is '用于管理操作员的状态：
0：正常状态
1：管理锁定，用于管理目的的锁定
2：自动锁定。当尝试登录失败超过指定的次数后自动锁定，用于安全目的。';
comment on column SYS_OPERATORS.ORG_ID
  is '归属的组织结构';
comment on column SYS_OPERATORS.SECURITY_ID
  is '对应安全规则定义，目前可不使用';
comment on column SYS_OPERATORS.PIC_PATH
  is '操作员的照片目录';
alter table SYS_OPERATORS
  add constraint PK_SYS_OPERATORS primary key (OP_ID);

prompt Loading SYS_OPERATORS...
insert into SYS_OPERATORS (OP_ID, OP_NAME, LOGIN_NAME, REG_TYPE, REG_NBR, PHONE, ADDRESS, POST_CODE, TYPE, OP_PASSWD, OP_STATUS, LOCK_STS, CREATE_DATE, VALID_DATE, EXPIRE_DATE, ORG_ID, SECURITY_ID, REGION_CODE, COUNTY_CODE, MEMO, PIC_PATH)
values (93011000, 'test', 'test', 1, '1', '1', '1', 1, 1, '123456', 0, 0, to_date('28-12-2011', 'dd-mm-yyyy'), to_date('28-12-2011', 'dd-mm-yyyy'), to_date('01-12-2030', 'dd-mm-yyyy'), 93011000, 1, 930, 9301, '1', 'images/c1-img05.jpg');
commit;
prompt 1 records loaded
set feedback on
set define on
prompt Done.
