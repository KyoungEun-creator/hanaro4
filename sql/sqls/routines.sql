use hana4db;

desc Subject;

select * from Subject;
update Subject set prof = null where id = 3;

select s.*, ifnull(p.name, '부재중') as profName
  from Subject s left join Prof p on s.prof = p.id;
  
-- Prof 테이블에 subjectCnt 칼럼 추가, Subject 테이블의 Trigger를 이용하여 교수별 과목수 관리하라.
insert into Subject(name, prof) values ('김교수과목2', 1), ('박교수과목2', 2);
select * from Subject;
select * from Prof;
-- 1)
alter table Prof add column subjectCnt tinyint unsigned not null default 0 comment '담당과목수';
-- 2)
select goup_concat(id), prof, count(*) cnt from Subject group by prof;

update Prof p inner join (select group_concat(id), prof, count(*) cnt
                                             from Subject group by prof) sub
					 on p.id = sub.prof
			set p.subjectCnt = sub.cnt; 