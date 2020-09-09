'use strict';
const Excel = require('excel4node');

const ExcelHelper = function(){
}

ExcelHelper.prototype.exportFile = async function(res, header, filename){
	try
	{
		let workbook = new Excel.Workbook();
		let worksheet = workbook.addWorksheet('Sheet01');
		let style = workbook.createStyle({
			font: {
				color: '#3989bc',
				size: 12,
			},
			numberFormat: '$#,##0.00; ($#,##0.00); -',
		});
		// headers
		for(let i=1; i<header.length; i++){
			worksheet.cell(1, i).string(header[i-1]).style(style);
		}
		res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		res.setHeader("Content-Disposition", "attachment; filename=" + filename);
		return workbook.write(filename, res);
	}
	catch(err){
		throw err;
	}
};

module.exports = new ExcelHelper();