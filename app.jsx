import student from './student.jsx'

function app() {
    return(
        <>
           <student name="spangebob"age={30} isstudent={true}/>
           <student name="patrick" age={42} isstudent={false}/>
           <student name="squidward" age={50} isstudent={false}/>
           <student name="sandy" age={27} isstudent={true}/>
           <student /> 
        </>
    );
}

export default app 