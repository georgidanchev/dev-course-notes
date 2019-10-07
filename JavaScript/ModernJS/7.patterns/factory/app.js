/* eslint-disable func-names */

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '$5';
};
const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$15';
};
const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$25';
};

function MemberFactory() {
  this.createMember = (name, memType) => {
    // ref var.
    let member;

    // Check which and instantiate membership type.
    if (memType === 'simple') {
      member = new SimpleMembership(name);
    } else if (memType === 'standard') {
      member = new StandardMembership(name);
    } else if (memType === 'super') {
      member = new SuperMembership(name);
    }

    // Set member type to type we get
    member.memType = memType;

    // define member function
    member.define = function () {
      console.log(`${this.name} (${this.memType}) : ${this.cost}`);
    };

    // When called return member.
    return member;
  };
}

// Array for storing members.
const members = [];

// instantiate the member factory.
const factory = new MemberFactory();

// Add a bunch of members to the members array.
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Jane Jack', 'super'));
members.push(factory.createMember('Jack Williams', 'standard'));
members.push(factory.createMember('Tom Smith', 'standard'));
members.push(factory.createMember('Frank Dane', 'simple'));

// Log out each member.
members.forEach((member) => {
  member.define();
});
