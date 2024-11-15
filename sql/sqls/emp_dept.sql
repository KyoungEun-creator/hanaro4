show processlist;

select * from mysql.user;

select * from Emp;

desc Emp;
select * from Dept;

select * from Emp e inner join Dept d on e.dept = d.id where e.dept in (3,4);

create table hana4db.Enroll like testdb.Enroll;
insert into Enroll select * from testdb.Enroll;
select * from testdb.Enroll;

create table hana4db.Prof like testdb.Prof;
insert into Prof select * from testdb.Prof;

select * from hana4db.Student;

create table hana4db.Subject like testdb.Subject;
insert into Subject select * from testdb.Subject;

drop table testdb.Student;
drop table testdb.Subject;
drop table testdb.Prof;


update  Emp e inner join Dept d on e.dept = d.id
	set d.captain = e.id
	where e.dept = 3 and  e.ename = '김나라'; 
    
-- captain을 min값인 사람으로 지정하기

alter table Emp add column auth tinyint(1) not null default 9 
       comment '권한(0:sys, 1:super, …, 9:guest)' after dept;
       
alter table Dept add column captain int unsigned null comment '부서장';
alter table Dept add constraint foreign key fk_Dept_captain_Emp(captain) 
             references Emp(id) on DELETE set null on UPDATE cascade;
             
create table EmailLog (
  id int unsigned not null auto_increment,
  sender int unsigned not null comment '발신자 id',
  receiver varchar(1024) not null comment '수신자+참조',
  subject varchar(255) not null default '냉무' comment '제목',
  body text null comment '내용 및 첨부파일',
  PRIMARY KEY pk_EmailLog(id),
  constraint foreign key fk_EmailLog_sender_Emp(sender)
             references Emp(id) on DELETE no action on UPDATE cascade
);

select @@autocommit;

show create table Dept;
show index from Dept;
show table status;
show index from Emp;

select last_insert_id();

insert into Dept(pid, dname) values(2, '퍼블리셔팀');

select * from Student;

desc Student;

use testdb;