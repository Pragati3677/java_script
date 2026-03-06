var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.calculateResult = function () {
        var total = 0;
        for (var i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }
        var percentage = total / this.marks.length;
        console.log("Student Name:", this.name);
        console.log("Total Marks:", total);
        console.log("Percentage:", percentage + "%");
    };
    return Student;
}());
var student1 = new Student("Pragati", [80, 75, 90]);
student1.calculateResult();
