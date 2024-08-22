<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Resources\TaskResource;

class TaskController extends Controller
{
    public function index() {
        return TaskResource::collection(Task::all());
    }

    public function show($id) {
        return new TaskResource(Task::findOrFail($id));
    }

    public function store(Request $request) {
        $task = Task::create($request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]));
        return new TaskResource($task);
    }

    public function update(Request $request, $id) {
        $task = Task::findOrFail($id);
        $task->update($request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]));
        return new TaskResource($task);
    }

    public function complete($id) {
        $task = Task::findOrFail($id);
        $task->update(['is_completed' => true]);
        return new TaskResource($task);
    }

    public function destroy($id) {
        Task::destroy($id);
        return response()->json(null, 204);
    }
}

