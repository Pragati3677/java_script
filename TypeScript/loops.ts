
class Student {

    name: string;
    marks: number[];
 
    constructor(name: string, marks: number[]) {
        this.name = name;
        this.marks = marks;
    }

    calculateResult(): void {
        let total: number = 0;

        
        for (let i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }

        let percentage: number = total / this.marks.length;

        console.log("Student Name:", this.name);
        console.log("Total Marks:", total);
        console.log("Percentage:", percentage + "%");
    }
}
let student1 = new Student("Pragati", [80, 75, 90]);
student1.calculateResult();