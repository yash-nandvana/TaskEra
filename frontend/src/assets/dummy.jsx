import {
    User, Mail, Home,
    ListChecks,
    CheckCircle2, Lock, Home as HomeIcon, Flame,
    SortDesc, SortAsc, Award,
    Edit2,
    Trash2,
    MoreVertical,
    Clock,
    Calendar,
} from "lucide-react"

// BACKEND TEST 
// DUMMY DATA
const backendDummy = [
    {
        title: "Buy groceries",
        description: "Milk, bread, eggs, and spinach",
        priority: "Low",
        dueDate: "2025-05-02T18:00:00.000Z",
        completed: "No"
    },
    {
        "title": "Book dentist appointment",
        "description": "Routine check-up and cleaning",
        "priority": "Medium",
        "dueDate": "2025-05-10T10:00:00.000Z",
        "completed": true
    },
    {
        "title": "Book dentist appointment",
        "description": "Routine check-up and cleaning",
        "priority": "Medium",
        "dueDate": "2025-05-10T10:00:00.000Z",
        "completed": true
    },
    {
        "title": "Pay utility bills",
        "description": "Electricity and water bills for April",
        "priority": "High",
        "dueDate": "2025-04-28T12:00:00.000Z",
        "completed": "Yes"
    }
];

// FRONTEND DUMMY DATA

// assets/formConstants.js
export const baseControlClasses =
    "w-full px-4 py-2.5 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm";

export const priorityStyles = {
    Low: "bg-green-100 text-green-700 border-green-200",
    Medium: "bg-blue-100 text-blue-700 border-blue-200",
    High: "bg-cyan-100 text-cyan-700 border-cyan-200",
};

// data/defaultTask.js
export const DEFAULT_TASK = {
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
    completed: "No",
    id: null,
};

// LOGIN CSS
export const INPUTWRAPPER =
    "flex items-center border border-blue-100 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200"
export const BUTTON_CLASSES =
    "w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"

// PROFILE CSS
export const INPUT_WRAPPER =
    "flex items-center border border-blue-100 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200"
export const FULL_BUTTON =
    "w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
export const SECTION_WRAPPER = "bg-white rounded-xl shadow-sm border border-blue-100 p-6"
export const BACK_BUTTON =
    "flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors duration-200"
export const DANGER_BTN =
    "w-full text-red-600 border border-red-200 py-2.5 rounded-lg hover:bg-red-50 transition-colors duration-200"

export const personalFields = [
    { name: "name", type: "text", placeholder: "Full Name", icon: User },
    { name: "email", type: "email", placeholder: "Email", icon: Mail },
]

export const securityFields = [
    { name: "current", placeholder: "Current Password" },
    { name: "new", placeholder: "New Password" },
    { name: "confirm", placeholder: "Confirm Password" },
];

// SIDEBAR 
export const menuItems = [
    { text: "Dashboard", path: "/", icon: <Home className="w-5 h-5" /> },
    { text: "Pending Tasks", path: "/pending", icon: <ListChecks className="w-5 h-5" /> },
    { text: "Completed Tasks", path: "/complete", icon: <CheckCircle2 className="w-5 h-5" /> },
]

export const SIDEBAR_CLASSES = {
    desktop: "hidden md:flex flex-col fixed h-full w-20 lg:w-64 bg-white/90 backdrop-blur-sm border-r border-blue-100 shadow-sm z-20 transition-all duration-300",
    mobileButton: "absolute md:hidden top-25 left-5 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition",
    mobileDrawerBackdrop: "fixed inset-0 bg-black/40 backdrop-blur-sm",
    mobileDrawer: "absolute top-0 left-0 w-64 h-full bg-white/90 backdrop-blur-md border-r border-blue-100 shadow-lg z-50 p-4 flex flex-col space-y-6",
}

export const LINK_CLASSES = {
    base: "group flex items-center px-4 py-3 rounded-xl transition-all duration-300",
    active: "bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 text-blue-700 font-medium shadow-sm",
    inactive: "hover:bg-blue-50/50 text-gray-600 hover:text-blue-700",
    icon: "transition-transform duration-300 group-hover:scale-110 text-blue-500",
    text: "text-sm font-medium ml-2",
}

export const PRODUCTIVITY_CARD = {
    container: "bg-blue-50/50 rounded-xl p-3 border border-blue-100",
    header: "flex items-center justify-between mb-2",
    label: "text-xs font-semibold text-blue-700",
    badge: "text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full",
    barBg: "w-full h-2 bg-blue-200 rounded-full overflow-hidden",
    barFg: "h-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-pulse",
}

