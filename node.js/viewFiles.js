const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'), function(err, data) {
  if (err) return console.log(err);
  console.log('読み込んだファイルの内容');
  console.log(data);
});

//ファイル操作モジュールの追加
var fs = require('fs');

//ファイル読み込み関数
function readFile(path) {
  fs.readFile(path, 'utf8', function (err, data) {

    //エラーの場合はエラーを投げてくれる
    if (err) {
        throw err;
    }
    
    //ここに処理
    console.log(data);
  });
}

//使用例
readFile("test.txt");