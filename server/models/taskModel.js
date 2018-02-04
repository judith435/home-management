function Task(task) {
    this.id = task['id'];
    this.description = task['description'];
    this.createDate = task['createDate'];
    this.nickname = task['nickname'];

}

module.exports.Task = Task;

