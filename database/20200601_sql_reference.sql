-- Yêu cầu: tính công nợ cho tất cả nhân viên
SELECT u.full_name AS "Họ tên", u.total_debit AS "Số dư nợ ban đầu", sum(IF(t.task_type = "DNTU", t.amount, 0)) AS "Tổng tiền tạm ứng", 
        sum(IF(t.task_type = "HTTU", t.amount, 0)) AS "Tổng tiền hoàn ứng", 
        (u.total_debit + sum(IF(t.task_type = "DNTU", t.amount, 0)) - sum(IF(t.task_type = "HTTU", t.amount, 0))) AS "Số dư nợ cuối kỳ"
FROM workflow.si_user u LEFT JOIN workflow.task t ON u.email = t.author 
GROUP BY u.email

-- Yêu cầu: tính công nợ cho tất cả phòng ban
SELECT g.name AS "Phòng ban" ,sum(IF(t.task_type = "DNTU", t.amount, 0)) AS "Tổng tiền tạm ứng", 
        sum(IF(t.task_type = "HTTU", t.amount, 0)) AS "Tổng tiền hoàn ứng", 
        (u.total_debit + sum(IF(t.task_type = "DNTU", t.amount, 0)) - sum(IF(t.task_type = "HTTU", t.amount, 0))) AS "Số dư nợ cuối kỳ"
FROM workflow.task t RIGHT JOIN workflow.si_user u ON u.email = t.author LEFT JOIN workflow.si_group g ON g.group_id = u.group_id 
GROUP BY g.name;