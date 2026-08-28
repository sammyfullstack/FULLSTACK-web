import GrandChild from "./GrandChild"

function Child({name, age, course}) {
return (
  <h1>
    My name is {name}, I'm {age} years old, I'm learning{course} 
  </h1>
);
}

export default Child