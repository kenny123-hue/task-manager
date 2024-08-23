<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return TaskResource::collection(Task::all());
    }

    public function show($id)
    {
        return new TaskResource(Task::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $task = Task::create($request->all());
        return new TaskResource($task);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $task = Task::findOrFail($id);
        $task->update($request->all());
        return new TaskResource($task);
    }

    public function complete($id)
    {
        $task = Task::findOrFail($id);
        $task->update(['is_completed' => true]);
        return new TaskResource($task);
    }

    public function destroy($id)
    {
        Task::findOrFail($id)->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}

