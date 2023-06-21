<?php
class TestModel
{
    private $score;
    private $blocks;

    public function __construct()
    {
        $this->score = 0;
        $this->blocks = array();

        // ブロックの配置
        for ($i = 0; $i < 6; $i++) {
            for ($j = 0; $j < 8; $j++) {
                $top = 20 + ($i * 30);
                $left = 20 + ($j * 55);
                $this->blocks[] = array('top' => $top, 'left' => $left);
            }
        }
    }

    public function updateScore($points)
    {
        $this->score += $points;
    }

    public function getScore()
    {
        return $this->score;
    }

    public function getBlocks()
    {
        return $this->blocks;
    }
}