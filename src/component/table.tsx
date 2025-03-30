import React, { useState } from "react";
import '../styles/table.css';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";


const TableFooter =()=> {
	const isMobile = useMediaQuery('(max-width:600px)');

	return(
		<Box
			sx={{
				display: 'flex',
				flexDirection: isMobile ? 'column' :'row',
				mt: 3,
				ml: 0.5
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="4" cy="4" r="4" fill="#5CC670" />
				</svg>

				<Typography 
					color='textDisabled'
					sx={{
						fontFamily: 'Kinetika, sans-serif',
						fontWeight: 400,
						fontSize: '12px',
						lineHeight: '1',
						letterSpacing: '0px',
						textTransform: 'uppercase',
						ml: 1
					}}
				>
					стандартные размеры (всегда в наличии)
				</Typography>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					ml: isMobile ? 0 : 5,
					mt: isMobile ? 1 : 0
				}}
			>
				<svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="4" cy="4" r="3.5" fill="white" stroke="#E2E2E2"/>
				</svg>


				<Typography 
					color='textDisabled'
					sx={{
						fontFamily: 'Kinetika, sans-serif',
						fontWeight: 400,
						fontSize: '12px',
						lineHeight: '1',
						letterSpacing: '0px',
						textTransform: 'uppercase',
						ml: 1
					}}
				>
					Нестандартные размеры (под заказ)
				</Typography>
			</Box>
		</Box>
	);
}


/**
 * Функция делает расчет чем заполнить таблицу
 * Это функция зашлушка так как не известен источник данных
 */
const calculateSum = (row, col) => row + col;


// todo: связать стили через styled component с цветами из темы
export default function ({ onChange })  {
	const [colLabels, setColLabels] = useState([]);
	const [rowLabels, setRowLabels] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);
	const [hoveredCol, setHoveredCol] = useState(null);
	const [selectedCell, setSelectedCell] = useState(null);


	const handlerClickCell =(row, col)=> {
		onChange && onChange(row, col, calculateSum(row, col));
		setSelectedCell({ row, col });
	}
	const arrayFill = (start = 100, end = 1000, step = 50) => {
		const result = [];

		for (let i = start; i <= end; i += step) {
		  	result.push(i);
		}
		return result;
	}
	React.useEffect(()=> {
		const cols = arrayFill(100, 1000, 50);
    	const rows = arrayFill(100, 1200, 50);

		setColLabels(cols);
    	setRowLabels(rows);
	}, []);
	

	return (
		<Box id="table">
			<div className="table-container">
				<table className="price-table">
					<thead>
						<tr>
							{/* первая ячейка */}
							<th style={{backgroundColor: 'white'}}>

							</th>
							{/* первая строка (с шириной) */}
							{ colLabels.map((col, index) => (
								<th key={index}>
									{ col }
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{rowLabels.map((row, rowIndex) => (
							<tr
								key={rowIndex}
								onMouseEnter={() => setHoveredRow(rowIndex)}
								onMouseLeave={() => setHoveredRow(null)}
							>
								{/* первый столбец (с высотой) */}
								<td style={{
										backgroundColor: '#f4f4f4',
										fontWeight: 'bold',
										
									}}
								>
									{ row }
								</td>

								{ colLabels.map((col, colIndex) => {
									const isHoveredRow = hoveredRow === rowIndex && colIndex <= hoveredCol;
									const isHoveredCol = hoveredCol === colIndex && rowIndex <= hoveredRow;
									const isSelected = selectedCell?.row === row && selectedCell?.col === col;

									const selectedRowIndex = selectedCell ? rowLabels.indexOf(selectedCell.row) : -1;
                                    const selectedColIndex = selectedCell ? colLabels.indexOf(selectedCell.col) : -1;

                                    // Выделяются ТОЛЬКО ячейки ДО пересечения
                                    const isSelectedRow = selectedCell && rowIndex === selectedRowIndex && colIndex <= selectedColIndex;
                                    const isSelectedCol = selectedCell && colIndex === selectedColIndex && rowIndex <= selectedRowIndex;
									
									return (
										<td
											key={colIndex}
											onClick={() => handlerClickCell(row, col)}
											onMouseEnter={() => setHoveredCol(colIndex)}
											onMouseLeave={() => setHoveredCol(null)}
											className={`
													${isHoveredRow ? "highlight-row" : ""} 
                                                    ${isHoveredCol ? "highlight-col" : ""} 
                                                    ${isHoveredRow && isHoveredCol ? "highlight-intersection" : ""} 
													${isSelectedRow ? "selected-row" : ""} 
                                                	${isSelectedCol ? "selected-col" : ""}
													${isSelected ? "selected-cell" : ""}
												`}
										>
											{ calculateSum(row, col) }₽
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<TableFooter />
		</Box>
	);
}