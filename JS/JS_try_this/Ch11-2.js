// p.154
/*
다음 코드를 올바르게 수정하시오. (1초 후에 강아지의 이름을 출력)

const dog = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName, 1000);
  }
};

dog.whatsYourName();
*/

//---------bind---------

const dog1 = {
  name: "Maxx",
  showMyName() {
    console.log(`a) My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(this), 1000);
  },
};

dog1.whatsYourName();

// ---------arrow function---------

const dog2 = {
  name: "Maxx",
  showMyName() {
    console.log(`b) My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(() => this.showMyName(), 1000);
  },
};

dog2.whatsYourName();

// ---------self---------

const dog3 = {
  name: "Maxx",
  showMyName() {
    console.log(`c) My name is ${this.name}.`);
  },
  whatsYourName() {
    const self = this;
    setTimeout(function () {
      self.showMyName();
    }, 1000);
  },
};

dog3.whatsYourName();

const dog4 = {
  name: "Maxx",
  showMyName() {
    console.log(`d) My name is ${this.name}.`);
  },
  whatsYourName() {
    const self = this;
    setTimeout(() => {
      self.showMyName();
    }, 1000);
  },
};

dog4.whatsYourName();

const dog5 = {
  name: "Maxx",
  showMyName() {
    console.log(`e) My name is ${this.name}.`);
  },

  whatsYourName() {
    const self = this;
    console.log(self);
    setTimeout(function () {
      self.showMyName();
    }, 1000);
  },
};

dog5.whatsYourName();
