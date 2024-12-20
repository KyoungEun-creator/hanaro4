

select * from Major;
update Major set name = '소프트웨어학과' where id = 4;
select * from Major limit 3, 2;
select * from Major limit 0, 2;

desc Major;
insert into Major(name) values ('철학과');
insert into Major(name) values ('컴퓨터공학과'), ('소프트웨어공학과');
insert into Major(name) select '산업공학과' from dual;
insert into Major set name = '경제학과'; 
insert into Major set name = '경영학과'; 


select * from Student;
desc Student;
insert into Student (name, birthdt, major, mobile, email) 
                  values ('Hong', '990102', 1, '010-2323-4545', 'hong@gmail.com'); 
insert into Student (name, birthdt, major, mobile, email) 
                  values ('Kim', '980302', 5, '010-2323-7878', 'kim@gmail.com'); 
insert into Student (name, birthdt, major, mobile, email) 
                  values ('Lee', '980302', 5, '010-2323-7878', 'lee@gmail.com'); 
insert into Student (name, birthdt, mobile, email) 
                  values ('Choi', '970302', '010-2323-7878', 'choi@gmail.com'); 
                  
select * from Student where name = 'Kim';
select * from Student where gender = 0;
select * from Student where birthdt like '98%';
select * from Student where birthdt >= '980101' and birthdt <= '981231';
select * from Student where major in (5, 6);
select * from Student where major in (select major from Student where major >= 5);
select * from Student where major in (select distinct major from Student where major >= 5);
select * from Student where major = (select min(major) from Student);
select * from Student where major > ANY(select major from Student);
select * from Student where major > SOME(select major from Student);
select * from Student where major < ALL(select major from Student);

select major from Student where major >= 5; 
select max(major), min(birthdt) from Student;
select max(major), min(major) from Student;
select * from Student order by rand();
select * from Student order by id desc limit 2;
select major, count(*) cnt from Student where id > 0 group by major having cnt > 1;

select * from Student inner join Major on Student.major = Major.id;
select * from Student s inner join Major m on s.major = m.id where s.id >= 2;

select * from Student s left outer join Major m on s.major = m.id;
select * from Student s right outer join Major m on s.major = m.id;
select * from Major where id <= 3
UNION ALL
select * from Major where id > 3;

-- 평균 급여보다 높은 부서명과 그 부서의 최고 연봉자 구하기
select max(salary) from Emp;