USE specialTopic;

SELECT
	StaffData.StaffID,
	StaffData.StaffName,
	AttendanceData.CheckInTime,
	AttendanceData.CheckOutTime
FROM StaffData
INNER JOIN AttendanceData
ON StaffData.staffID=AttendanceData.staffID;