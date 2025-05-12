USE specialTopic;

CREATE TABLE AttendanceData
(
	PRIMARY KEY(ID_Attendance),

	-- 簽到記錄 ID，自動遞增
	ID_Attendance INT IDENTITY(1,1),
	-- 對應員工編號
	StaffID INT NOT NULL,
	-- 日期
	AttendanceDate DATE NOT NULL,
	-- 上班時間
	CheckInTime TIME,
	-- 下班時間
	CheckOutTime TIME,
	-- 狀態（正常、遲到、早退、缺勤、請假等）
	Status VARCHAR(32),
	-- 備註
	Note VARCHAR(255),
);




INSERT INTO attendanceData
	(
	StaffID, AttendanceDate, CheckInTime,CheckOutTime, Status, Note
	)
VALUES
	(1001, '2025-05-06', '08:59', '18:01', '正常', ''),
	(1002, '2025-05-06', '09:22', '18:00', '遲到', '公車誤點'),
	(1003, '2025-05-06', NULL, NULL, '請假', '事假'),
	(1004, '2025-05-06', '09:10', '17:30', '早退', '提前下班處理家事'),
	(1005, '2025-05-06', NULL, NULL, '缺勤', '未打卡'),
	(1001, '2025-05-07', '08:55', '18:02', '正常', '');
