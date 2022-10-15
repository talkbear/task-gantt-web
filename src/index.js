import Gantt from 'frappe-gantt';

import 'frappe-gantt/dist/frappe-gantt.css'


const options = {
}

const tasks = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 20,
    dependencies: 'Task 2, Task 3',
    custom_class: 'bar-milestone' // optional
  }
];

var gantt = new Gantt("#app", tasks, {
  ...options
})


gantt.change_view_mode('Week') // Quarter Day, Half Day, Day, Week, Month 



var gantt = new Gantt('#gantt', tasks, {
	on_click: function (task) {
		console.log(task);
	},
	on_date_change: function(task, start, end) {
		console.log(task, start, end);
	},
	on_progress_change: function(task, progress) {
		console.log(task, progress);
	},
	on_view_change: function(mode) {
		console.log(mode);
	}
});


var gantt = new Gantt('#gantt', tasks, {
	// can be a function that returns html
	// or a simple html string
	custom_popup_html: function(task) {
	  // the task object will contain the updated
	  // dates and progress value
	  const end_date = task._end.format('MMM D');
	  return `
		<div class="details-container">
		  <h5>${task.name}</h5>
		  <p>Expected to finish by ${end_date}</p>
		  <p>${task.progress}% completed!</p>
		</div>
	  `;
	}
});


