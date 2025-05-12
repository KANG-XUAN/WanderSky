USE specialTopic;

CREATE TABLE StaffData(PRIMARY KEY(ID_staff),
	ID_staff INT NOT NULL IDENTITY(1, 1),
	StaffID INT NOT NULL,				-- 員工編號
	StaffName VARCHAR(127) NOT NULL,	-- 員工姓名
	Gender VARCHAR(63) NOT NULL,		-- 性別
	DepartmentID INT NOT NULL,			-- 部門編號
	Department VARCHAR(63) NOT NULL,	-- 部門名稱
	Position VARCHAR(63) NOT NULL,		-- 職稱
	HireDate DATE NOT NULL,				-- 入職日期
	Salary INT NOT NULL,				-- 薪水
	Email VARCHAR(127) NOT NULL,		-- 郵箱
	Address VARCHAR(255) NOT NULL,		-- 地址
);


INSERT INTO StaffData (
    StaffID, StaffName, Gender, DepartmentID, Department, Position, 
    HireDate, Salary, Email, Address
) VALUES
(1001, '陳愛麗絲', '女', 1, '人力資源部', '人資經理', '2018-03-12', 72000, 'alice.chen@example.com', '台北市忠孝東路123號'),
(1002, '林柏', '男', 2, '財務部', '會計師', '2019-06-01', 65000, 'bob.lin@example.com', '台北市民生西路45號'),
(1003, '王凱茜', '女', 3, '資訊部', '軟體工程師', '2020-01-15', 80000, 'cathy.wang@example.com', '台中市仁愛路67號'),
(1004, '黃大衛', '男', 3, '資訊部', '系統分析師', '2017-11-20', 83000, 'david.huang@example.com', '高雄市成功路99號'),
(1005, '劉怡君', '女', 4, '行銷部', '行銷專員', '2021-09-10', 60000, 'emily.liu@example.com', '台南市文化路33號'),
(1006, '吳富朗', '男', 2, '財務部', '財務分析師', '2016-08-25', 70000, 'frank.wu@example.com', '台北市信義路101號'),
(1007, '李佳恩', '女', 1, '人力資源部', '招募專員', '2020-03-17', 58000, 'grace.lee@example.com', '台北市光復南路5號'),
(1008, '張亨利', '男', 5, '業務部', '業務經理', '2015-05-30', 90000, 'henry.chang@example.com', '高雄市中山北路28號'),
(1009, '高艾薇', '女', 4, '行銷部', '內容企劃', '2022-01-12', 55000, 'ivy.kao@example.com', '台中市和平東路12號'),
(1010, '蔡杰森', '男', 3, '資訊部', '維運工程師', '2021-07-23', 82000, 'jason.tsai@example.com', '台北市建國路89號'),
(1011, '許凱倫', '女', 2, '財務部', '預算分析師', '2020-11-05', 67000, 'karen.hsu@example.com', '新竹市松山路17號'),
(1012, '楊立奧', '男', 5, '業務部', '業務專員', '2018-10-18', 75000, 'leo.yang@example.com', '台南市大同路56號'),
(1013, '林美琪', '女', 1, '人力資源部', '人資助理', '2022-06-22', 53000, 'maggie.lin@example.com', '台北市民權路78號'),
(1014, '周南森', '男', 3, '資訊部', '前端工程師', '2019-12-02', 79000, 'nathan.chou@example.com', '高雄市安和路102號'),
(1015, '郭奧莉', '女', 4, '行銷部', 'SEO專員', '2020-08-14', 61000, 'olivia.kuo@example.com', '台中市大安路34號'),
(1016, '施彼得', '男', 5, '業務部', '業務代表', '2017-02-27', 68000, 'peter.shih@example.com', '台北市林森路66號'),
(1017, '謝昆妮', '女', 1, '人力資源部', '薪資分析師', '2019-09-09', 72000, 'queenie.hsieh@example.com', '新竹市新生路14號'),
(1018, '陳瑞安', '男', 3, '資訊部', '後端工程師', '2023-01-05', 84000, 'ryan.chen@example.com', '台北市市民大道22號'),
(1019, '葉珊蒂', '女', 2, '財務部', '稽核專員', '2021-04-19', 69000, 'sandy.yeh@example.com', '桃園市北平路90號'),
(1020, '方東銘', '男', 4, '行銷部', '品牌經理', '2016-07-28', 85000, 'tommy.fang@example.com', '台北市復興南路44號');
