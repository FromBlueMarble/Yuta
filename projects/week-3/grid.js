var GRID_width = 10;
var GRID_height = 10;


function createRows(numberOfRows)
	{
	var row = []
	for (var i = 0; i < numberOfRows; i++)
		{
		row.push([]);
		}
	return row;
	}





function createColumns(numberOfCols, rowSize)
	{
	var cols = [];
	for (var i = 0; i < numberOfCols ; i++)
		{
		cols.push(createRows(rowSize));
		}
	return cols;
	}


function drawBoard(width, height)
	{
	return createColumns(height,height);
	}

//make our board
var board = drawBoard(GRID_width, GRID_height)
console.log(board);




function lookAt(x,y)
	{
	return board[x][y];
	}

function setAt(x,y,value)
	{
	board[x][y] = value;
	}

function neighbourAbove(x,y)
	{
	return lookAt(x,y-1);
	}

function neighbourBelow(x,y)
	{

	}

function neighbourLeft(x,y)
	{
	return (lookAt(x-1,y));
	}

function neighbourRight(x,y)
	{

	}

function countNeighbours(x,y)
	{
	}



function setAlltoAlive()
	{
	for (var i = 0; i < board.length; i++)
		{
		for (var x = 0; x < board[i].length; x++)
			{
			setAt(i,x,true);
			}
		}
	}

function setAlltoDead()
	{
	for (var i = 0; i < board.length; i++)
		{
		for (var x = 0; x < board[i].length; x++)
			{
			setAt(i,x,false);
			}
		}
	}

function setAlltoRandom()
	{
	for (var i = 0; i < board.length; i++)
		{
		for (var x = 0; x < board[i].length; x++)
			{
			setIndividualRandom(i,x);
			}
		}
	}
function setIndividualAlive(x,y)
	{
	setAt(x,y,true);
	}

function setIndividualDead(x,y)
	{
	setAt(x,y,false);
	}
function setIndividualRandom(x,y)
	{
	var rnd = Math.floor(Math.random() * 2) + 1 ;
	if (rnd === 1)
		{
		setAt(x,y,true);
		}
	else
		{
		setAt(x,y,false);
		}
	}





setAt(1,1, true);
console.log(board);

console.log(neighbourAbove(1,2));
console.log(neighbourLeft(2,1));