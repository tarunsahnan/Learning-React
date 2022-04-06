import Sample from "./component/Sample";

function App() {

  const data = [
    {
      title:"1.Learn JS",
      p: "JS is necessary for React. JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
      
    },
    {
      title:"2. Learn React",
      p: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components."
      
    },
    {
      title:"3. Handson",
      p: "After learning React, implement your learning by doing hands on proejcts."
      
    }
  ];


  return (
    <div>
      <Sample title={data[0].title} p={data[0].p} ></Sample>
      <Sample title={data[1].title} p={data[1].p} ></Sample>
      <Sample title={data[2].title} p={data[2].p} ></Sample>
    </div>
  );
}

export default App;
