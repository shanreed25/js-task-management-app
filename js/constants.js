// The fixed lists of options the app uses. Keeping them in one file means
// adding a new category or status only takes one change.

// CATEGORIES[0] is the default the form goes back to after a task is added
export const CATEGORIES = ["General", "Personal", "Work"];

// STATUSES[0] is the default the form goes back to after a task is added
export const STATUSES = ["Not Started", "In Progress", "Paused", "Done"];

// The filter dropdowns use the same lists with "All" added at the front.
// Building them from the lists above keeps the two from getting out of sync.
export const FILTER_CATEGORIES = ["All", ...CATEGORIES];
export const FILTER_STATUSES = ["All", ...STATUSES];