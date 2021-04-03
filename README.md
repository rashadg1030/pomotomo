# pomotomo

Pomotomo is an example pomodoro app for displaying the features of Alpine.js and Spruce.

## Features

In Pomodoro, *tasks* are the base unit of data. A task is a data object that has a title, a description of the task, the length of the work periods (in minutes) for the task, and the length of the rest periods (in minutes) for the task. A task may take any number of work and rest periods to complete.

A task in one of three possible states at any given time:

1. Todo

  Tasks that are to be done go here. You can rearrange the order of tasks here using drag-and-drop.

2. Current

  This is the current task. The current task card will show the title and description, and also the length of the work and rest periods in minutes for this task. The current task has two stages:

  - Working period represented by a yellow timer

  - Rest period represented by a pink timer

  You can mark a task as done at anytime. Once the done button is checked, it will be moved to the done section.

  Pressing the restart button will only reset the timer for the period you're currently in.

3. Done

Tasks that are marked done are moved here.
