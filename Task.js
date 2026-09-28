class Task {
    constructor(title) {
        this.title = title;
    }
    done = false;

    complete() {
        this.done = true;
    }
    toString() {
        if (this.done == true) {
            return "[x] " + this.title
        } else {
            return "[ ] " + this.title
        }
    }
}

class TodoList {
    tasksArray = [];
    add(title) {
        this.tasksArray.push(new Task(title))
    }
    complete(index) {
        this.tasksArray[index].done = true
    }
    print() {
        this.tasksArray.forEach((item) => {
            console.log(item.toString())
        });
    }
    countDone() {
        count = 0;
        this.tasksArray.forEach((item) => {
            if (item.done) {
                count++;
            }
        });

        console.log(count)
    }
}

todo = new TodoList()
todo.add("Тест")
todo.add("Плохой тест")
todo.complete(0)
todo.print()