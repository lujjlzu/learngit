prompt PL/SQL Developer import file
prompt Created on 2016��12��4�� by Administrator
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
  is '����ϵͳִ��ҵ������͹������Ա���ϣ�';
comment on column SYS_OPERATORS.LOGIN_NAME
  is '��¼�������ظ�';
comment on column SYS_OPERATORS.REG_TYPE
  is '0 ��֤��
1.���֤
2.����
3.��ʻ֤
4.����֤
5.����֤
6.��ᱣ�պ�
7.����';
comment on column SYS_OPERATORS.TYPE
  is '0  undefined
1  Employ
2  Resign';
comment on column SYS_OPERATORS.OP_PASSWD
  is '֧��32λ��������';
comment on column SYS_OPERATORS.OP_STATUS
  is 'ָʾ����Ա��״̬
0�����������ã�
1��ͣ��
9��ɾ����������ɾ������Ա���ϵ��ò���Ա�Ѿ�ʹ�õ�����������δʹ��������ɾ����¼
';
comment on column SYS_OPERATORS.LOCK_STS
  is '���ڹ������Ա��״̬��
0������״̬
1���������������ڹ���Ŀ�ĵ�����
2���Զ������������Ե�¼ʧ�ܳ���ָ���Ĵ������Զ����������ڰ�ȫĿ�ġ�';
comment on column SYS_OPERATORS.ORG_ID
  is '��������֯�ṹ';
comment on column SYS_OPERATORS.SECURITY_ID
  is '��Ӧ��ȫ�����壬Ŀǰ�ɲ�ʹ��';
comment on column SYS_OPERATORS.PIC_PATH
  is '����Ա����ƬĿ¼';
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
