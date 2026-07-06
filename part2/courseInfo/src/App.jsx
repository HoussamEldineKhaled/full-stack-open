

import Header from "./components/Courses"
import Part from "./components/Courses"
import Total from "./components/Courses"
import  Content  from "./components/Courses";
import Course from "./components/Courses"

const App = () => {
  const course = [{ 
    id: 1,
    name:  'Half Stack application development',
    parts :[{
      id: 1,
      name: 'Fundamentals of React',
      exercises: 10
    }
    ,
    {
      id: 2,
      name: 'Using props to pass data',
      exercises: 7
    }
    ,
    {
      id: 3,
      name: 'State of a component',
      exercises: 14
    },
    {
      id: 4,
      name: "Redux",
      exercises: 11
    }
    ],

  },
  {
    id: 2,
    name: 'Node.js',
    parts: 
    [
      {
        id: 1,
        name: 'Routing',
        exercises: 3
      },
      {
        id: 2,
        name: 'Middlewares',
        exercises: 7
      }
    ]
  }
]
  return (
    <div>
      {course.map(c => <Course key={c.id} course={c}/>)}
    </div>
  );
}

export default App;