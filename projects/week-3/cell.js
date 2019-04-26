function drawCell(x, y){
    var value = cells[x][y];
    var style = value ? "rgb(156,255,0)" : "rgb(40,40,40)";
    ctx.fillStyle = style;
    ctx.fillRect(x * cellSize, y * cellSize,
        cellSize - 1, CellSize -1);
}