export const TIP_CARD = {
    container: "bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100",
    iconWrapper: "p-2 bg-blue-100 rounded-lg",
    title: "text-sm font-semibold text-gray-800",
    text: "text-xs text-gray-600 mt-1",
}

// SIGNUP 
export const FIELDS = [
    { name: "name", type: "text", placeholder: "Full Name", icon: User },
    { name: "email", type: "email", placeholder: "Email", icon: Mail },
    { name: "password", type: "password", placeholder: "Password", icon: Lock },
]

export const Inputwrapper =
    "flex items-center border border-blue-100 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200"
export const BUTTONCLASSES =
    "w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
export const MESSAGE_SUCCESS = "bg-green-50 text-green-600 p-3 rounded-lg text-sm mb-4 border border-green-100"
export const MESSAGE_ERROR = "bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100"

// TASK ITEM
export const getPriorityColor = (priority) => {
    const colors = {
        low: "border-green-500 bg-green-50/50 text-green-700",
        medium: "border-blue-500 bg-blue-50/50 text-blue-600",
        high: "border-cyan-800 bg-cyan-50/50 text-cyan-800",
    }
    return colors[priority?.toLowerCase()] || "border-gray-500 bg-gray-50/50 text-gray-700"
}

export const getPriorityBadgeColor = (priority) => {
    const colors = {
        low: "bg-green-100 text-green-900",
        medium: "bg-blue-100 text-blue-900",
        high: "bg-cyan-300 text-cyan-900",
    }
    return colors[priority?.toLowerCase()] || "bg-gray-100 text-gray-700"
}

// DASHBOARD
// UI Constants
export const WRAPPER = "p-4 md:p-6 min-h-screen overflow-hidden"
export const HEADER = "flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-3"
export const ADD_BUTTON =
    "flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 w-full md:w-auto justify-center text-sm md:text-base"
export const STATS_GRID = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6"
export const STAT_CARD =
    "p-3 md:p-4 rounded-xl bg-white shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300 min-w-0"
export const ICON_WRAPPER = "p-1.5 md:p-2 rounded-lg"
export const VALUE_CLASS = "text-lg md:text-2xl font-bold truncate"
export const LABEL_CLASS = "text-xs text-gray-500 truncate"

// Stats definitions
export const STATS = [
    { key: "total", label: "Total Tasks", icon: HomeIcon, iconColor: "bg-blue-100 text-blue-600", valueKey: "total", gradient: true },
    { key: "lowPriority", label: "Low Priority", icon: Flame, iconColor: "bg-green-100 text-green-600", borderColor: "border-green-100", valueKey: "lowPriority", textColor: "text-green-600" },
    { key: "mediumPriority", label: "Medium Priority", icon: Flame, iconColor: "bg-orange-100 text-orange-600", borderColor: "border-orange-100", valueKey: "mediumPriority", textColor: "text-orange-600" },
    { key: "highPriority", label: "High Priority", icon: Flame, iconColor: "bg-red-100 text-red-600", borderColor: "border-red-100", valueKey: "highPriority", textColor: "text-red-600" },
]

// Filter options
export const FILTER_OPTIONS = ["all", "today", "week", "high", "medium", "low"]
export const FILTER_LABELS = {
    all: "All Tasks",
    today: "Today's Tasks",
    week: "This Week",
    high: "High Priority",
    medium: "Medium Priority",
    low: "Low Priority",
}

// Empty state
export const EMPTY_STATE = {
    wrapper: "p-6 bg-white rounded-xl shadow-sm border border-blue-100 text-center",
    iconWrapper: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",
    btn: "px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-medium",
}

// Filter UI Constants
export const FILTER_WRAPPER = "flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
export const SELECT_CLASSES = "px-3 py-2 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 md:hidden text-sm"
export const TABS_WRAPPER = "hidden md:flex space-x-1 bg-blue-50 p-1 rounded-lg"
export const TAB_BASE = "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border"
export const TAB_ACTIVE = "bg-white text-blue-700 shadow-sm border"
export const TAB_INACTIVE = "text-gray-600 hover:bg-blue-100/50 border-transparent"


// COMPLETE TASK
export const SORT_OPTIONS = [
    { id: "newest", label: "Newest", icon: <SortDesc className="w-3 h-3" /> },
    { id: "oldest", label: "Oldest", icon: <SortAsc className="w-3 h-3" /> },
    { id: "priority", label: "Priority", icon: <Award className="w-3 h-3" /> },
]

