CREATE TABLE `department` (
  `dept_id` varchar(20) NOT NULL,
  `dept_desc` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`dept_id`)
);


CREATE TABLE `invoices` (
  `invoice_no` varchar(30) NOT NULL,
  `invoice_date` date DEFAULT NULL,
  `invoice_value` decimal(22,3) DEFAULT NULL,
  `po_number` varchar(30) DEFAULT NULL,
  `payment_proof_ref` varchar(50) DEFAULT NULL,
  `offset_partner` varchar(20) DEFAULT NULL,
  `IVA` decimal(22,3) DEFAULT NULL,
  `SOFTEX` decimal(22,3) DEFAULT NULL,
  `credit_claim` decimal(22,3) DEFAULT NULL,
  `remarks` varchar(200) DEFAULT NULL,
  `project_id` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`invoice_no`)
);


CREATE TABLE `program` (
  `program_id` varchar(20) NOT NULL,
  `program_desc` varchar(200) DEFAULT NULL,
  `year` varchar(4) NOT NULL,
  `quarter` varchar(2) NOT NULL,
  `po_applied` varchar(1000) DEFAULT NULL,
  `invoices_applied` varchar(1000) DEFAULT NULL,
  `forecasted_val` decimal(22,3) DEFAULT NULL,
  `util_till_date` decimal(22,3) DEFAULT NULL,
  PRIMARY KEY (`program_id`,`year`,`quarter`)
);


CREATE TABLE `projects` (
  `project_id` varchar(20) NOT NULL,
  `project_desc` varchar(200) DEFAULT NULL,
  `vendor_id` varchar(20) DEFAULT NULL,
  `eligible_for_BDS` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
);


CREATE TABLE `purchase_order` (
  `po_number` varchar(30) NOT NULL,
  `po_date` date DEFAULT NULL,
  `po_value` decimal(22,3) DEFAULT NULL,
  `Received_by` varchar(20) DEFAULT NULL,
  `given_by` varchar(20) DEFAULT NULL,
  `type_of_txn` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`po_number`)
);


CREATE TABLE `role` (
  `role_id` varchar(20) NOT NULL,
  `role_detail` varchar(200) DEFAULT NULL,
  `actions` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
);


CREATE TABLE `transaction` (
  `transaction_id` varchar(20) NOT NULL,
  `transaction_start_time` datetime DEFAULT NULL,
  `created_by` varchar(20) DEFAULT NULL,
  `assigned_to` varchar(20) DEFAULT NULL,
  `assigned_vendor` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `latest_mod_date` datetime DEFAULT NULL,
  `last_updated_by` varchar(20) DEFAULT NULL,
  `latest_version` int(11) DEFAULT NULL,
  `remarks` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`)
);

CREATE TABLE `transaction_history` (
  `transaction_id` varchar(20) NOT NULL,
  `version`		int(11) NOT NULL,
  `transaction_start_time` datetime DEFAULT NULL,
  `created_by` varchar(20) DEFAULT NULL,
  `assigned_to` varchar(20) DEFAULT NULL,
  `assigned_vendor` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `latest_mod_date` datetime DEFAULT NULL,
  `last_updated_by` varchar(20) DEFAULT NULL,
  `latest_version` int(11) DEFAULT NULL,
  `remarks` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`,`version`)
);

CREATE TABLE `transaction_inv_map` (
  `transaction_id` varchar(20) NOT NULL,
  `invoice_no` varchar(30) NOT NULL,
  `invoice_details` varchar(200) DEFAULT NULL,
  `invoice_amount` decimal(22,3) DEFAULT NULL,
  `document_uploaded` varchar(200) DEFAULT NULL,
  `file_ref_frm_BC` varchar(200) DEFAULT NULL,
  `remarks` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`,`invoice_no`)
);


CREATE TABLE `transaction_po_map` (
  `transaction_id` varchar(20) NOT NULL,
  `po_number` varchar(30) NOT NULL,
  `po_details` varchar(200) DEFAULT NULL,
  `po_amount` decimal(22,3) DEFAULT NULL,
  `document_uploaded` varchar(200) DEFAULT NULL,
  `file_ref_frm_BC` varchar(200) DEFAULT NULL,
  `remarks` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`transaction_id`,`po_number`)
);


CREATE TABLE `user` (
  `user_id` varchar(20) NOT NULL,
  `user_desc` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `dept_id` varchar(20) DEFAULT NULL,
  `department_partner` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
);


CREATE TABLE `query` (
  `query_id` varchar(20) NOT NULL,
  `transaction_id` varchar(20) NOT NULL,
  `po_number` varchar(30) NOT NULL,
  `invoice_no` varchar(30) NOT NULL,
  `query_string` LONGTEXT DEFAULT NULL,
  `query_date` date DEFAULT NULL,
  `response_date` date DEFAULT NULL,
  `created_by` varchar(20) NOT NULL,
  `creation_date` date DEFAULT NULL,
  `updated_by` varchar(20) NOT NULL,
  `updation_date` date DEFAULT NULL,
  PRIMARY KEY (`query_id`)
);

CREATE TABLE `vendor_master` (
  `vendor_id` varchar(20) NOT NULL,
  `vendor_name` varchar(200) NOT NULL,
  PRIMARY KEY (`vendor_id`)
);
