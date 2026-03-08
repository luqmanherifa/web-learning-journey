DELIMITER $$
CREATE PROCEDURE sp_get_employee_hierarchy()
BEGIN
    WITH RECURSIVE employee_cte AS (
        SELECT
            e.employee_id,
            e.employee_name,
            e.employee_manager_id,
            0 AS path_level,
            CAST(e.employee_name AS CHAR(255)) AS path_hierarchy
        FROM tbl_employee e
        WHERE e.employee_manager_id IS NULL
        UNION ALL
        SELECT
            e.employee_id,
            e.employee_name,
            e.employee_manager_id,
            c.path_level + 1 AS path_level,
            CONCAT(c.path_hierarchy, '->', e.employee_name) AS path_hierarchy
        FROM tbl_employee e
        INNER JOIN employee_cte c
            ON e.employee_manager_id = c.employee_id
    )
    SELECT
        c.employee_id,
        c.employee_name,
        m.employee_name AS manager_name,
        c.path_level,
        CASE
            WHEN c.path_level = 0 THEN c.employee_name
            WHEN c.path_level = 1 THEN CONCAT('|__', c.employee_name)
            ELSE CONCAT(
                    REPEAT('     ', c.path_level - 1),
                    '|__',
                    c.employee_name
                )
        END AS employee_format,
        c.path_hierarchy
    FROM employee_cte c
    LEFT JOIN tbl_employee m
        ON c.employee_manager_id = m.employee_id
    ORDER BY c.path_hierarchy;
END $$
DELIMITER ;