// CSS class groups
export const CT_CLASSES = {
    page: "p-4 md:p-6 min-h-screen overflow-hidden",
    header: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-3 md:gap-4",
    titleWrapper: "flex-1 min-w-0",
    title: "text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 flex items-center gap-2 truncate",
    subtitle: "text-xs md:text-sm text-gray-500 mt-1 ml-7 md:ml-8",
    sortContainer: "w-full md:w-auto mt-2 md:mt-0",
    sortBox: "flex items-center justify-between bg-white p-2 md:p-3 rounded-xl shadow-sm border border-blue-100 w-full md:w-auto",
    filterLabel: "flex items-center gap-2 text-gray-700 font-medium",
    select: "px-2 py-1 md:px-3 md:py-2 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 md:hidden text-xs md:text-sm",
    btnGroup: "hidden md:flex space-x-1 bg-blue-50 p-1 rounded-lg ml-2 md:ml-3",
    btnBase: "px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1",
    btnActive: "bg-white text-blue-700 shadow-sm border border-blue-400",
    btnInactive: "text-gray-600 hover:text-blue-700 hover:bg-blue-100/50 border border-transparent",
    list: "space-y-3 md:space-y-4",
    emptyState: "p-4 md:p-8 bg-white rounded-xl shadow-sm border border-blue-100 text-center",
    emptyIconWrapper: "w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4",
    emptyTitle: "text-base md:text-lg font-semibold text-gray-800 mb-2",
    emptyText: "text-xs md:text-sm text-gray-500",
}

// constants/cssClasses.js
export const layoutClasses = {
    container: "p-6 min-h-screen overflow-hidden",
    headerWrapper: "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4",
    sortBox: "flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-blue-100 w-full md:w-auto",
    select: "px-3 py-2 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500 md:hidden text-sm",
    tabWrapper: "hidden md:flex space-x-1 bg-blue-50 p-1 rounded-lg ml-3",
    tabButton: (active) =>
        `px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${active
            ? "bg-white text-blue-700 shadow-sm border border-blue-300"
            : "text-gray-600 hover:text-blue-700 hover:bg-blue-100/50 border border-transparent"
        }`,
    addBox: "hidden md:block p-5 border-2 border-dashed border-blue-200 rounded-xl hover:border-blue-400 transition-colors cursor-pointer mb-6 bg-blue-50/50 group",
    emptyState: "p-8 bg-white rounded-xl shadow-sm border border-blue-100 text-center",
    emptyIconBg: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",
    emptyBtn: "px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-sm font-medium transition-colors",
};


// TASK ITEM
// Menu options for task actions
export const MENU_OPTIONS = [
    { action: "edit", label: "Edit Task", icon: <Edit2 size={14} className="text-blue-600" /> },
    { action: "delete", label: "Delete Task", icon: <Trash2 size={14} className="text-red-600" /> },
]

// CSS class groups for TaskItem
export const TI_CLASSES = {
    wrapper: "group p-4 sm:p-5 rounded-xl shadow-sm bg-white border-l-4 hover:shadow-md transition-all duration-300 border border-blue-100",
    leftContainer: "flex items-start gap-2 sm:gap-3 flex-1 min-w-0",
    completeBtn: "mt-0.5 sm:mt-1 p-1 sm:p-1.5 rounded-full hover:bg-blue-100 transition-colors duration-300",
    checkboxIconBase: "w-4 h-4 sm:w-5 sm:h-5",
    titleBase: "text-base sm:text-lg font-medium truncate",
    priorityBadge: "text-xs px-2 py-0.5 rounded-full shrink-0",
    description: "text-sm text-gray-500 mt-1 truncate",
    subtasksContainer: "mt-3 sm:mt-4 space-y-2 sm:space-y-3 bg-blue-50/30 p-2 sm:p-3 rounded-lg border border-blue-100",
    progressBarBg: "h-1.5 bg-blue-100 rounded-full overflow-hidden",
    progressBarFg: "h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300",
    rightContainer: "flex flex-col items-end gap-2 sm:gap-3",
    menuButton: "p-1 sm:p-1.5 hover:bg-blue-100 rounded-lg text-gray-500 hover:text-blue-700 transition-colors duration-200",
    menuDropdown: "absolute right-0 mt-1 w-40 sm:w-48 bg-white border border-blue-100 rounded-xl shadow-lg z-10 overflow-hidden animate-fadeIn",
    dateRow: "flex items-center gap-1.5 text-xs font-medium whitespace-nowrap",
    createdRow: "flex items-center gap-1.5 text-xs text-gray-400 whitespace-nowrap",
}
// APP.JSX
// const user = {
//       avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name || 'User')}&background=random`
//     };

