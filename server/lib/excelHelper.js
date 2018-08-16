'use strict';
const Excel = require('excel4node');

const exportFile = function(res, data, filename){
	res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
	res.setHeader("Content-Disposition", "attachment; filename=" + filename);
	
	let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('Sheet01');
    let style = workbook.createStyle({
		font: {
			color: '#FF0800',
			size: 12,
		},
		numberFormat: '$#,##0.00; ($#,##0.00); -',
	});
	worksheet.cell(1, 1).number(100).style(style);
	worksheet.cell(1, 2).number(200).style(style);
	worksheet.cell(1, 3).formula('A1 + B1').style(style);
	worksheet.cell(2, 1).string('string').style(style);
    worksheet.cell(3, 1).bool(true).style(style).style({font: {size: 14}});
    return workbook.write(filename, res);
};

module.exports = {
    exportFile
};