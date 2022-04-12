import $ from "jquery"
import '@/css/index.css'
import '@/css/index.less'
import logo from './imges/1.png'

$(function() {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', 'red')
    $('img').attr('src', logo)
})
consle.log(4444);
// function info(target) {
//     target.info = 'Person info'

// }
// @info
// class Person {}
// console.log(Person.info);