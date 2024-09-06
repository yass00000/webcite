function student(props){
    return(
        <div className="student">
            <p>name: {props.main}</p>
            <p>age:{props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}
student.proptypes = {
    name: proptypes.string,
    age:proptypes.number,
    isstudent: proptypes.bool,
}
student.defaulprops = {
    name: "guest",
    age: 0,
    isSttudent: false, 
}
export default student 