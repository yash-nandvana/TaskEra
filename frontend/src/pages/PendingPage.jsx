import React, { useMemo, useState } from "react";
import { layoutClasses, SORT_OPTIONS } from "../assets/dummy";
import { Clock, Filter, ListChecks, Plus } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import Taskitems from "../components/Taskitems";
import Taskmodel from "../components/Taskmodel";

const PendingPage = () => {
  const { tasks = [], refreshTasks } = useOutletContext();
  const [sortBy, setSortBy] = useState("newest");
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const sortedPendingTasks = useMemo(() => {
    const filtered = tasks.filter(
      (t) =>
        !t.completed ||
        (typeof t.completed === "string" && t.completed.toLowerCase() === "No")
    );
    return filtered.sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "oldest")
        return new Date(a.createdAt) - new Date(b.createdAt);
      const order = { high: 3, medium: 2, low: 1 };
      return order[b.priority.toLowerCase()] - order[a.priority.toLowerCase()];
    });
  }, [tasks, sortBy]);

  return (
    <div className={layoutClasses}>
      <div className={layoutClasses.headerWrapper}>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <ListChecks className="text-blue-500" /> Pending Task
          </h1>
          <p className="text-sm text-gray-500 mt-1 ml-7">
            {sortedPendingTasks.length} task
            {sortedPendingTasks.length !== 1 && "s"} needing your attention
          </p>
        </div>

        <div className={layoutClasses.sortBox}>
          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <Filter className="w-4 h-4 text-blue-500" />
            <span className="text-sm">Sort by:</span>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={layoutClasses.select}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="priority">By Priority</option>
          </select>

          <div className={layoutClasses.tabWrapper}>
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSortBy(opt.id)}
                className={layoutClasses.tabButton(sortBy === opt.id)}
              >
                {opt.icon}
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={layoutClasses.addBox} onClick={() => setShowModel(true)}>
        <div className="flex items-center justify-center gap-3 text-gray-500 group-hover:text-blue-600 transition-colors">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200 ">
            <Plus className="text-blue-500" size={18} />
          </div>
          <span className="font-medium">Add New Task</span>
        </div>
      </div>

      <div className="space-y-4">
        {sortedPendingTasks.length === 0 ? (
          <div className={layoutClasses.emptyState}>
            <div className="mx-w-25 mx-auto py-6">
              <div className={layoutClasses.emptyIconBg}>
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                All caught up!
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                No pending tasks - great work!
              </p>
              <button
                onClick={() => setShowModel(true)}
                className={layoutClasses.emptyBtn}
              >
                Create New Task
              </button>
            </div>
          </div>
        ) : (
          sortedPendingTasks.map((task) => (
            <Taskitems
              key={task._id || task.id}
              task={task}
              showCompleteCheckbox
              onDelete={() => handleDelete(task._id || task.id)}
              onToggleComplete={() =>
                handleToggleComplete(task._id || task.id, t.completed)
              }
              onEdit={() => {
                setSelectedTask(task);
                setShowModel(true);
              }}
              onRefresh={refreshTasks}
            />
          ))
        )}
      </div>

      <Taskmodel
        isOpen={!!selectedTask || showModel}
        onClose={() => {
          setShowModel(false);
          setSelectedTask(null);
          refreshTasks();
        }}
        taskToEdit={setSelectedTask}
      />
    </div>
  );
};

export default PendingPage;
