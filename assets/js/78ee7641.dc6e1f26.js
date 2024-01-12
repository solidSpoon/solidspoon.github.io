"use strict";(self.webpackChunksolidspoon_site=self.webpackChunksolidspoon_site||[]).push([[8079],{4609:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var i=s(5893),l=s(1151);const d={slug:"win10-mysql-8-zip-version-building-gtid-based-master-slave-replication",title:"Win10 - MySQL 8 Zip \u7248 - \u642d\u5efa\u57fa\u4e8e GTID \u7684\u4e3b\u4ece\u590d\u5236",authors:["solidSpoon"],tags:["\u6559\u7a0b"]},r=void 0,c={permalink:"/blog/win10-mysql-8-zip-version-building-gtid-based-master-slave-replication",editUrl:"https://github.com/solidSpoon/solidSpoon.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2021/02-17-win10-mysql-8-zip-version-building-gtid-based-master-slave-replication/index.md",source:"@site/blog/2021/02-17-win10-mysql-8-zip-version-building-gtid-based-master-slave-replication/index.md",title:"Win10 - MySQL 8 Zip \u7248 - \u642d\u5efa\u57fa\u4e8e GTID \u7684\u4e3b\u4ece\u590d\u5236",description:"\u914d\u7f6e\u73af\u5883\uff1aWindows 10 - MySQL \u538b\u7f29\u7248",date:"2021-02-17T00:00:00.000Z",formattedDate:"2021\u5e742\u670817\u65e5",tags:[{label:"\u6559\u7a0b",permalink:"/blog/tags/\u6559\u7a0b"}],readingTime:4.955,hasTruncateMarker:!1,authors:[{name:"solidSpoon",title:"Maintainer of Hide",url:"https://github.com/solidSpoon",imageURL:"https://github.com/solidSpoon.png",key:"solidSpoon"}],frontMatter:{slug:"win10-mysql-8-zip-version-building-gtid-based-master-slave-replication",title:"Win10 - MySQL 8 Zip \u7248 - \u642d\u5efa\u57fa\u4e8e GTID \u7684\u4e3b\u4ece\u590d\u5236",authors:["solidSpoon"],tags:["\u6559\u7a0b"]},unlisted:!1,prevItem:{title:"Win10 - MySQL 8.0 - Docker \u642d\u5efa\u4e3b\u4ece\u590d\u5236",permalink:"/blog/win10-mysql-8-0-docker-building-master-slave-replication"},nextItem:{title:"Win10 - MySQL 8 Zip \u7248 - \u642d\u5efa\u4e3b\u4ece\u590d\u5236",permalink:"/blog/win10-mysql-8-zip-version-building-master-slave-replication"}},a={authorsImageUrls:[void 0]},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u51c6\u5907\u4e24\u4e2a MySQL \u670d\u52a1\u5b9e\u4f8b",id:"\u51c6\u5907\u4e24\u4e2a-mysql-\u670d\u52a1\u5b9e\u4f8b",level:2},{value:"\u4fee\u6539\u4e3b MySQL-8\u7684 <code>my.ini</code>",id:"\u4fee\u6539\u4e3b-mysql-8\u7684-myini",level:2},{value:"\u4fee\u6539\u4ece MySQL-8\u7684 <code>my.ini</code>",id:"\u4fee\u6539\u4ece-mysql-8\u7684-myini",level:2},{value:"\u521d\u59cb\u5316\u548c\u542f\u52a8\u6570\u636e\u5e93",id:"\u521d\u59cb\u5316\u548c\u542f\u52a8\u6570\u636e\u5e93",level:2},{value:"\u914d\u7f6e\u4e3b\u8282\u70b9",id:"\u914d\u7f6e\u4e3b\u8282\u70b9",level:2},{value:"\u4e3b\u8282\u70b9\u8bc1\u4e66\u6587\u4ef6",id:"\u4e3b\u8282\u70b9\u8bc1\u4e66\u6587\u4ef6",level:3},{value:"\u914d\u7f6e\u4ece\u8282\u70b9",id:"\u914d\u7f6e\u4ece\u8282\u70b9",level:2},{value:"\u9a8c\u8bc1\u64cd\u4f5c",id:"\u9a8c\u8bc1\u64cd\u4f5c",level:2},{value:"\u4e3b\u5e93",id:"\u4e3b\u5e93",level:3},{value:"\u4ece\u5e93",id:"\u4ece\u5e93",level:3},{value:"\u67e5\u770b\u547d\u4ee4",id:"\u67e5\u770b\u547d\u4ee4",level:2}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e\u73af\u5883\uff1aWindows 10 - MySQL \u538b\u7f29\u7248"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,i.jsx)(n.p,{children:"GTID \u662f\u5e72\u561b\u7684\uff1f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"GTID (Global Transaction IDentifier) \u662f\u5168\u5c40\u4e8b\u52a1\u6807\u8bc6\u3002\u5b83\u5177\u6709\u5168\u5c40\u552f\u4e00\u6027\uff0c\u4e00\u4e2a\u4e8b\u52a1\u5bf9\u5e94\u4e00\u4e2aGTID\u3002\u552f\u4e00\u6027\u4e0d\u4ec5\u9650\u4e8e\u4e3b\u670d\u52a1\u5668\uff0cGTID\u5728\u6240\u6709\u7684\u4ece\u670d\u52a1\u5668\u4e0a\u4e5f\u662f\u552f\u4e00\u7684\u3002\u4e00\u4e2aGTID\u5728\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u4ece\u800c\u907f\u514d\u91cd\u590d\u6267\u884c\u5bfc\u81f4\u6570\u636e\u6df7\u4e71\u6216\u4e3b\u4ece\u4e0d\u4e00\u81f4\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4f20\u7edf\u7684\u590d\u5236\u91cc\u9762\uff0c\u5f53\u53d1\u751f\u6545\u969c\u9700\u8981\u4e3b\u4ece\u5207\u6362\u65f6\uff0c\u670d\u52a1\u5668\u9700\u8981\u627e\u5230binlog\u548cpos\u70b9\uff0c\u7136\u540e\u5c06\u5176\u8bbe\u5b9a\u4e3a\u65b0\u7684\u4e3b\u8282\u70b9\u5f00\u542f\u590d\u5236\u3002\u76f8\u5bf9\u6765\u8bf4\u6bd4\u8f83\u9ebb\u70e6\uff0c\u4e5f\u5bb9\u6613\u51fa\u9519\u3002\u5728MySQL 5.6\u91cc\u9762\uff0cMySQL\u4f1a\u901a\u8fc7\u5185\u90e8\u673a\u5236\u81ea\u52a8\u5339\u914dGTID\u65ad\u70b9\uff0c\u4e0d\u518d\u5bfb\u627ebinlog\u548cpos\u70b9\u3002\u6211\u4eec\u53ea\u9700\u8981\u77e5\u9053\u4e3b\u8282\u70b9\u7684ip\uff0c\u7aef\u53e3\uff0c\u4ee5\u53ca\u8d26\u53f7\u5bc6\u7801\u5c31\u53ef\u4ee5\u81ea\u52a8\u590d\u5236\u3002\n",(0,i.jsx)(n.a,{href:"http://mysql.taobao.org/monthly/2020/05/09/",children:"http://mysql.taobao.org/monthly/2020/05/09/"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4f20\u7edf\u7684\u4e3b\u4ece\u590d\u5236\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u5728\u4ece\u5e93\u4e2d\u6307\u5b9a\u4e3b\u5e93\u7684 Log \u6587\u4ef6\u4e0e Position \uff0c\u5728\u57fa\u4e8e DTID \u7684\u4e3b\u4ece\u590d\u5236\u4e2d\uff0c\u4e0d\u9700\u8981\u8fd9\u4e00\u6b65\u9aa4\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u51c6\u5907\u4e24\u4e2a-mysql-\u670d\u52a1\u5b9e\u4f8b",children:"\u51c6\u5907\u4e24\u4e2a MySQL \u670d\u52a1\u5b9e\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"8.0 \u538b\u7f29\u7248\u4e0b\u8f7d\u5730\u5740\uff1a"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.16-winx64.zip",children:"https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.16-winx64.zip"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u89e3\u538b\u540e\u518d\u590d\u5236\u4e00\u4efd\uff0c\u5047\u8bbe\u547d\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"mysql-8.0.16-winx64"})," \u548c ",(0,i.jsx)(n.code,{children:"mysql-8.0.16-winx64-2"})]}),"\n",(0,i.jsxs)(n.h2,{id:"\u4fee\u6539\u4e3b-mysql-8\u7684-myini",children:["\u4fee\u6539\u4e3b MySQL-8\u7684 ",(0,i.jsx)(n.code,{children:"my.ini"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"mysql-8.0.16-winx64"})," \u76ee\u5f55\u4e0b\u6dfb\u52a0 my.ini \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"[mysqld]\nbasedir = ./\ndatadir = ./data\nport = 3306\nserver_id = 1\n\ngtid_mode=ON\nenforce-gtid-consistency\nsql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES \nlog_bin=mysql-bin\nbinlog-format=Row\n\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"\u4fee\u6539\u4ece-mysql-8\u7684-myini",children:["\u4fee\u6539\u4ece MySQL-8\u7684 ",(0,i.jsx)(n.code,{children:"my.ini"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4ece ",(0,i.jsx)(n.code,{children:"mysql-8.0.16-winx64-2"})," \u76ee\u5f55\u4e0b\u6dfb\u52a0 my.ini \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"[mysqld]\nbasedir = ./\ndatadir = ./data\nport = 3316\nserver_id = 2\n\ngtid_mode=ON\nenforce-gtid-consistency\nsql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES \nlog_bin=mysql-bin\nbinlog-format=Row\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u521d\u59cb\u5316\u548c\u542f\u52a8\u6570\u636e\u5e93",children:"\u521d\u59cb\u5316\u548c\u542f\u52a8\u6570\u636e\u5e93"}),"\n",(0,i.jsxs)(n.p,{children:["\u7a7a\u6570\u636e\u5e93\u9700\u8981\u521d\u59cb\u5316\uff0c\u5206\u522b\u5728\u4e24\u4e2a\u6570\u636e\u5e93\u7684 ",(0,i.jsx)(n.code,{children:"\\bin"})," \u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.jsx)(n.code,{children:"mysqld --initialize-insecure"})," \u8fdb\u884c\u521d\u59cb\u5316\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5206\u522b\u542f\u52a8\u4e3b\u548c\u4ece\uff0c\u5728\u4e24\u4e2a\u6570\u636e\u5e93\u7684 ",(0,i.jsx)(n.code,{children:"\\bin"})," \u76ee\u5f55\u4e0b\u76f4\u63a5\u6267\u884c ",(0,i.jsx)(n.code,{children:"mysqld"})," \u6216 ",(0,i.jsx)(n.code,{children:"start mysqld"})," \u547d\u4ee4\u5373\u53ef\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e\u4e3b\u8282\u70b9",children:"\u914d\u7f6e\u4e3b\u8282\u70b9"}),"\n",(0,i.jsxs)(n.p,{children:["\u7528 ",(0,i.jsx)(n.code,{children:"mysql"})," \u547d\u4ee4\u767b\u5f55\u5230\u4e3b\u8282\u70b9\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysql -uroot -P3306\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fdb\u5165\u540e\u6267\u884c\u4e0b\u9762\u547d\u4ee4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysql> CREATE USER 'repl'@'%' IDENTIFIED BY '123456';\nQuery OK, 0 rows affected (0.11 sec)\n\nmysql> GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%';\nQuery OK, 0 rows affected (0.12 sec)\n\nmysql> flush privileges;\nQuery OK, 0 rows affected (0.10 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u521b\u5efa\u6570\u636e\u5e93\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"create schema db;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4e3b\u8282\u70b9\u8bc1\u4e66\u6587\u4ef6",children:"\u4e3b\u8282\u70b9\u8bc1\u4e66\u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysql> SHOW GLOBAL VARIABLES LIKE 'caching_sha2_password_public_key_path';\n+---------------------------------------+----------------+\n| Variable_name                         | Value          |\n+---------------------------------------+----------------+\n| caching_sha2_password_public_key_path | public_key.pem |\n+---------------------------------------+----------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u6587\u4ef6\u5728\u521d\u59cb\u5316\u540e\u4f4d\u4e8e ",(0,i.jsx)(n.code,{children:"\\bin\\data"})," \u4e0b"]}),"\n",(0,i.jsxs)(n.p,{children:["\u56e0\u4e3a MySQL 8 \u9ed8\u8ba4\u662f\u7528 ",(0,i.jsx)(n.code,{children:"caching_sha2_password"})," \u505a\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u8fd9\u70b9\u4e0e MySQL 5 \u4e0d\u540c\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"error connecting to master 'repl@localhost:3306' - retry-time: 60 retries: 18 message: Authentication plugin 'caching_sha2_password' reported error: Authentication requires secure connection.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u6587\u4ef6\u5c31\u662f\u57fa\u4e8e\u9ed8\u8ba4\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"caching_sha2_password"})," \u4e0b\u7684\u901a\u8baf\u516c\u94a5\u6587\u4ef6\u3002\u9ed8\u8ba4\u60c5\u51b5\u670d\u52a1\u5668\u4e0d\u4f1a\u7ed9\u5ba2\u6237\u7aef\u53d1\u9001\uff0c\u6240\u4ee5\u9700\u8981\u62f7\u8d1d\u5230\u4ece\u8282\u70b9\u7684\u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u60f3\u62f7\u8d1d\u7684\u8bdd \uff1a"}),"\n",(0,i.jsxs)(n.p,{children:["MySQL 8.0 \u7684\u7248\u672c\u8981\u5728",(0,i.jsx)(n.strong,{children:"\u4ece\u6570\u636e\u5e93"}),"\u521d\u59cb\u8bbe\u7f6e\uff08CHANGE MASTER TO\uff09\u52a0\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"MASTER_PUBLIC_KEY_PATH = 'key_file_name'"})}),"\n",(0,i.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET_MASTER_PUBLIC_KEY = {0|1}"})}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e\u4ece\u8282\u70b9",children:"\u914d\u7f6e\u4ece\u8282\u70b9"}),"\n",(0,i.jsxs)(n.p,{children:["\u628a\u521a\u624d\u7684 ",(0,i.jsx)(n.code,{children:"public_key.pem"})," \u6587\u4ef6\u6539\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"master_public_key.pem"})," \u7136\u540e\u62f7\u8d1d\u5230\u4ece\u670d\u52a1\u5668\u7684 ",(0,i.jsx)(n.code,{children:"\\bin\\data"})," \u6587\u4ef6\u5939\u4e2d\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5939\u5728\u7528\u4e0a\u9762\u7684\u547d\u4ee4\u521d\u59cb\u5316\u4e4b\u540e\u624d\u6709\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"mysql"})," \u547d\u4ee4\u767b\u5f55\u5230\u4ece\u8282\u70b9\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysql -uroot -P3316\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"CHANGE MASTER TO\n    MASTER_HOST='localhost',  \n    MASTER_PORT = 3306,\n    MASTER_USER='repl',      \n    MASTER_PASSWORD='123456',   \n    MASTER_PUBLIC_KEY_PATH='master_public_key.pem',\n    MASTER_AUTO_POSITION = 1;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u91cc\u6709\u4e2a\u95ee\u9898\uff0cMySQL 8 \u4e0b\u9762\u4e0d\u9700\u8981\u521b\u5efa db \u3002\u5426\u5219\u4f1a\u62a5\u9519\u8bf4\u5df2\u7ecf\u5b58\u5728 db \u3002\n--\u521b\u5efa\u6570\u636e\u5e93\uff1acreate schema db;--"}),"\n",(0,i.jsxs)(n.p,{children:["\u76f4\u63a5\u5f00\u59cb\u6267\u884c\u540c\u6b65\n",(0,i.jsx)(n.code,{children:"start/stop slave;"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u9a8c\u8bc1\u64cd\u4f5c",children:"\u9a8c\u8bc1\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.h3,{id:"\u4e3b\u5e93",children:"\u4e3b\u5e93"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4e3b\u5e93\u6267\u884c\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysql> use db\nDatabase changed\nmysql> create table t1(id int);\nQuery OK, 0 rows affected (0.17 sec)\n\nmysql>\nmysql>\nmysql> insert into t1(id) values(1),(2);\nQuery OK, 2 rows affected (0.04 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4ece\u5e93",children:"\u4ece\u5e93"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4ece\u5e93\u67e5\u770b\u6570\u636e\u540c\u6b65\u60c5\u51b5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mysql> use db\nDatabase changed\nmysql>\nmysql>\nmysql> show tables;\n+--------------+\n| Tables_in_db |\n+--------------+\n| t1           |\n+--------------+\n1 row in set (0.00 sec)\n\nmysql>\nmysql>\nmysql> select * from t1;\n+------+\n| id   |\n+------+\n|    1 |\n|    2 |\n+------+\n2 rows in set (0.00 sec)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u67e5\u770b\u547d\u4ee4",children:"\u67e5\u770b\u547d\u4ee4"}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"show master status\\G"}),"\uff0c",(0,i.jsx)(n.code,{children:"show slave status\\G"})," \u67e5\u770b\u72b6\u6001\uff0c\u6216\u5b9a\u4f4d\u4e00\u4e9b\u95ee\u9898"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u80fd\u6539\u8fc7 ",(0,i.jsx)(n.code,{children:"stop slave;"})," \xa0",(0,i.jsx)(n.code,{children:"start slave;"})," \u6765\u505c\u6b62\u590d\u5236\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(7294);const l={},d=i.createContext(l);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);