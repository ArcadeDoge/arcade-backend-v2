ALTER TABLE tbl_history ADD block_number INT(11) NOT NULL AFTER block_timestamp;
ALTER TABLE tbl_history CHANGE block_timestamp block_timestamp BIGINT(13) NULL;
ALTER TABLE tbl_history CHANGE gamepoint_amount gamepoint_amount VARCHAR(32) NULL DEFAULT NULL;