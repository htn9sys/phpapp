window.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById('game');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const paddle = {
    x: gameContainer.clientWidth / 2 - 50,
    y: gameContainer.clientHeight - 20,
    width: 100,
    height: 10,
    speed: 5
  };

  const ball = {
    x: gameContainer.clientWidth / 2,
    y: gameContainer.clientHeight - 30,
    dx: 2,
    dy: -2,
    radius: 5
  };

  const blocks = [];

  canvas.width = gameContainer.clientWidth;
  canvas.height = gameContainer.clientHeight;

  gameContainer.appendChild(canvas);

  // パドルの移動イベントハンドラ
  function movePaddle(event) {
    const rect = canvas.getBoundingClientRect();
    paddle.x = event.clientX - rect.left - paddle.width / 2;
  }

  // ブロックの生成
  function createBlocks() {
    const blockRowCount = 3;
    const blockColumnCount = 6;
    const blockWidth = 50;
    const blockHeight = 20;
    const blockPadding = 10;
    const blockOffsetTop = 20;
    const blockOffsetLeft = (canvas.width - (blockWidth + blockPadding) * blockColumnCount) / 2;

    for (let r = 0; r < blockRowCount; r++) {
      for (let c = 0; c < blockColumnCount; c++) {
        const blockX = c * (blockWidth + blockPadding) + blockOffsetLeft;
        const blockY = r * (blockHeight + blockPadding) + blockOffsetTop;
        blocks.push({ x: blockX, y: blockY, width: blockWidth, height: blockHeight });
      }
    }
  }

  // ゲームの描画
  function draw() {
    // ゲーム画面をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // パドルを描画
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.closePath();

    // ボールを描画
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#f00';
    ctx.fill();
    ctx.closePath();

    // ブロックを描画
    blocks.forEach(block => {
      ctx.beginPath();
      ctx.rect(block.x, block.y, block.width, block.height);
      ctx.fillStyle = '#00f';
      ctx.fill();
      ctx.closePath();
    });
  }

  // ゲームの更新
  function update() {
    // ボールの移動
    ball.x += ball.dx;
    ball.y += ball.dy;

    // パドルとボールの衝突判定
    if (
      ball.y + ball.dy > canvas.height - ball.radius - paddle.height &&
      ball.x > paddle.x &&
      ball.x < paddle.x + paddle.width
    ) {
      ball.dy = -ball.dy;
    }

    // ブロックとボールの衝突判定
    blocks.forEach(block => {
      if (
        ball.x > block.x &&
        ball.x < block.x + block.width &&
        ball.y + ball.dy > block.y &&
        ball.y + ball.dy < block.y + block.height
      ) {
        ball.dy = -ball.dy;
      }
    });
  }

  // ゲームのメインループ
  function gameLoop() {
    draw();
    update();

    requestAnimationFrame(gameLoop);
  }

  createBlocks();
  gameLoop();

  document.addEventListener('mousemove', movePaddle);
});
