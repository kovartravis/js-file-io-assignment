'use strict'

const fs = require('fs')
const {resolve} = require('path')

class Employee {
  constructor (name, title, salary) {
    this._name = name
    this._title = title
    this._salary = salary
  }

  set title(title){
    this._title = title
  }
  set salary(salary){
    this._salary = salary
  }
  get salary(){
    return this._salary
  }


  static parseFromFilePath(filepath){
    let input = JSON.parse(fs.readFileSync(filepath))
    return new Employee(input.name, input.title, input.salary)
  }

  promote(title, raise){
    this.title = title
    this.salary = this.salary + raise
  }
}

module.exports = {
  Employee
}
