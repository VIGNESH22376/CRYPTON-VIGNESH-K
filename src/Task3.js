
import './Task3.css';

function Task3() {
  return (
    <div className="main-container-div">

      <div className="main-heading-div">
        <span className="main-heading">My Courses</span>
        <span className="main-small-heading">View All</span>
      </div>

      <table className="Table">

        {/* Heading row  */}
        <tr className="Table-row">
          <th className="table-heading">Course Name</th>
          <th className="table-heading">Start Date</th>
          <th className="table-heading">Lesson Completed</th>
          <th className="table-heading">Duration</th>
        </tr>

        {/* First Row  */}
        <tr>
          <td className="table-column ">
            <div className="icon-div">
              <i className="fa-solid fa-layer-group icon3"></i>

              <div className="course-div">
                <h4 className="Course-heading">Basic Algorithm</h4>
                <span className="Course-span">25 Lessons</span>
            </div>
            </div>
          </td>

          <td className="table-column table-column-text">27 Jan,2023</td>
          <td className="table-column table-column-text">10<span style={{color:'gray'}}>/25</span> (48%)</td>
          <td className="table-column table-column-text">14h 38m 56s</td>
        </tr>

        {/* Second Row  */}
        <tr>
          <td className="table-column">
            <div className="icon-div">
            <i className="fa-solid fa-arrows-left-right icon3" style={{color:'rgb(1, 1, 177)',background:'rgb(104, 104, 225)'}}></i>

            <div className="course-div">
              <h4 className="Course-heading">Web Development</h4>
              <span className="Course-span">45 Lessons</span>
            </div>
            </div>
          </td>

          <td className="table-column table-column-text">23 Feb,2023</td>
          <td className="table-column table-column-text">40<span style={{color:'gray'}}>/45</span> (97%)</td>
          <td className="table-column table-column-text">36h 30m 00s</td>
        </tr>

        {/* Third Row  */}
        <tr>
          <td className="table-column">
            <div className="icon-div">
            <i className="fa-solid fa-puzzle-piece icon3" style={{color:'rgb(236, 171, 51)',background:'rgb(233, 197, 132)'}}></i>

            <div className="course-div">
              <h4 className="Course-heading">Basic Data Science</h4>
              <span className="Course-span">37 Lessons</span>
            </div>
            </div>
          </td>

          <td className="table-column table-column-text">14 Jan,2023</td>
          <td className="table-column table-column-text">9<span style={{color:'gray'}}>/37</span> (40%)</td>
          <td className="table-column table-column-text">37h 00m 00s</td>
        </tr>

        {/* Fourth Row  */}
        <tr>
          <td className="table-column">
            <div className="icon-div">
            <i className="fa-solid fa-desktop icon3" style={{color:'rgb(19, 148, 19)',background:'rgb(120, 207, 120)'}}></i>

            <div className="course-div">
              <h4 className="Course-heading">Project Management</h4>
              <span className="Course-span">19 Lessons</span>
            </div>
            </div>
          </td>

          <td className="table-column table-column-text">27 Jan,2023</td>
          <td className="table-column table-column-text">14<span style={{color:'gray'}}>/19</span> (89%)</td>
          <td className="table-column table-column-text">13h 20m 00s</td>
        </tr>

        {/* Fifth Row  */}
        <tr>
          <td className="table-column">
            <div className="icon-div">
            <i className="fa-solid fa-diagram-project icon3" style={{color:'rgb(166, 0, 0)',background:'rgb(222, 142, 142)'}}></i>

            <div className="course-div">
              <h4 className="Course-heading">UI/UX Design</h4>
              <span className="Course-span">32 Lessons</span>
            </div>
            </div>
          </td>

          <td className="table-column table-column-text">19 Feb,2023</td>
          <td className="table-column table-column-text"><span style={{color:'gray'}}>26/32</span> (84%)</td>
          <td className="table-column table-column-text">16h 40m 50s</td>
        </tr>
      </table>


    
      
    </div>
  );
}

export default Task3;
