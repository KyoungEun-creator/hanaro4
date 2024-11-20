use testdb;

show processlist;

select * from Emp;

desc Emp;
select * from Dept;

select * from Emp e inner join Dept d on e.dept = d.id where e.dept in (3,4);

update  Emp e inner join Dept d on e.dept = d.id
	set d.captain = e.id
	where e.dept = 3 and  e.ename = '김나라'; 
    
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

-- Emp table에 outdt(퇴사일) 칼럼 추가하기.
alter table Emp add column outdt date null comment '퇴사일';

select * from Emp where id in (3, 5, 10);

-- Emp.id가 3,5인 직원을 4월 25일자 퇴사 처리하라. 
update Emp set outdt = '2024-04-25'
  where id in (3, 5);

-- Emp.id가 4,6인 직원을 오늘자 퇴사 처리하라. 
update Emp set outdt = curdate() where id in (14, 26);

-- Dept.captain이 퇴사자면 공석으로 처리하라.
select * from Dept d inner join Emp e on d.captain = e.id;
update  Dept d inner join Emp e on d.captain = e.id
  set d.captain = null 
  where e.outdt is not null;
  
-- 확인
select * from Dept d left join Emp e on d.captain = e.id;




-- 평균 급여보다 높은 부서명과 그 부서의 최고 연봉자 구하기
select * from Emp;
select avg(salary) from Emp;
select dept, avg(salary) from Emp group by dept;

select sub.*, e.* 
  from Emp e inner join (select dept, avg(salary) avgSal, max(salary) maxSal from Emp
	                                      group by dept having avg(salary) > (select avg(salary) from Emp)) sub
		              on e.dept = sub.dept and e.salary = sub.maxSal
  order by e.dept and e.ename;
  
select e.*, sub.salary as avgSal, sub.maxSal
  from Emp e inner join (select avg(salary) salary, max(salary) maxSal from Emp) sub
                        on e.salary = sub.maxSal
  order by e.dept, e.id;

-- good
select e1.*, e2.id, e2.ename
  from Emp e1 left join Emp e2 on e1.dept = e2.dept and e1.salary < e2.salary
  where e2.id is null
  order by dept;
  
-- 부서별 이름이 가장 빠른 직원을 captain으로 설정
update Dept set captain = null where id > 0; -- 일단 captain 모두 삭제
-- 1) 부서별 이름이 가장 빠른 직원 추출
select dept, min(ename) from Emp group by dept;
select * from Emp where ename in (select min(ename) from Emp group by dept);

-- 2) 
select * from Emp where ename = '김나나' and dept = 1; -- id: 26

select e1.*, e2.id
  from Emp e1 left join Emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
  where e2.id is null;
  
-- 3
select * from Dept;

update Dept d 
  inner join
	(select e1.dept, e1.id
       from Emp e1 left join Emp e2
							on e1.dept = e2.dept and e1.ename > e2.ename
	where e2.id is null) e
	on d.id = e.dept
    set d.captain = e.id
    where d.id > 0;

-- 4 결과 확인
select * from Dept;
select d.*, e.dept, e.ename from Dept d inner join Emp e on d.captain = e.id;
    

-- view 사용	
select * from v_emp_dept;


  
  