/** A todo list app
 * for javaScript beginners 
 * This program takes in an input and 
 * place it on the ordered list
 */

function todoList(){
    let item = document.getElementById('inputx').value;
    let text = document.createTextNode(item);
    let newItem = document.createElement('li');
    newItem.appendChild(text);
    document.getElementById('list').appendChild(newItem);
}