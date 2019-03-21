var width = 10;
var height = 10;


// draw rows
function drawRows(rowWidth)
	{
	var cell = []
	for (var i = 0; i < rowWidth; i++)
		{
		cell.push(false);
		}
	return cell;
	}




function drawGrid()
	{
	var grid = [];
	for (var i = 0; i < height ; i++)
		{
		grid.push(drawRows(width));
		}
	return grid;
	}

console.log(drawGrid())