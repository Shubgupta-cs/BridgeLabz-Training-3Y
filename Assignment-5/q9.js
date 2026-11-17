class PersonClass {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(`Name: ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    getBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const studentObj = new StudentClass("Shubh", "Computer Science");
studentObj.getName();
studentObj.getBranch();