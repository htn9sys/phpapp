<?php

namespace App\Http\Controllers;

use App\Models\TestModel;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        $model = new TestModel();

        // ゲームの状態をセッションから復元
        if (session()->has('game')) {
            $model = session('game');
        }

        $score = $model->getScore();
        $blocks = $model->getBlocks();

        return view('test.index', [
            'score' => $score,
            'blocks' => $blocks,
        ]);
    }
}
