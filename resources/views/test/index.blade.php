<!DOCTYPE html>
<html>
<head>
    <title>テストゲーム</title>
    <style>
        /* ゲーム画面のスタイル */
        #game {
            width: 400px;
            height: 300px;
            border: 1px solid #000;
            position: relative;
            overflow: hidden;
        }
        #paddle {
            width: 80px;
            height: 10px;
            background-color: #000;
            position: absolute;
            bottom: 0;
            left: 160px;
        }
        #ball {
            width: 10px;
            height: 10px;
            background-color: #f00;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
        }
        .block {
            width: 50px;
            height: 20px;
            background-color: #00f;
            position: absolute;
            top: 20px;
            left: 20px;
        }
    </style>
</head>
<body>
    <h1>テストゲーム</h1>
    <div id="game">
        <div id="paddle"></div>
        <div id="ball"></div>
        <!-- ブロックを表示 -->
        

    <!-- JavaScriptファイルの読み込み -->
    <script src="{{ asset('js/test.js') }}"></script>
</body>
</html>