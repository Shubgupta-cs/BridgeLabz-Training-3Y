const userArrow = {
    name: "Shubh",
    showName: () => {
        console.log(this.name);
    }
};

userArrow.showName();

const userNormal = {
    name: "Shubh",
    showName: function() {
        console.log(this.name);
    }
};

userNormal.showName();