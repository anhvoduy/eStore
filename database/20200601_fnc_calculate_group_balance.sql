DELIMITER $$
DROP FUNCTION IF EXISTS `fnc_calculate_group_balance`;
CREATE FUNCTION `fnc_calculate_group_balance`(p_group_id INT, p_date VARCHAR(50)) 
RETURNS DECIMAL(18,4)
    DETERMINISTIC
BEGIN
	DECLARE v_group_balance DECIMAL(18,4) DEFAULT 0;
	SELECT (u.total_debit + SUM(IF(t.task_type = "DNTU", t.amount, IF(t.task_type = "HTTU", -t.amount, 0)))) INTO v_group_balance
	FROM workflow.si_group g LEFT JOIN workflow.si_user u ON g.group_id = u.group_id LEFT JOIN workflow.task t ON u.email = t.author AND DATE_FORMAT(t.created, '%Y-%m-%d') <= STR_TO_DATE(p_date, '%d-%M-%Y')
    WHERE g.group_id = p_group_id;
	RETURN v_group_balance;
END$$
DELIMITER ;


